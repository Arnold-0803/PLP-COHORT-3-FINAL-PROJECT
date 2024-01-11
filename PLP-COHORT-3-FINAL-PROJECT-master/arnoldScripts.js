import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBPdMv9DRjCE2EDrF9-YmhN3oOmtcilp2w",
    authDomain: "data-arnold-87226.firebaseapp.com",
    databaseURL: "https://data-arnold-87226-default-rtdb.firebaseio.com",
    projectId: "data-arnold-87226",
    storageBucket: "data-arnold-87226.appspot.com",
    messagingSenderId: "901777848162",
    appId: "1:901777848162:web:8bcd73bc5b828a913d5e3b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();


//Authentication

const formLogin = document.getElementById('form-login');
const formSignup = document.getElementById('form-signup');


const logInEmail = document.querySelector('.login-email');
const logInPassword = document.querySelector('.login-password');
const logInButton = document.querySelector('.login-button');


const userEmail = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');
const signUpButton = document.querySelector('.signup-button');

formSignup.addEventListener('submit', function (e) {
    e.preventDefault();
    var signUpEmail = userEmail.value;
    var signUpPassword = userPassword.value;
    // signUpName = userName.value = '';
    // signUpEmail = userEmail.value = '';
    signUpPassword = userPassword.value = '';

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredentila) => {
            const user = userCredentila.user;

            window.alert('USER CREATED. SUCCESSFULLY!✔');
            window.location = 'pages.html';

            formSignup.reset();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorMessage);
        })
})

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    
    var email = logInEmail.value;
    var password = logInPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentila) => {
            window.alert('LOGGED IN SUCCESSFULLY. WELLCOME!✔');
            window.location = 'pages.html';


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert('ERROR OCURED: TRY AGAIN‼❌');
        })
})


//CAPUTRING USERNAME
document.querySelector('.user-email');
const userName = document.querySelector('.user-name');

function captureName() {
    set(ref(db, "USERS/" + userName.value), {
        Name: userName.value,
        Email: userEmail.value
    })
        .catch((error) => {
            alert(error);
        });
}

signUpButton.addEventListener('click', captureName);



//Login-SignUp transision

const wrapper = document.querySelector('#wrapper');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');

signupLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})


//home-page

// const home = document.getElementById('home-page');
// home.style.display = 'none';

// const authState = async () => {
//     onAuthStateChanged(auth, user => {
//         if (user) {
//             wrapper.style.display = 'none';
//             home.style.display = 'block';
//             // logOutButton.style.display = 'block';

//         } else {
//             wrapper.style.display = 'block';
//             home.style.display = 'none';
//             // logOutButton.style.display = 'none';
//         }
//     })
// }

// authState();

// const logOut = document.querySelector('.logout');

// logOut.addEventListener('click', function () {
//     signOut(auth)
//         .then(() => {
//             alert('LogOut?');
//         })
// })




//This will take you to Service page//

// const customerButton = document.querySelector('.customer-btn');
//  customerButton.addEventListener('click', function()  {
//     window.location = './pages.html';
//  });







