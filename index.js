const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const newAccount = document.querySelector('#newAccount');
const back = document.querySelector('#back');
const logForm = document.querySelector('.welcome');
const signUpForm = document.querySelector('.signup');
const forgotUser = document.querySelector('#forgotUserName');
const forgotPass = document.querySelector('#forgotPassword');


function log() {
  console.log('log me in');
};

function sign() {                     //Hides login form for sign up form
  logForm.style.display = "none";
  signUpForm.style.display = "block";
};

function createAccount() {
  console.log('new account');
};

function goBack() {                   //Hides signup form for login form
  signUpForm.style.display = "none";
  logForm.style.display = "block";
};

function getUsername() {
  alert('Forgot Username');
};

function resetPassword() {
  alert('Reset Password');
};


login.addEventListener('click', log);
signup.addEventListener('click', sign);
newAccount.addEventListener('click', createAccount);
back.addEventListener('click', goBack);
forgotUser.addEventListener('click', getUsername);
forgotPass.addEventListener('click', resetPassword);
