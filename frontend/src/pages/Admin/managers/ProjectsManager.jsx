import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { getAllProjects, uploadProjectImage, insertProject, deleteProject, updateProject } from '../../../Services/ManageData';
import {
  Card, TwoCol, Col, SectionTitle, SectionHead,
  FormCol, FormGroup, Label, Helper, Input, TextArea,
  Btn, BtnRow, ListItem, ItemsList, Badge, Empty, ImgPreview, Tag, TagList,
} from './Adminshared';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ── Extra bits ─────────────────────────────────────────────────
const Wrap = styled.div`
  animation: ${fadeUp} 0.4s ease both;
`;

const ProjectThumb = styled.div`
  width: 38px; height: 38px;
  border-radius: 7px;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;

  img { width: 100%; height: 100%; object-fit: cover; }
`;

const ItemBody = styled.div`
  flex: 1;
  min-width: 0;
  .name { font-size: 0.85rem; font-weight: 700; color: white; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .meta { font-size: 0.72rem; color: rgba(255,255,255,0.3); margin-top: 2px; font-family: 'JetBrains Mono', monospace; }
`;

const ColorDot = styled.div`
  width: 10px; height: 10px;
  border-radius: 50%;
  background: ${({ $c }) => $c};
  border: 1px solid rgba(255,255,255,0.15);
  flex-shrink: 0;
`;

const FormCard = styled(Card)`
  max-height: 75vh;
  overflow-y: auto;
`;

const FileZone = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1.5px dashed rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 22px 14px;
  cursor: pointer;
  text-align: center;
  background: rgba(255,255,255,0.02);
  transition: all 0.2s ease;

  &:hover { border-color: rgba(0,212,255,0.4); background: rgba(0,212,255,0.04); }
  ${({ $disabled }) => $disabled && 'opacity: 0.5; pointer-events: none;'}
`;

const FileZoneText = styled.div`
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
`;

const FileZoneHint = styled.div`
  font-size: 0.68rem;
  color: rgba(255,255,255,0.25);
  font-family: 'JetBrains Mono', monospace;
