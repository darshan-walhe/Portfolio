import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { getAboutMe, uploadProfileImage, updateAboutMe } from '../../../Services/ManageData';
import {
  Card, TwoCol, Col, SectionTitle,
  FormCol, FormGroup, Label, Helper, Input, TextArea,
  Btn, Toast, ImgPreview,
} from './Adminshared';

const fadeUp = keyframes`
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
`;

const Wrap = styled.div`
  animation: ${fadeUp} 0.4s ease both;
`;

const ProfileCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AvatarPreview = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 12px;
  background: rgba(255,255,255,0.03);
  border: 1px dashed rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlaceholderIcon = styled.div`
  font-size: 4rem;
  opacity: 0.15;
`;

const InfoCard = styled(Card)`
  padding: 16px;
  background: rgba(0,212,255,0.04);
  border-color: rgba(0,212,255,0.12);
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.7;
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

const AboutManager = ({ onDataUpdate }) => {
  const [loading,  setLoading]  = useState(false);
  const [saved,    setSaved]    = useState(false);
  const [imgBusy,  setImgBusy]  = useState(false);
  const [imgError, setImgError] = useState('');
  const [imgPrev,  setImgPrev]  = useState('');
  const [form, setForm] = useState({
    bio:'', role:'', location:'', profileImage:'',
  });

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    try {
      const d = await getAboutMe();
      if (d) {
        setForm({ bio:d.bio||'', role:d.role||'', location:d.location||'',
                  profileImage:d.profileImage||'' });
        setImgPrev(d.profileImage || '');
      }
    } catch(e) { console.error(e); }
  };

  const set = (k, v) => setForm(f => ({...f, [k]: v}));

  // Resizes/compresses the picked file client-side and previews the result;
  // this data URL is what actually gets saved as the profile image.
  const handleImageFile = async (file) => {
    if (!file) return;
    setImgError(''); setImgBusy(true);
    try {
      const dataUrl = await uploadProfileImage(file);
      setImgPrev(dataUrl);
    } catch (err) {
      console.error(err);
      setImgError(err.message || 'Failed to process image');
    } finally {
      setImgBusy(false);
    }
  };

  const submit = async (e) => {
    e.preventDefault(); setLoading(true);
    try {
      let data = {...form, profileImage: imgPrev};
      await updateAboutMe(data);
      setSaved(true); setTimeout(() => setSaved(false), 3000);
      loadData(); onDataUpdate?.();
    } catch(e) { console.error(e); alert(e.message); }
    finally { setLoading(false); }
  };

  return (
    <Wrap>
      <TwoCol>
        <Col>
          <SectionTitle>Profile Image</SectionTitle>
          <ProfileCard>
            <AvatarPreview>
              {imgPrev
                ? <img src={imgPrev} alt="Profile" />
                : <PlaceholderIcon>👤</PlaceholderIcon>
              }
            </AvatarPreview>
            <InfoCard>
              📸 Upload a professional profile photo for the Hero section.<br />
              Recommended: 400×400px or larger · JPG, PNG, WebP
            </InfoCard>
          </ProfileCard>
        </Col>

        <Col>
          <SectionTitle>About & Profile</SectionTitle>
          <Card>
            {saved && <Toast>✓ About section updated successfully!</Toast>}
            <form onSubmit={submit}>
              <FormCol>
                <FormGroup>
                  <Label>Profile Image</Label>
                  <FileZone $disabled={loading || imgBusy}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={e => handleImageFile(e.target.files?.[0])}
                      style={{ display: 'none' }}
                      disabled={loading || imgBusy}
                    />
                    <FileZoneText>
                      {imgBusy ? 'Processing image…' : imgPrev ? 'Click to replace photo' : 'Click to upload a photo'}
                    </FileZoneText>
                    <FileZoneHint>JPG, PNG or WebP · resized &amp; compressed automatically</FileZoneHint>
                  </FileZone>
                  {imgError && <Helper style={{ color: '#f43f5e' }}>{imgError}</Helper>}
                </FormGroup>

                <FormGroup>
                  <Label>Your Role / Title</Label>
                  <Input value={form.role} onChange={e => set('role', e.target.value)}
                    placeholder="e.g., Full-Stack Developer" disabled={loading} />
                </FormGroup>

                <FormGroup>
                  <Label>Location</Label>
                  <Input value={form.location} onChange={e => set('location', e.target.value)}
                    placeholder="e.g., San Francisco, CA" disabled={loading} />
                </FormGroup>

                <FormGroup>
                  <Label>Bio / About You</Label>
                  <TextArea minH="130px" value={form.bio} onChange={e => set('bio', e.target.value)}
                    placeholder="Tell visitors about yourself, your experience, and what you're passionate about…"
                    disabled={loading} />
                </FormGroup>

                <Btn variant="primary" type="submit" disabled={loading} style={{width:'100%'}}>
                  {loading ? 'Saving…' : 'Save About Section'}
                </Btn>
              </FormCol>
            </form>
          </Card>
        </Col>
      </TwoCol>
    </Wrap>
  );
};

export default AboutManager;