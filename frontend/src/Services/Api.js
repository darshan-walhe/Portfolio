const API_URL = 'https://portfolio-ogjb.vercel.app';

//const API_URL = 'http://localhost:3000';



const getAuthHeader = () => {
  const token = localStorage.getItem('adminToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

/**
 * Centralized error handling for all API calls.
 * Now logs the HTTP status so you can diagnose 401 vs 404 vs 500 instantly.
 */
const handleResponse = async (response, errorMessage) => {
  if (!response.ok) {
    let serverMsg = errorMessage;
    try {
      const error = await response.json();
      serverMsg = error.error || errorMessage;
    } catch (_) { }

    // Auto-clear expired/invalid token and redirect to login — but ONLY when
    // this request actually carried a session token. Without this check, a
    // wrong-password response from POST /api/admin/login (which never had a
    // token to begin with) also matched here and force-reloaded the login
    // page, wiping out the "Invalid credentials" message before the user
    // ever saw it. A missing/expired session, by contrast, always fails on a
    // request that *did* have a token, so gating on that distinguishes the
    // two cases correctly.
    const hadToken = !!localStorage.getItem('adminToken');
    if ((response.status === 401 || response.status === 403) && hadToken) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminAuth');
      window.location.href = '/admin'; // adjust to your login route
    }

    console.error(`API [${response.status}] ${response.url} →`, serverMsg);
    throw new Error(serverMsg);
  }
  return response.json();
};

// ===================================================================
//                        Projects
// ===================================================================
export const getAllProjects = async () => {
  try {
    const res = await fetch(`${API_URL}/api/projects`);
    return await handleResponse(res, 'Failed to fetch projects');
  } catch (error) {
    console.error('getAllProjects error:', error);
    throw error;
  }
};

export const getProjectByCategory = async (category) => {
  try {
    const res = await fetch(`${API_URL}/api/projects/${category}`);
    return await handleResponse(res, 'Failed to fetch projects');
  } catch (error) {
    console.error('getProjectByCategory error:', error);
    throw error;
  }
};

export const insertProject = async (projectData) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(projectData),
    });
    const data = await handleResponse(res, 'Failed to create project');
    return data.id;
  } catch (error) {
    console.error('insertProject error:', error);
    throw error;
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(projectData),
    });
    await handleResponse(res, 'Failed to update project');
  } catch (error) {
    console.error('updateProject error:', error);
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/projects/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    await handleResponse(res, 'Failed to delete project');
  } catch (error) {
    console.error('deleteProject error:', error);
    throw error;
  }
};

// ==================================================================
//                        Skills
// ==================================================================
export const getAllSkills = async () => {
  try {
    const res = await fetch(`${API_URL}/api/skills`);
    return await handleResponse(res, 'Failed to fetch skills');
  } catch (error) {
    console.error('getAllSkills error:', error);
    throw error;
  }
};

export const getSkillsByCategory = async (category) => {
  try {
    const res = await fetch(`${API_URL}/api/skills/${category}`);
    return await handleResponse(res, 'Failed to fetch skills');
  } catch (error) {
    console.error('getSkillsByCategory error:', error);
    throw error;
  }
};

export const insertSkill = async (skillData) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/skills`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(skillData),
    });
    const data = await handleResponse(res, 'Failed to create skill');
    return data.id;
  } catch (error) {
    console.error('insertSkill error:', error);
    throw error;
  }
};

export const updateSkill = async (id, skillData) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/skills/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(skillData),
    });
    await handleResponse(res, 'Failed to update skill');
  } catch (error) {
    console.error('updateSkill error:', error);
    throw error;
  }
};

export const deleteSkill = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/skills/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    await handleResponse(res, 'Failed to delete skill');
  } catch (error) {
    console.error('deleteSkill error:', error);
    throw error;
  }
};

// ==================================================================
//                        Experiences
// ==================================================================
export const getAllExperiences = async () => {
  try {
    const res = await fetch(`${API_URL}/api/experiences`);
    return await handleResponse(res, 'Failed to fetch experiences');
  } catch (error) {
    console.error('getAllExperiences error:', error);
    throw error;
  }
};

export const insertExperience = async (expData) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/experiences`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(expData),
    });
    const data = await handleResponse(res, 'Failed to create experience');
    return data.id;
  } catch (error) {
    console.error('insertExperience error:', error);
    throw error;
  }
};

export const updateExperience = async (id, expData) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/experiences/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(expData),
    });
    await handleResponse(res, 'Failed to update experience');
  } catch (error) {
    console.error('updateExperience error:', error);
    throw error;
  }
};

