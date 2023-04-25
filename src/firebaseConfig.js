import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC2Iwfuet-NQ-9mmgiPBiavs7rrygho-Ww",
    authDomain: "vue-3-2023-26464.firebaseapp.com",
    projectId: "vue-3-2023-26464",
    storageBucket: "vue-3-2023-26464.appspot.com",
    messagingSenderId: "830968405084",
    appId: "1:830968405084:web:4f788b5ab872f145c4da99"
};

// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
//

export const auth = getAuth();
