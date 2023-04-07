import pageHeader from './header.js';
import heroContent from './hero_content.js';
import pageMenu from './menu.js';
import './style.css';

// Append div content to body
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
document.querySelector('body').appendChild(contentDiv);

// Page header
pageHeader();

// header buttons
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
homeButton.addEventListener('click', () => {
  const currentContentDiv = document.getElementById('content');
  const contents = currentContentDiv.children[1];
  currentContentDiv.replaceChild(heroContent(), contents);
});

menuButton.addEventListener('click', () => {
  const currentContentDiv = document.getElementById('content');
  const contents = currentContentDiv.children[1];
  currentContentDiv.replaceChild(pageMenu(), contents);
});

// Initial page load: Home
heroContent();