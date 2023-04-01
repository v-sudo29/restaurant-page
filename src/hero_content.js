import heroImage from './doughnut_hero_image.jpeg';

export default function heroContent() {

  // Select body content div
  const contentDiv = document.getElementById('content');

  // Create elements
  const heroContentDiv = document.createElement('div');
  const heroTextDiv = document.createElement('div');
  const heroText = document.createElement('div');
  const supportingText = document.createElement('div');
  const heroImageDiv = document.createElement('div');

  // Add hero image
  const heroImageSource = new Image();
  heroImageSource.src = heroImage;

  // Add attributes
  heroContentDiv.classList.add('hero-content-div');
  heroTextDiv.classList.add('hero-text-div');
  heroText.classList.add('hero-text');
  supportingText.classList.add('supporting-text');
  heroImageDiv.classList.add('hero-image-div');

  // Add inner HTML
  heroText.innerHTML = 'Enjoy Your Favorite Desserts';
  supportingText.innerHTML = 'Indulge in our world-famous, exquisite, handmade desserts for any occasion.';

  // Append elements
  heroTextDiv.appendChild(heroText);
  heroTextDiv.appendChild(supportingText);

  heroImageDiv.appendChild(heroImageSource);

  heroContentDiv.appendChild(heroTextDiv);
  heroContentDiv.appendChild(heroImageDiv);

  // Return appended hero content
  return contentDiv.appendChild(heroContentDiv);
}