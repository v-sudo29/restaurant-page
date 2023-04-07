import donutJPEG from './donut_menu.jpeg';
import raspberryJPEG from './raspberry_cake.jpeg';
import cookiesJPEG from './cookies.jpeg';

const donut = new Image();
const raspberry = new Image();
const cookies = new Image();

donut.src = donutJPEG;
raspberry.src = raspberryJPEG;
cookies.src = cookiesJPEG;

export default function pageMenu() {
  const contentDiv = document.getElementById('content');

  // Create elements
  const menuDiv = document.createElement('div');
  const menuTitle = document.createElement('div');

  const itemsContainer = document.createElement('div');
  const menuItemDivOne = document.createElement('div');
  const menuItemDivTwo = document.createElement('div');
  const menuItemDivThree = document.createElement('div');
  const menuItemOne = document.createElement('div');
  const menuItemTwo = document.createElement('div');
  const menuItemThree = document.createElement('div');
  const menuTextOne = document.createElement('div');
  const menuTextTwo = document.createElement('div');
  const menuTextThree = document.createElement('div');

  // Set attributes
  menuDiv.classList.add('menu-div');
  menuTitle.classList.add('menu-title');

  itemsContainer.classList.add('items-container');
  menuItemDivOne.classList.add('menu-item-div');
  menuItemDivTwo.classList.add('menu-item-div');
  menuItemDivThree.classList.add('menu-item-div');
  menuItemOne.classList.add('menu-item', 'menu-item-one');
  menuItemTwo.classList.add('menu-item', 'menu-item-two');
  menuItemThree.classList.add('menu-item', 'menu-item-three');
  menuTextOne.classList.add('menu-text', 'menu-text-one');
  menuTextTwo.classList.add('menu-text', 'menu-text-two');
  menuTextThree.classList.add('menu-text', 'menu-text-three');

  // Add inner HTML
  menuTitle.innerHTML = 'Popular Items';
  menuTextOne.innerHTML = 'Donut';
  menuTextTwo.innerHTML = 'Raspberry Cake Slice';
  menuTextThree.innerHTML = 'Granny\'s Cookies';

  // Append elements
  menuItemOne.appendChild(donut);
  menuItemTwo.appendChild(raspberry);
  menuItemThree.appendChild(cookies);

  menuItemDivOne.appendChild(menuItemOne);
  menuItemDivTwo.appendChild(menuItemTwo);
  menuItemDivThree.appendChild(menuItemThree);

  menuItemDivOne.appendChild(menuTextOne);
  menuItemDivTwo.appendChild(menuTextTwo);
  menuItemDivThree.appendChild(menuTextThree);


  itemsContainer.appendChild(menuItemDivOne);
  itemsContainer.appendChild(menuItemDivTwo);
  itemsContainer.appendChild(menuItemDivThree);

  menuDiv.appendChild(menuTitle);
  menuDiv.appendChild(itemsContainer);

  // Return menu div
  return contentDiv.appendChild(menuDiv);
}