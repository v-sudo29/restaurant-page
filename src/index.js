import pageHeader from './header.js';
import './style.css';
import phoneSVG from './phone.svg';

// Append div content to body
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
document.querySelector('body').appendChild(contentDiv);

// Page header
pageHeader();

  // // Add phone icon to phone div
  // const phoneIcon = new Image();
  // phoneIcon.src = phoneSVG;

  // const phoneIconDiv = document.querySelector('.phone-icon');
  // const phoneImg = document.createElement('img');
  // phoneImg.classList.add('img-phone');
  // phoneImg.setAttribute('src', `${phoneSVG}`);
  // phoneIconDiv.appendChild(phoneImg);

console.log('hi there!!!');