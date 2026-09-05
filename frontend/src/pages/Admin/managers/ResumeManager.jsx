import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { getResumeInfo, getResumeDownloadUrl, uploadResume, deleteResume } from '../../../Services/ManageData';
import {
  Card, TwoCol, Col, SectionTitle,
  FormGroup, Label, Helper, Btn, BtnRow, Toast, Badge,
} from './Adminshared';

const fadeUp = keyframes`
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
`;

const Wrap = styled.div`
  animation: ${fadeUp} 0.4s ease both;
`;

const MAX_RESUME_KB = 700;

const DropZone = styled.div`
  border: 1.5px dashed ${({ $drag }) => $drag ? 'rgba(0,212,255,0.6)' : 'rgba(255,255,255,0.12)'};
  border-radius: 12px;
  padding: 36px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $drag }) => $drag ? 'rgba(0,212,255,0.06)' : 'rgba(255,255,255,0.02)'};

  &:hover {
    border-color: rgba(0,212,255,0.4);
    background: rgba(0,212,255,0.04);
  }
`;

const DropIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 10px;
  opacity: 0.5;
`;

const DropText = styled.div`
  color: rgba(255,255,255,0.6);
  font-size: 0.88rem;
  font-weight: 600;
`;

const DropHint = styled.div`
  color: rgba(255,255,255,0.28);
  font-size: 0.74rem;
  margin-top: 6px;
  font-family: 'JetBrains Mono', monospace;
`;

const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
`;

const FileIcon = styled.div`
  width: 40px; height: 40px; border-radius: 9px; flex-shrink: 0;
  background: rgba(244,63,94,0.1);
  border: 1px solid rgba(244,63,94,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
`;

const FileInfo = styled.div`
  flex: 1; min-width: 0;
  .name { color: white; font-size: 0.86rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .meta { color: rgba(255,255,255,0.32); font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; margin-top: 2px; }
`;

const InfoCard = styled(Card)`
  padding: 16px;
  background: rgba(0,212,255,0.04);
  border-color: rgba(0,212,255,0.12);
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.7;
`;

const formatBytes = (bytes) => {
  if (!bytes && bytes !== 0) return '';
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
};

const formatDate = (iso) => {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium', timeStyle: 'short',
    });
  } catch {
    return iso;
  }
};

const ResumeManager = () => {
  const [current, setCurrent] = useState(null);   // { fileName, size, uploadedAt } | null
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [saved, setSaved] = useState('');
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    const info = await getResumeInfo();
    setCurrent(info);
  };

  const flash = (msg) => { setSaved(msg); setTimeout(() => setSaved(''), 3000); };

  const handleFile = async (file) => {
    if (!file) return;
    setError('');

    if (file.type !== 'application/pdf') {
      setError('Only PDF files are allowed.');
      return;
    }
    if (file.size > MAX_RESUME_KB * 1024) {
      setError(`File is too large (${formatBytes(file.size)}). Max size is ${MAX_RESUME_KB}KB.`);
      return;
    }

    setLoading(true);
    try {
      await uploadResume(file);
      flash('✓ Resume uploaded successfully!');
      await loadData();
    } catch (e) {
      console.error(e);
      setError(e.message || 'Failed to upload resume');
    } finally {
      setLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const onInputChange = (e) => handleFile(e.target.files?.[0]);

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const handleDelete = async () => {
    if (!window.confirm('Remove the current resume? Visitors will no longer be able to download it.')) return;
    setDeleting(true);
    try {
      await deleteResume();
      setCurrent(null);
      flash('✓ Resume removed');
    } catch (e) {
      console.error(e);
      setError(e.message || 'Failed to delete resume');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Wrap>
      <TwoCol>
        <Col>
          <SectionTitle>Upload Resume</SectionTitle>
          <Card>
            {saved && <Toast>{saved}</Toast>}
            <FormGroup>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={onInputChange}
                style={{ display: 'none' }}
                disabled={loading}
              />
              <DropZone
                $drag={dragOver}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
              >
                <DropIcon>📄</DropIcon>
                <DropText>{loading ? 'Uploading…' : 'Click or drag a PDF here'}</DropText>
                <DropHint>PDF only · max {MAX_RESUME_KB}KB</DropHint>
              </DropZone>
              {error && <Helper style={{ color: '#f43f5e' }}>{error}</Helper>}
            </FormGroup>
          </Card>

          <InfoCard style={{ marginTop: 16 }}>
            📎 This replaces the current resume — visitors will always get the
            latest one you upload here.<br />
            Kept small on purpose: files are stored directly in the database,
            so PDFs must stay under {MAX_RESUME_KB}KB.
          </InfoCard>
        </Col>

        <Col>
          <SectionTitle>Current Resume</SectionTitle>
          <Card>
            {current ? (
              <FormGroup>
                <FileRow>
                  <FileIcon>📕</FileIcon>
                  <FileInfo>
                    <div className="name">{current.fileName}</div>
                    <div className="meta">
                      {formatBytes(current.size)} · uploaded {formatDate(current.uploadedAt)}
                    </div>
                  </FileInfo>
                  <Badge color="green">live</Badge>
                </FileRow>

                <BtnRow style={{ marginTop: 14 }}>
                  <Btn
                    as="a"
                    href={getResumeDownloadUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="cyan-outline"
                    sm
                  >
                    ⬇ Download
                  </Btn>
                  <Btn variant="danger" sm onClick={handleDelete} disabled={deleting}>
                    {deleting ? 'Removing…' : '🗑 Remove'}
                  </Btn>
                </BtnRow>
              </FormGroup>
            ) : (
              <Helper>No resume uploaded yet. Upload a PDF to let visitors download it from your site.</Helper>
            )}
          </Card>
        </Col>
      </TwoCol>
    </Wrap>
  );
};

export default ResumeManager;
