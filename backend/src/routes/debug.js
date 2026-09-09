import { Router } from 'express';
import { auth } from '../config/firebase.js';

const router = Router();

// TEMPORARY — remove this file once the Firestore auth issue is resolved.
// Reports whether the backend actually authenticated with Firebase,
// without exposing secrets, so it can be checked with a plain curl
// instead of hunting through Vercel's log UI.
router.get('/', (req, res) => {
  res.json({
    adminEmailEnvSet: !!process.env.ADMIN_EMAIL,
    adminPasswordEnvSet: !!process.env.ADMIN_PASSWORD,
    adminEmailEnvValueMasked: process.env.ADMIN_EMAIL
      ? process.env.ADMIN_EMAIL.replace(/(.{2}).+(@.+)/, '$1***$2')
      : null,
    firebaseCurrentUser: auth.currentUser
      ? { email: auth.currentUser.email, uid: auth.currentUser.uid }
      : null,
  });
});

export default router;
