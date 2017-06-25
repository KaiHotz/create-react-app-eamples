import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCpR3jk7Dhh9JwFziLry1Sgu70ohbEl0wA",
    authDomain: "goal-coach-726fa.firebaseapp.com",
    databaseURL: "https://goal-coach-726fa.firebaseio.com",
    projectId: "goal-coach-726fa",
    storageBucket: "",
    messagingSenderId: "946512905164"
  };


export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
