// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, Auth } from 'firebase/auth';
import Config from 'react-native-config';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYRBpgULIXFCfPTeBG9DQ5P0JjJe3zEpY',
  authDomain: 'taskflow-7312e.firebaseapp.com',
  projectId: 'taskflow-7312e',
  storageBucket: 'taskflow-7312e.firebasestorage.app',
  messagingSenderId: '162667616084',
  appId: '1:162667616084:web:cb1e55564c8130d6ebdac1',
  measurementId: 'G-M1W9CFK1KR',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});