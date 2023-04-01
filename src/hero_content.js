import heroImage from './doughnut_hero_image.jpeg';

export default function heroContent() {

  // Select body content div
  const contentDiv = document.getElementById('content');

  // Create elements
  const heroContentDiv = document.createElement('div');
  const heroTextDiv = document.createElement('div');
  const heroText = document.createElement('div');
  const supportingText = document.createElement('div');
  const buttonsDiv = document.createElement('div');
  const statsDiv = document.createElement('div');
  const statsSupportingText = document.createElement('div');
  const heroImageDiv = document.createElement('div');

  // Create buttons
  const orderNowBtn = document.createElement('button');
  const menuBtn = document.createElement('button');

  // Add hero image
  const heroImageSource = new Image();
  heroImageSource.src = heroImage;

  // Add attributes
  heroContentDiv.classList.add('hero-content-div');
  heroTextDiv.classList.add('hero-text-div');
  heroText.classList.add('hero-text');
  buttonsDiv.classList.add('home-buttons-div');

  orderNowBtn.classList.add('home-order-button');
  menuBtn.classList.add('home-menu-button');

  supportingText.classList.add('supporting-text');
  heroImageDiv.classList.add('hero-image-div');

  // Add inner HTML
  heroText.innerHTML = 'Enjoy Your Favorite Desserts.';
  supportingText.innerHTML = 'Indulge in our world-famous, exquisite, handmade desserts for any occasion.';
  orderNowBtn.innerHTML = 'Pre-order';
  menuBtn.innerHTML = 'Dessert Menu';

  // Append elements
  buttonsDiv.appendChild(orderNowBtn);
  buttonsDiv.appendChild(menuBtn);

  heroTextDiv.appendChild(heroText);
  heroTextDiv.appendChild(supportingText);
  heroTextDiv.appendChild(buttonsDiv);

  heroImageDiv.appendChild(heroImageSource);

  heroContentDiv.appendChild(heroTextDiv);
  heroContentDiv.appendChild(heroImageDiv);

  // Return appended hero content
  return contentDiv.appendChild(heroContentDiv);
}