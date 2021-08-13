//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAcaA3prwuyxTKDvKwnGzORLM2XPAuv3yg",
      authDomain: "kwitter-webapp-6b700.firebaseapp.com",
      databaseURL: "https://kwitter-webapp-6b700-default-rtdb.firebaseio.com",
      projectId: "kwitter-webapp-6b700",
      storageBucket: "kwitter-webapp-6b700.appspot.com",
      messagingSenderId: "333346139919",
      appId: "1:333346139919:web:0981fd794f9e522e63d87a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}