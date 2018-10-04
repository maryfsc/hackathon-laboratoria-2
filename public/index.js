var database = firebase.database();

$(document).ready(function() {
  $("#sign-up-button").click(signUpClick);
  $("#sign-in-button").click(signInClick);
});

function signUpClick(event) {
  event.preventDefault();

  var name = $('#sign-up-name').val();
  var email = $("#sign-up-email").val();
  var password = $("#sign-up-password").val();
  var address = $("#sign-up-address").val();


  createUser(name, email, password, address, city, state, country);
}

function createUser(name, email, password, address, city, state, country) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(response) {
      var userId = response.user.uid;
      userInfo(userId, name, email, password, address, city, state, country);
      redirectToPosts(userId);
    })
    .catch(function(error) {
      handleError(error);
    });
}

function signInClick(event) {
  event.preventDefault();

  var email = $("#sign-in-email").val();
  var password = $("#sign-in-password").val();

  signInUser(email, password);
}

function signInUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(response) {
      var userId = response.user.uid;
      redirectToPosts(userId);
    })
    .catch(function(error) {
      handleError(error);
    });
}

function handleError(error) {
  var errorMessage = error.message;
  alert(errorMessage);
}

function redirectToPosts(userId) {
  window.location = "dashboard.html?id=" + userId;
}

function userInfo(userId, name, email, password, address, city, state, country) {
  database.ref('users/' + userId).set({
    name: name,
    email: email,
    password: password,
    address: address
  });
}
