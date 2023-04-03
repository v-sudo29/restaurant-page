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
  const stats = document.createElement('div');
  const statsOneDiv = document.createElement('div');
  const statsTwoDiv = document.createElement('div');
  const statsThreeDiv = document.createElement('div');
  const statsOne = document.createElement('div');
  const statsTwo = document.createElement('div');
  const statsThree = document.createElement('div');
  const statsOneSupporting = document.createElement('div');
  const statsTwoSupporting = document.createElement('div');
  const statsThreeSupporting = document.createElement('div');
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

  statsDiv.classList.add('stats-div');
  statsSupportingText.classList.add('stats-supporting-text');
  stats.classList.add('stats');
  statsOneDiv.classList.add('stats-one-div');
  statsTwoDiv.classList.add('stats-two-div');
  statsThreeDiv.classList.add('stats-three-div');
  statsOne.classList.add('stats-one');
  statsTwo.classList.add('stats-two');
  statsThree.classList.add('stats-three');
  statsOneSupporting.classList.add('stats-one-supporting');
  statsTwoSupporting.classList.add('stats-two-supporting');
  statsThreeSupporting.classList.add('stats-three-supporting');

  supportingText.classList.add('supporting-text');
  heroImageDiv.classList.add('hero-image-div');

  // Add inner HTML
  heroText.innerHTML = 'Enjoy Your Favorite Desserts.';
  supportingText.innerHTML = 'Indulge in our world-famous, exquisite, handmade desserts for any occasion.';
  orderNowBtn.innerHTML = 'Order Online';
  menuBtn.innerHTML = 'Dessert Menu';
  statsSupportingText.innerHTML = 'Experience dessert heaven on earth';
  statsOne.innerHTML = '100k+';
  statsOneSupporting.innerHTML = 'Customers served';
  statsTwo.innerHTML = '5k+';
  statsTwoSupporting.innerHTML = 'Yelp reviews';
  statsThree.innerHTML = '50+';
  statsThreeSupporting.innerHTML = 'Locations';

  // Append elements
  buttonsDiv.appendChild(orderNowBtn);
  buttonsDiv.appendChild(menuBtn);

  statsOneDiv.appendChild(statsOne);
  statsOneDiv.appendChild(statsOneSupporting);
  statsTwoDiv.appendChild(statsTwo);
  statsTwoDiv.appendChild(statsTwoSupporting);
  statsThreeDiv.appendChild(statsThree);
  statsThreeDiv.appendChild(statsThreeSupporting);
  stats.appendChild(statsSupportingText);
  stats.appendChild(statsOneDiv);
  stats.appendChild(statsTwoDiv);
  stats.appendChild(statsThreeDiv);

  heroTextDiv.appendChild(heroText);
  heroTextDiv.appendChild(supportingText);
  heroTextDiv.appendChild(buttonsDiv);
  heroTextDiv.appendChild(statsSupportingText);
  heroTextDiv.appendChild(stats);
  
  heroImageDiv.appendChild(heroImageSource);

  heroContentDiv.appendChild(heroTextDiv);
  heroContentDiv.appendChild(heroImageDiv);

  // Return appended hero content
  return contentDiv.appendChild(heroContentDiv);
}