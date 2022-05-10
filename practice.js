const firebaseConfig = {
  apiKey: "AIzaSyBi6BBfEbBcokKjhY-t4fdcrRD-kCNIsr8",
  authDomain: "practice-1db90.firebaseapp.com",
  databaseURL: "https://practice-1db90-default-rtdb.firebaseio.com",
  projectId: "practice-1db90",
  storageBucket: "practice-1db90.appspot.com",
  messagingSenderId: "1067723436587",
  appId: "1:1067723436587:web:98d6b24874f6a345c6306e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
function addUser(){
    user_name=document.getElementById("user_name").value;
    firbase.database().ref("/").child(user_name).update({
        purpuse:"adding user"
    });
}