export const deleteExperience = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/experiences/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    await handleResponse(res, 'Failed to delete experience');
  } catch (error) {
    console.error('deleteExperience error:', error);
    throw error;
  }
};

// ==================================================================
//                        About
// ==================================================================
export const getAboutMe = async () => {
  try {
    const res = await fetch(`${API_URL}/api/about`);
    return await handleResponse(res, 'Failed to fetch about');
  } catch (error) {
    console.error('getAboutMe error:', error);
    throw error;
  }
};

export const updateAboutMe = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/about`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(data),
    });
    await handleResponse(res, 'Failed to update about');
  } catch (error) {
    console.error('updateAboutMe error:', error);
    throw error;
  }
};

// ==================================================================
//                        Messages
// ==================================================================
export const sendMessage = async (messageData) => {
  try {
    const res = await fetch(`${API_URL}/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData),
    });
    const data = await handleResponse(res, 'Failed to send message');
    return data.id;
  } catch (error) {
    console.error('sendMessage error:', error);
    throw error;
  }
};

export const getAllMessages = async () => {
  try {
    const res = await fetch(`${API_URL}/api/admin/messages`, {
      headers: { ...getAuthHeader() },
    });
    return await handleResponse(res, 'Failed to fetch messages');
  } catch (error) {
    console.error('getAllMessages error:', error);
    throw error;
  }
};

export const markMessageAsRead = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/messages/${id}/read`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    await handleResponse(res, 'Failed to mark message as read');
  } catch (error) {
    console.error('markMessageAsRead error:', error);
    throw error;
  }
};

export const deleteMessage = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/messages/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    await handleResponse(res, 'Failed to delete message');
  } catch (error) {
    console.error('deleteMessage error:', error);
    throw error;
  }
};

// ==================================================================
//                        Image Upload
// ==================================================================
// There's no Firebase Storage bucket wired up on the backend, so images are
// stored the same way the resume already is: as a base64 data URL saved
// directly on the Firestore document (Projects.image / AboutMe.profileImage).
// To stay well under Firestore's 1MiB-per-document limit we resize and
// compress the image in the browser before it ever leaves the client.
const MAX_IMAGE_OUTPUT_BYTES = 900 * 1024; // ~900KB decoded, safely under 1MiB

const fileToOptimizedDataUrl = (file, maxDimension = 1000, startQuality = 0.85) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('No file selected'));
    if (!file.type || !file.type.startsWith('image/')) {
      return reject(new Error('Please select an image file (JPG, PNG, WebP...)'));
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read the selected file'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to load the selected image'));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width >= height) {
            height = Math.round((height / width) * maxDimension);
            width = maxDimension;
          } else {
            width = Math.round((width / height) * maxDimension);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Step quality down until the encoded size fits the budget
        let quality = startQuality;
        let dataUrl = canvas.toDataURL('image/jpeg', quality);
        const approxBytes = (u) => u.length * 0.75;

        while (approxBytes(dataUrl) > MAX_IMAGE_OUTPUT_BYTES && quality > 0.35) {
          quality -= 0.1;
          dataUrl = canvas.toDataURL('image/jpeg', quality);
        }

        if (approxBytes(dataUrl) > MAX_IMAGE_OUTPUT_BYTES) {
          return reject(new Error('Image is too large even after compression. Try a smaller image.'));
        }

        resolve(dataUrl);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
};

// Admin: reads an image File, resizes/compresses it client-side, and returns
// a data URL ready to be saved as the project's `image` field.
export const uploadProjectImage = (file) => fileToOptimizedDataUrl(file, 1000, 0.85);

// Admin: same idea for the About/Hero profile photo (slightly smaller, since
// it's only ever shown at avatar size).
export const uploadProfileImage = (file) => fileToOptimizedDataUrl(file, 700, 0.85);

// ==================================================================
//                        Admin Authentication
// ==================================================================
export const adminLogin = async (email, password) => {
  try {

    const res = await fetch(`${API_URL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await handleResponse(res, 'Invalid password');
    localStorage.setItem('adminToken', data.token);
    return data.token;
  } catch (error) {
    console.error('adminLogin error:', error);
    throw error;
  }
};

export const adminLogout = () => {
  localStorage.removeItem('adminToken');
};

export const isAdminAuthenticated = () => {
  return !!localStorage.getItem('adminToken');
};

export const getProfileImage = async () => {
  try {
    const about = await getAboutMe();
    return about?.profileImage || null;
  } catch (error) {
    console.error('getProfileImage error:', error);
    return null;
  }
};

// ==================================================================
//                        Resume
// ==================================================================

