import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import 'firebase/auth';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
