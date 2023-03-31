import phoneSVG from './phone.svg';
import logoSVG from './logo.svg';

// Inserts header function
export default function pageHeader() {
  // Select body tag
  const contentDiv = document.getElementById('content');

  // Create elements
  const headerDiv = document.createElement('div');
  const headerTitleDiv = document.createElement('div');
  const headerTitle = document.createElement('div');
  const headerNav = document.createElement('nav');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');
  const phoneNumberDiv = document.createElement('div');
  const phoneIcon = document.createElement('div');
  const phoneNumber = document.createElement('div');
  const logoIconDiv = document.createElement('div');

  // Add icons
  const logoIconSource = new Image();
  const phoneIconSource = new Image();
  logoIconSource.src = logoSVG;
  phoneIconSource.src = phoneSVG;

  // Add attributes
  headerDiv.classList.add('header-div');
  headerTitleDiv.classList.add('header-title-div');
  headerTitle.classList.add('header-title');
  headerNav.classList.add('header-links-div');
  home.classList.add('home');
  menu.classList.add('menu');
  contact.classList.add('contact');
  phoneNumberDiv.classList.add('phone-number-div');
  phoneNumber.classList.add('phone-number');
  phoneIcon.classList.add('phone-icon-div');
  logoIconDiv.classList.add('logo-icon-div');

  // Add inner HTML
  headerTitle.innerHTML = 'Dessert Heaven';
  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';
  phoneNumber.innerHTML = '(415)-100-2000';

  // Append elements
  phoneIcon.appendChild(phoneIconSource);
  logoIconDiv.appendChild(logoIconSource);
  phoneNumberDiv.appendChild(phoneIcon);
  phoneNumberDiv.appendChild(phoneNumber);

  headerTitleDiv.appendChild(logoIconDiv);
  headerTitleDiv.appendChild(headerTitle);

  headerNav.appendChild(home);
  headerNav.appendChild(menu);
  headerNav.appendChild(contact);

  headerDiv.appendChild(headerTitleDiv);
  headerDiv.appendChild(headerNav);
  headerDiv.appendChild(phoneNumberDiv);

  contentDiv.appendChild(headerDiv);
}