// Public: current resume metadata (or null if none uploaded)
export const getResumeInfo = async () => {
  try {
    const res = await fetch(`${API_URL}/api/resume`);
    return await handleResponse(res, 'Failed to fetch resume info');
  } catch (error) {
    console.error('getResumeInfo error:', error);
    return null;
  }
};

// Public: direct URL the browser can download/open (used as an <a href>)
export const getResumeDownloadUrl = () => `${API_URL}/api/resume/download`;

// Admin: reads a File object, base64-encodes it, and uploads it
export const uploadResume = async (file) => {
  try {
    if (!file) throw new Error('No file selected');
    if (file.type !== 'application/pdf') throw new Error('Only PDF files are allowed');

    const fileData = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result); // data:application/pdf;base64,....
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });

    const res = await fetch(`${API_URL}/api/admin/resume`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify({ fileName: file.name, fileData }),
    });
    return await handleResponse(res, 'Failed to upload resume');
  } catch (error) {
    console.error('uploadResume error:', error);
    throw error;
  }
};

// Admin: remove the current resume
export const deleteResume = async () => {
  try {
    const res = await fetch(`${API_URL}/api/admin/resume`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    await handleResponse(res, 'Failed to delete resume');
  } catch (error) {
    console.error('deleteResume error:', error);
    throw error;
  }
};

// ==================================================================
//                        Education
// ==================================================================
export const getAllEducation = async () => {
  try {
    const res = await fetch(`${API_URL}/api/education`);
    return await handleResponse(res, 'Failed to fetch education');
  } catch (error) {
    console.error('getAllEducation error:', error);
    throw error;
  }
};

export const insertEducation = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/education`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(data),
    });
    const result = await handleResponse(res, 'Failed to create education');
    return result.id;
  } catch (error) {
    console.error('insertEducation error:', error);
    throw error;
  }
};

export const updateEducation = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/education/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(data),
    });
    await handleResponse(res, 'Failed to update education');
  } catch (error) {
    console.error('updateEducation error:', error);
    throw error;
  }
};

export const deleteEducation = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/education/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    await handleResponse(res, 'Failed to delete education');
  } catch (error) {
    console.error('deleteEducation error:', error);
    throw error;
  }
};

// ==================================================================
//                        Certifications
// ==================================================================
export const getAllCertifications = async () => {
  try {
    const res = await fetch(`${API_URL}/api/certifications`);
    return await handleResponse(res, 'Failed to fetch certifications');
  } catch (error) {
    console.error('getAllCertifications error:', error);
    throw error;
  }
};

export const insertCertification = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/certifications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(data),
    });
    const result = await handleResponse(res, 'Failed to create certification');
    return result.id;
  } catch (error) {
    console.error('insertCertification error:', error);
    throw error;
  }
};

export const updateCertification = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/certifications/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(data),
    });
    await handleResponse(res, 'Failed to update certification');
  } catch (error) {
    console.error('updateCertification error:', error);
    throw error;
  }
};

export const deleteCertification = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/admin/certifications/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    await handleResponse(res, 'Failed to delete certification');
  } catch (error) {
    console.error('deleteCertification error:', error);
    throw error;
  }
};

// ==================================================================
//                        Analytics
// ==================================================================
export const handleLinkClickAnalytics = async (link) => {
  try {
    fetch(`${API_URL}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'interaction', NavTab: link.toLowerCase() }),
    }).catch(() => { });
  } catch (error) {
    console.error('handleLinkClickAnalytics error:', error);
  }
};

export const handleProjectClickAnalytics = async (link) => {
  try {
    fetch(`${API_URL}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'interaction', Project: link.toLowerCase() }),
    }).catch(() => { });
  } catch (error) {
    console.error('handleProjectClickAnalytics error:', error);
  }
};

// Public: records one page-visit event. Nothing in the app called this
// before, which is why the Dashboard's "Visitors" line always sat flat at 0 —
// there was simply never any 'visit' data to plot.
export const trackPageVisit = async () => {
  try {
    fetch(`${API_URL}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'visit' }),
    }).catch(() => { });
  } catch (error) {
    console.error('trackPageVisit error:', error);
  }
};

export const HeroEventTracker = async (section) => {
  try {
    fetch(`${API_URL}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ module: 'Hero', type: 'interaction', section }),
    }).catch(() => { });
  } catch (error) {
    console.error('HeroEventTrackerAnalytics error:', error);
  }
};

export const ContactFormAnalytics = async () => {
  try {
    fetch(`${API_URL}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'interaction', section: 'contact-form' }),
    }).catch(() => { });
  } catch (error) {
    console.error('ContactFormAnalytics error:', error);
  }
};