`;

// ── Component ──────────────────────────────────────────────────
const ProjectsManager = ({ onDataUpdate }) => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imgBusy, setImgBusy] = useState(false);
  const [imageError, setImageError] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [form, setForm] = useState({
    name: '', category: 'Fullstack', desc: '', tech: '',
    type: 'Web', accent: '#00d4ff', status: 'Completed', live: '', github: '', image: '',
  });

  useEffect(() => { load(); }, []);

  const load = async () => {
    try { setProjects((await getAllProjects()) || []); }
    catch(e) { console.error(e); }
  };

  const pick = (p) => {
    setSelected(p);
    setForm({
      name: p.name || '', category: p.category || 'Fullstack',
      desc: p.desc || '', tech: Array.isArray(p.tech) ? p.tech.join(', ') : p.tech || '',
      type: p.type || 'Web', accent: p.accent || '#00d4ff',
      status: p.status || 'Completed', live: p.live || '', github: p.github || '', image: p.image || '',
    });
    setImagePreview(p.image || ''); setImageError('');
  };

  const set = (k, v) => setForm(f => ({...f, [k]: v}));

  // Reads the picked file, resizes/compresses it in the browser, and stores
  // the resulting data URL as the live preview — this is what actually gets
  // saved as the project's image, replacing the old "paste an image URL" box.
  const handleImageFile = async (file) => {
    if (!file) return;
    setImageError(''); setImgBusy(true);
    try {
      const dataUrl = await uploadProjectImage(file);
      setImagePreview(dataUrl);
    } catch (err) {
      console.error(err);
      setImageError(err.message || 'Failed to process image');
    } finally {
      setImgBusy(false);
    }
  };

  const submit = async (e) => {
    e.preventDefault(); setUploading(true);
    try {
      const tech = form.tech.split(',').map(t => t.trim()).filter(Boolean);
      let data = {...form, tech, image: imagePreview};
      if (selected) { await updateProject(selected.id, data); }
      else          { await insertProject(data); }
      load(); reset(); onDataUpdate?.();
    } catch(e) { console.error(e); alert(e.message); }
    finally { setUploading(false); }
  };

  const del = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try { await deleteProject(id); load(); reset(); onDataUpdate?.(); }
    catch(e) { console.error(e); }
  };

  const reset = () => {
    setSelected(null); setImagePreview(''); setImageError('');
    setForm({ name:'', category:'Fullstack', desc:'', tech:'', type:'Web', accent:'#00d4ff', status:'Completed', live:'', github:'', image:'' });
  };

  return (
    <Wrap>
      <TwoCol>
        <Col>
          <SectionHead>
            <SectionTitle>Projects ({projects.length})</SectionTitle>
            <Btn variant="ghost" sm onClick={reset}>+ New</Btn>
          </SectionHead>
          <ItemsList>
            {projects.map(p => (
              <ListItem key={p.id} selected={selected?.id === p.id} onClick={() => pick(p)}>
                <ProjectThumb>
                  {p.image ? <img src={p.image} alt={p.name} /> : '📷'}
                </ProjectThumb>
                <ItemBody>
                  <div className="name">{p.name}</div>
                  <div className="meta">{p.category} · {p.type}</div>
                </ItemBody>
                <ColorDot $c={p.accent || '#00d4ff'} />
                <Btn variant="danger" sm onClick={e => { e.stopPropagation(); del(p.id); }}>
                  Delete
                </Btn>
              </ListItem>
            ))}
            {projects.length === 0 && <Empty>// no projects yet</Empty>}
          </ItemsList>
        </Col>

        <Col>
          <SectionTitle>{selected ? 'Edit Project' : 'New Project'}</SectionTitle>
          <FormCard>
            <form onSubmit={submit}>
              <FormCol>
                <FormGroup>
                  <Label>Project Image</Label>
                  <FileZone $disabled={uploading || imgBusy}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageFile(e.target.files?.[0])}
                      style={{ display: 'none' }}
                      disabled={uploading || imgBusy}
                    />
                    <FileZoneText>
                      {imgBusy ? 'Processing image…' : imagePreview ? 'Click to replace image' : 'Click to upload an image'}
                    </FileZoneText>
                    <FileZoneHint>JPG, PNG or WebP · resized &amp; compressed automatically</FileZoneHint>
                  </FileZone>
                  {imageError && <Helper style={{ color: '#f43f5e' }}>{imageError}</Helper>}
                  {imagePreview && (
                    <ImgPreview h="160px"><img src={imagePreview} alt="preview" /></ImgPreview>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Project Name *</Label>
                  <Input required value={form.name} onChange={e => set('name', e.target.value)}
                    placeholder="e.g., E-Commerce Platform" disabled={uploading} />
                </FormGroup>

                <FormGroup>
                  <Label>Category</Label>
                  <Input value={form.category} onChange={e => set('category', e.target.value)}
                    placeholder="Fullstack, Frontend, Backend..." disabled={uploading} />
                </FormGroup>

                <FormGroup>
                  <Label>Description *</Label>
                  <TextArea required value={form.desc} onChange={e => set('desc', e.target.value)}
                    placeholder="Describe your project..." disabled={uploading} />
                </FormGroup>

                <FormGroup>
                  <Label>Technologies</Label>
                  <Input value={form.tech} onChange={e => set('tech', e.target.value)}
                    placeholder="React, Node.js, MongoDB (comma-separated)" disabled={uploading} />
                  {form.tech && (
                    <TagList>
                      {form.tech.split(',').map(t => t.trim()).filter(Boolean).map(t => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </TagList>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>Type</Label>
                  <Input value={form.type} onChange={e => set('type', e.target.value)}
                    placeholder="Web, Mobile, Desktop" disabled={uploading} />
                </FormGroup>

                <FormGroup>
                  <Label>Status</Label>
                  <Input value={form.status} onChange={e => set('status', e.target.value)}
                    placeholder="Completed, In Progress..." disabled={uploading} />
                </FormGroup>

                <FormGroup>
                  <Label>Accent Color</Label>
                  <div style={{display:'flex',gap:10,alignItems:'center'}}>
                    <Input type="color" value={form.accent} onChange={e => set('accent', e.target.value)}
                      style={{width:60,flexShrink:0}} disabled={uploading} />
                    <Input value={form.accent} onChange={e => set('accent', e.target.value)} disabled={uploading} />
                  </div>
                </FormGroup>

                <FormGroup>
                  <Label>Live URL</Label>
                  <Input value={form.live} onChange={e => set('live', e.target.value)}
                    placeholder="https://example.com" disabled={uploading} />
                </FormGroup>

                <FormGroup>
                  <Label>GitHub URL</Label>
                  <Input value={form.github} onChange={e => set('github', e.target.value)}
                    placeholder="https://github.com/..." disabled={uploading} />
                </FormGroup>

                <BtnRow stretch>
                  <Btn variant="primary" type="submit" disabled={uploading}>
                    {uploading ? 'Saving...' : selected ? 'Update Project' : 'Create Project'}
                  </Btn>
                  {selected && (
                    <Btn variant="ghost" type="button" onClick={reset} disabled={uploading}>
                      Clear
                    </Btn>
                  )}
                </BtnRow>
              </FormCol>
            </form>
          </FormCard>
        </Col>
      </TwoCol>
    </Wrap>
  );
};

export default ProjectsManager;