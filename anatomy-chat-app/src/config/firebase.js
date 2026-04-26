
import { getApp, initializeApp } from "firebase/app";
import { getApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD05z9JFVPltFAkoGqxeKW8XviVemC3gWo",
    authDomain: "anatomy-lab-chat-test-app.firebaseapp.com",
    projectId: "anatomy-lab-chat-test-app",
    storageBucket: "anatomy-lab-chat-test-app.firebasestorage.app",
    messagingSenderId: "14576108321",
    appId: "1:14576108321:web:a8c0a0c7c01e1f62fd7460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getApp
const db = getFirestore(app);

const signup = async (username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey,There I am using chat app",
            lastSeen: Date.now()
        })
        await setDoc(doc(db, "chats", user.uid), {
            chatData: []

        })

    } catch (error) {
        console.error(error)
    }
}