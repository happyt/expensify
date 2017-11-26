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
const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').push({
//     description: 'phone bill',
//     note: '',
//     amount: 12345,
//     createdAt: 987654321
// })



// database.ref().set(
//     {
//         name: 'James',
//         age: 27,
//         location : {
//             city: "London",
//             country: "UK"
//         }
//     }
// ).then(() => {
//     console.log('Saved')
// }).catch((e) => {
//     console.log('Fail')
// })

// database.ref('age').set(77)
// database.ref('location/city').set("Manchaster")
// database.ref('attributes/height').set(12)
// database.ref('attributes/weight').set(33)

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) =>  {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })

// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })

// database.ref('expenses')            // call back for each record, not just the one added
//     .on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val())
//     })