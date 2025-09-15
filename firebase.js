// Importações Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCuEpu6-I7c9PGSe-OOsNGcphrswVoNqjk",
  authDomain: "sarau-bac13.firebaseapp.com",
  projectId: "sarau-bac13",
  storageBucket: "sarau-bac13.appspot.com",
  messagingSenderId: "172569092550",
  appId: "1:172569092550:web:f13377a51bbbda6be6d2c7",
  measurementId: "G-NQSMZWL4P3"
};

// Inicialização
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
