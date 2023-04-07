export default function contactPage() {
  const contentDiv = document.getElementById('content');

  // Create elements
  const contactDiv = document.createElement('div');
  const contactTitle = document.createElement('div');
  const contactTextDiv = document.createElement('div');
  const phoneNumber = document.createElement('div');
  const email = document.createElement('div');

  // Set attributes
  contactDiv.classList.add('contact-div');
  contactTitle.classList.add('contact-title');
  contactTextDiv.classList.add('contact-text-div');
  phoneNumber.classList.add('contact-phone-number');
  email.classList.add('contact-email');

  // Set inner HTML
  contactTitle.innerHTML = 'Contact';
  phoneNumber.innerHTML = '(415)-100-2000';
  email.innerHTML = 'info@dessertheaven.com';

  // Append elements
  contactTextDiv.appendChild(phoneNumber);
  contactTextDiv.appendChild(email);
  contactDiv.appendChild(contactTitle);
  contactDiv.appendChild(contactTextDiv);

  // Return appended element
  return contentDiv.appendChild(contactDiv);
}