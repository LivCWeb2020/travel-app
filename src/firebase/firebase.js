import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import axios from 'axios';
import { ref, set } from 'firebase/database';
import db from '../firebase/firebase';

function defaultInitOptions () {
  const firebaseConfig = {
    apiKey: 'AIzaSyBXmV8nwpbNX3HcA4q-QsIV93vIqJqtLms',
    authDomain: 'travel-takehome.firebaseapp.com',
    databaseURL: 'https://travel-takehome-default-rtdb.firebaseio.com',
    projectId: 'travel-takehome',
    storageBucket: 'travel-takehome.appspot.com',
    messagingSenderId: '732846040377',
    appId: '1:732846040377:web:0913b7d3922a9c782874e8'
  };

  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)
  // If you want to use the local emulators, uncomment the line below (don't forget to comment it back out/remove when not using anymore!)
  // connectDatabaseEmulator(db, "localhost", 9000);
  return db
}

export const createNewCity = async () => {
  try {
    const res = await axios.get(
      'https://us-central1-travel-takehome.cloudfunctions.net/createCity'
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
};

export const updateCity = async (cities, city, visited) => {
  try {
    const res = await set(ref(db, 'cities/' + city), {
      ...cities[city],
      visited: !visited
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default defaultInitOptions()
