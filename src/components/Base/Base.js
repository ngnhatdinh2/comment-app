import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
  apiKey: 'AIzaSyCs8PzwbtNw2lsGnTfb1EtKXQIqb5rgu-E',
  authDomain: 'hellow-world-847f3.firebaseapp.com',
  databaseURL: 'https://hellow-world-847f3.firebaseio.com',
  projectId: 'hellow-world-847f3'
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;