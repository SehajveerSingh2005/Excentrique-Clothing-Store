
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
        

const firebaseConfig = {
    apiKey: "AIzaSyDJL4cahnMBpAIKfZsBmlme6dwurkOVYq8",
    authDomain: "excentrique-clothing-store.firebaseapp.com",
    projectId: "excentrique-clothing-store",
    storageBucket: "excentrique-clothing-store.appspot.com",
    messagingSenderId: "733975013651",
    appId: "1:733975013651:web:ea5817ab9050bafd2652e6",
    measurementId: "G-2GV43RDLYB"
};
      
        // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth,(user) => {
    const profilebtn = document.getElementById('profile-btn');
    const loginbtn = document.getElementById('loginbtn');
  
    if (user) {
      // Check if the screen width is greater than 767px (not mobile)
      if (window.innerWidth >= 768) {
        // If it's desktop, keep it hidden
        profilebtn.style.display = 'block';
        loginbtn.style.display = 'none';
      } else {
        // For mobile, display the icon
        profilebtn.style.display = 'none';
      }
    } else {
      // If no user is logged in, hide the icon
      profilebtn.style.display = 'none'
      loginbtn.style.display = 'block';
    }
});
  
  // Handle window resizing
window.addEventListener('resize', () => {
    onAuthStateChanged(auth,(user) => {
        const profilebtn = document.getElementById('profile-btn');
        const loginbtn = document.getElementById('loginbtn');
      
        if (user) {
          // Check if the screen width is greater than 767px (not mobile)
          if (window.innerWidth >= 768) {
            // If it's desktop, keep it hidden
            profilebtn.style.display = 'block';
            loginbtn.style.display = 'none';
          } else {
            // For mobile, display the icon
            profilebtn.style.display = 'none';
          }
        } else {
          // If no user is logged in, hide the icon
          profilebtn.style.display = 'none'
          loginbtn.style.display = 'block';
        }
    });
});
