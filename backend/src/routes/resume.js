import { Router } from 'express';
import db from '../config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

const router = Router();

// GET /api/resume - metadata only (no file bytes), used to show/hide the
// "Download Resume" button and its label on the public site.
router.get('/', async (req, res) => {
  try {
    const docSnap = await getDoc(doc(db, 'Resume', 'current'));

    if (!docSnap.exists()) {
      return res.json(null);
    }

    const { fileName, size, contentType, uploadedAt } = docSnap.data();
    res.json({ fileName, size, contentType, uploadedAt });
  } catch (error) {
    console.error('GET /resume error:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/resume/download - streams the actual PDF back to the browser
router.get('/download', async (req, res) => {
  try {
    const docSnap = await getDoc(doc(db, 'Resume', 'current'));

    if (!docSnap.exists()) {
      return res.status(404).json({ error: 'No resume has been uploaded yet' });
    }

    const { fileData, fileName, contentType } = docSnap.data();
    const buffer = Buffer.from(fileData, 'base64');

    res.set({
      'Content-Type': contentType || 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileName || 'resume.pdf'}"`,
      'Content-Length': buffer.length,
    });
    res.send(buffer);
  } catch (error) {
    console.error('GET /resume/download error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
