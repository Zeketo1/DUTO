// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    onAuthStateChanged,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBygU7Z8MpKXr0Dk7RLMrWc87NSLFX1gxE",
    authDomain: "duto-4e588.firebaseapp.com",
    projectId: "duto-4e588",
    storageBucket: "duto-4e588.appspot.com",
    messagingSenderId: "388805044404",
    appId: "1:388805044404:web:c9e4c0f307443697370fe1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = res;
        await addDoc(collection(db, "user"), {
            userId: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (e) {
        toast.error(e.message);
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        toast.error(e.message);
    }
};

const googleSignIn = () => {
    try {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    } catch (e) {
        toast.error(e.message);
    }
};

const logout = () => {
    signOut(auth);
};
export { auth, db, signUp, login, logout, googleSignIn };
