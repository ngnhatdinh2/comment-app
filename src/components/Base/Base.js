import Rebase from 're-base';
import firebase from 'firebase';


var firebaseApp  = firebase.initializeApp({
  apiKey: 'AIzaSyCs8PzwbtNw2lsGnTfb1EtKXQIqb5rgu-E',
  authDomain: 'hellow-world-847f3.firebaseapp.com',
  databaseURL: 'https://hellow-world-847f3.firebaseio.com',
  projectId: 'hellow-world-847f3',
  storageBucket : "hellow-world-847f3. appspot.com " ,     
  messagingSenderId :"647527699737",
});

const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebaseApp.auth();
export default base;
