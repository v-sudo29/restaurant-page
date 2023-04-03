import pageHeader from './header.js';
import heroContent from './hero_content.js';
import './style.css';

// Append div content to body
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
document.querySelector('body').appendChild(contentDiv);

// Page header
pageHeader();

// Initial page load: Home
heroContent();