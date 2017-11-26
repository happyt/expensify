import * as firebase from 'firebase'

  // Initialize Firebase
 const config = {
    apiKey: "AIzaSyAlvVB5Pt5TSOLR3EsjPavvrCVKSYLU73I",
    authDomain: "expensifydd.firebaseapp.com",
    databaseURL: "https://expensifydd.firebaseio.com",
    projectId: "expensifydd",
    storageBucket: "expensifydd.appspot.com",
    messagingSenderId: "453765376364"
  };

  firebase.initializeApp(config);

firebase.database().ref().set(
    {
        name: 'Expenses'
    }
)