import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaN8wrzCDOfyhNBevzyb1nX8g25WT_V2c",
  authDomain: "cgl-forms.firebaseapp.com",
  databaseURL: "https://cgl-forms-default-rtdb.firebaseio.com",
  projectId: "cgl-forms",
  storageBucket: "cgl-forms.appspot.com",
  messagingSenderId: "1008506608692",
  appId: "1:1008506608692:web:47818afefcc2935608be61",
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);

var ref = collection(db, "quotes");

export default ref;
