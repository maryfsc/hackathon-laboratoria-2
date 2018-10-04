var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function() {
  userInfo();
});

function userInfo() {
  database.ref("users/" + USER_ID).once('value')
  .then(function(snapshot) {
    var userAddress = snapshot.val().address;
    $('body').append(userAddress);
  });
}