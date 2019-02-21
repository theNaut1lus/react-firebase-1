import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import 'firebase/auth';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAIkX6hKs8rH9EJFiASCI6bpONHbvXeVo0",
  authDomain: "react-crud-10ec7.firebaseapp.com",
  databaseURL: "https://react-crud-10ec7.firebaseio.com",
  projectId: "react-crud-10ec7",
  storageBucket: "react-crud-10ec7.appspot.com",
  messagingSenderId: "129353245876"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
