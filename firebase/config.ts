import { initializeApp, getApps, getApp } from "firebase/app"
//@ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
	apiKey: "AIzaSyAKhRKx641BNGlim9jdqtqbSdILO3GiLbU",
	authDomain: "tech-challenge-3-9f1ee.firebaseapp.com",
	projectId: "tech-challenge-3-9f1ee",
	storageBucket: "tech-challenge-3-9f1ee.firebasestorage.app",
	messagingSenderId: "855400261531",
	appId: "1:855400261531:web:c0e93d5da639ca250da33e",
	measurementId: "G-LNYKPCEQ07"
}

const app = getApps().length === 0
	? initializeApp(firebaseConfig)
	: getApp()

export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage)
})

export { app }

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAKhRKx641BNGlim9jdqtqbSdILO3GiLbU",
//   authDomain: "tech-challenge-3-9f1ee.firebaseapp.com",
//   projectId: "tech-challenge-3-9f1ee",
//   storageBucket: "tech-challenge-3-9f1ee.firebasestorage.app",
//   messagingSenderId: "855400261531",
//   appId: "1:855400261531:web:c0e93d5da639ca250da33e",
//   measurementId: "G-LNYKPCEQ07"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);