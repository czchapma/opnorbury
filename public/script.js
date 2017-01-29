var signupForm = document.getElementById('signup-form');
var signupSuccess = document.getElementById('signup-success');
var signupError = document.getElementById('signup-error');
var signupBtn = document.getElementById('signup-button');
var onSignupComplete = function(error) {
  signupBtn.disabled = false;
  if (error) {
    signupError.innerHTML = 'Sorry. Could not signup.';
  } else {
    signupSuccess.innerHTML = 'Thanks for signing up!';
    // hide the form
    signupForm.style.display = 'none';
  }
};

function signup(formObj) {
  // Store emails to firebase
  var myFirebaseRef = new Firebase("https://op-norbury.firebaseio.com/signups");
  myFirebaseRef.push({
    email: formObj.email.value,
  }, onSignupComplete);
  signupBtn.disabled = true;
  return false;
}
