import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDEbVeMtwog5LO0UcOVdXBr2TYHAizPB-Q',
  authDomain: 'reactnativechat-b2f8f.firebaseapp.com',
  databaseURL: 'https://reactnativechat-b2f8f-default-rtdb.firebaseio.com',
  projectId: 'reactnativechat-b2f8f',
  storageBucket: 'reactnativechat-b2f8f.appspot.com',
  messagingSenderId: '977340299917',
  appId: '1:977340299917:web:a756482b9abc4c19d540c4',
  measurementId: 'G-P9HN5WDG32',
};

const app = initializeApp(firebaseConfig);
console.log(app, '1111111111111111111111111');
export default app;
