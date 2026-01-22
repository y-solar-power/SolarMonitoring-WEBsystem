// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebaseの各種設定行うやつ
const firebaseConfig = {
  apiKey: "AIzaSyBq9omBu6A-Le7lEjQAlsvqtv8Mqa8tl-c",
  authDomain: "dronesgps-f3616.firebaseapp.com",
  databaseURL: "https://dronesgps-f3616-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dronesgps-f3616",
  storageBucket: "dronesgps-f3616.appspot.com",
  messagingSenderId: "1068524436957",
  appId: "1:1068524436957:web:dbd9ec480ced3065314a34",
  measurementId: "G-STNDL06MJT"
};

// Firebaseの初期化とrealtimeデータベースに書き込んだデータの読み込み
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//githubがみる場所
const gpsRef = ref(db, "gps");

// FIREBASEのデータが更新されたら実行
onValue(gpsRef, (snapshot) => {
  const data = snapshot.val() || {};

  console.log("Firebase data:", data);

// WEBサイトの更新
  document.getElementById("lat").textContent = data.lat ?? "N/A";
  document.getElementById("lng").textContent = data.lng ?? "N/A";
  document.getElementById("alt").textContent = data.alt ?? "N/A";
  document.getElementById("time").textContent = data.time ?? "N/A";
});
