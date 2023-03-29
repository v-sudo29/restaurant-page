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

  // Add attributes
  headerDiv.classList.add('header-div');
  headerTitle.classList.add('header-title');
  headerNav.classList.add('header-links-div');
  home.classList.add('home');
  menu.classList.add('menu');
  contact.classList.add('contact');

  // Add inner HTML
  headerTitle.innerHTML = 'Flamey-o!';
  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';

  // Append elements
  headerNav.appendChild(home);
  headerNav.appendChild(menu);
  headerNav.appendChild(contact);

  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(headerNav);

  contentDiv.appendChild(headerDiv);
}