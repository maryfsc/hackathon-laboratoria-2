var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function() {
  userInfo();
  $('.log-out').click(logOut);
});

function userInfo() {
  database.ref("users/" + USER_ID).once('value')
  .then(function(snapshot) {
    var userAddress = snapshot.val().address;
    $('.address-title').html(userAddress);
  });
}

function logOut() {
  firebase.auth().signOut().then(function() {
    window.location = "index.html";
  }).catch(function(error) {
    alert(error.message);
  });
}