import React, { useState, useEffect } from 'react';
import './App.css';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'; 

import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';

import Game from './game/Game.js';

const app = initializeApp({
  apiKey: "AIzaSyD2gdKVg8G6Lz4sRkhqsB2ByfDNo_tM244",
  authDomain: "latin-city.firebaseapp.com",
  projectId: "latin-city",
  storageBucket: "latin-city.appspot.com",
  messagingSenderId: "276478527814",
  appId: "1:276478527814:web:e7d8fc82452d4dfa437d47"
})

window.addEventListener('resize', function() {
  document.body.style.height = window.innerHeight + 'px';
});
document.body.style.height = window.innerHeight + 'px';

const auth = getAuth();

const db = getFirestore(app); 

var userUID = "";

const DUMMY_STATS = {
  name: "ASK THE ADMINISTRATOR TO GET A PLAYER ACCOUNT",
  cityName: "???",
  stats: {
    economic: 1,
    military: 2,
    social: 3
  },
  prestige: 4,
  resources: {
    cohesion: 5,
    culture: 6,
    power: 7,
    order: 8,
    production: 9,
    knowledge: 10
  }
};

function App() {

  const [loggedStatus, setLoggedStatus] = useState(false);
  const [playerStats, setPlayerStats] = useState(DUMMY_STATS);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLoggedStatus(true);
        getUserPlayerInfo(user.uid).then(data => {
          setPlayerStats(data);
        });
        userUID = user.uid; 
      } else {
        setLoggedStatus(false);
        setPlayerStats(DUMMY_STATS)
        userUID = ""; 
      }
    });
    return unsubscribe; 
  }, []);

  return (
    <div className="App">
      <header>
        {loggedStatus ? <SignOut /> : <SignIn />}
        <h1>User ID: {userUID}</h1>
      </header>
      <main>
        {loggedStatus ? <Game data={playerStats} /> : <div></div>}
      </main>
      <footer>
        <div>
          {<FooterContent />}
        </div>
      </footer>
    </div>
  );
}

async function getDocumentData(uid) {
  const collectionRef = collection(db, 'playerInfo');
  const q = query(collectionRef, where("userID", "==", uid));
  const querySnapshot = await getDocs(q); 
  let data = null; 
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data; 
}

async function getUserPlayerInfo(uid) {
  try {
    const data = await getDocumentData(uid);
    if (data !== null) {
      return data; 
    } else {
      console.log('No matching documents.');
      return DUMMY_STATS; 
    }
  } catch (error) {
    console.log('Error getting document: ', error);
  }
}

function FooterContent() {
  const today = new Date();
  return (
    <div>
      <h4>Copyright @ Eon Star Interactive</h4>
      <h5>{today.getFullYear()}</h5>
    </div>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        userUID = user.uid;
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        userUID = ""; 
      });
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

export default App;
