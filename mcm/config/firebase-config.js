

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js"; // <--- AJOUTER ÇA



const firebaseConfig = {
    apiKey: "AIzaSyDmf_Tup7Ghwid4OStDRPEpS9Y7dRXkiOA",
    authDomain: "mycitymall-mcm.firebaseapp.com",
    projectId: "mycitymall-mcm",
    storageBucket: "mycitymall-mcm.firebasestorage.app",
    messagingSenderId: "957763092383",
    appId: "1:957763092383:web:c6a03a8c88caee220307aa"
  
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // <--- AJOUTER ÇA
