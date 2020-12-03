const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const newAccount = document.querySelector('#newAccount');
const back = document.querySelector('#back');


function log() {
  console.log('log me in');
};

function sign() {
  console.log('sign me up');
};

function createAccount() {
  console.log('new account');
};

function goBack() {
  console.log('Going Back');
};


login.addEventListener('click', log);
signup.addEventListener('click', sign);
newAccount.addEventListener('click', createAccount);
back.addEventListener('click', goBack);
