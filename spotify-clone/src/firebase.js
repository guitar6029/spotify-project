import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const configOptions = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REAC_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REAC_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

const app = initializeApp(configOptions);
export const auth = getAuth(app);
export default app;