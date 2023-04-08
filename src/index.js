import pageHeader from './header.js';
import pageFooter from './footer.js';
import pageHome from './hero_content.js';
import pageMenu from './menu.js';
import pageContact from './contact.js';
import './style.css';

// Append div content to body
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
document.querySelector('body').appendChild(contentDiv);

// Page header
pageHeader();

// Header buttons
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', () => {
  const currentContentDiv = document.getElementById('content');
  const contents = currentContentDiv.children[1];
  currentContentDiv.replaceChild(pageHome(), contents);
});

menuButton.addEventListener('click', () => {
  const currentContentDiv = document.getElementById('content');
  const contents = currentContentDiv.children[1];
  currentContentDiv.replaceChild(pageMenu(), contents);
});

contactButton.addEventListener('click', () => {
  const currentContentDiv = document.getElementById('content');
  const contents = currentContentDiv.children[1];
  currentContentDiv.replaceChild(pageContact(), contents);
});

// Initial page load
pageHome();
pageFooter();

// Copyright date
const footerText = document.querySelector('.footer-text');
const currentYear = new Date().getFullYear();

footerText.innerHTML = `Copyright \u00A9 ${currentYear} v-sudo29`