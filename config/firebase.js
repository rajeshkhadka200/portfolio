import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "personal-portfolio-3a4fa.firebaseapp.com",
    projectId: "personal-portfolio-3a4fa",
    storageBucket: "personal-portfolio-3a4fa.appspot.com",
    messagingSenderId: process.env.SENDER_ID,
    appId: "1:166586988724:web:8ce67efaf68ae9fc7d3fe1",
    measurementId: "G-6GVYKX2YGE"
};

const app = initializeApp(firebaseConfig);