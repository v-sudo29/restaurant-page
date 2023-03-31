// Inserts header function
export default function pageHeader() {
  // Select body tag
  const contentDiv = document.getElementById('content');

  // Create elements
  const headerDiv = document.createElement('div');
  const headerTitle = document.createElement('div');
  const headerNav = document.createElement('nav');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');
  const phoneNumberDiv = document.createElement('div');
  const phoneIcon = document.createElement('div');
  const phoneNumber = document.createElement('div');

  // Add attributes
  headerDiv.classList.add('header-div');
  headerTitle.classList.add('header-title');
  headerNav.classList.add('header-links-div');
  home.classList.add('home');
  menu.classList.add('menu');
  contact.classList.add('contact');
  phoneNumberDiv.classList.add('phone-number-div');
  phoneNumber.classList.add('phone-number');
  phoneIcon.classList.add('phone-icon');

  // Add inner HTML
  headerTitle.innerHTML = 'Dessert Heaven';
  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';
  phoneNumber.innerHTML = '(415)-100-2000';

  // Append elements
  headerNav.appendChild(home);
  headerNav.appendChild(menu);
  headerNav.appendChild(contact);

  phoneNumberDiv.appendChild(phoneIcon);
  phoneNumberDiv.appendChild(phoneNumber);

  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(headerNav);
  headerDiv.appendChild(phoneNumberDiv);

  contentDiv.appendChild(headerDiv);
}