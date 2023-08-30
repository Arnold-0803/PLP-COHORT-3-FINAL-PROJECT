var swiper = new Swiper(".home-slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import {
  getAuth,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

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
const database = getDatabase(app);
const auth = getAuth();


const logOut = document.querySelector('.logout');

const userLogOut = async () => {
  signOut(auth)
    .then(() => {
      alert('LOG OUT, ARE YOU SURE?')
      window.location = 'LogIn-SignUp.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + errorMessage);
    })
}

logOut.addEventListener('click', userLogOut);

//Partners portal
function comingSoon() {
  let button = document.querySelector(".btn");
  alert('SERVICE COMING...');
}

let menu = document.querySelector('#menu-bar');
let navigation = document.querySelector('#navigation');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('active');
}

document.querySelector('#search-bar').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');

}