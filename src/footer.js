import githubSVG from './github-mark-white.svg';

const githubLogo = new Image();
githubLogo.src = githubSVG;
export default function footer() {
  const contentDiv = document.getElementById('content');

  // Create elements
  const footerDiv = document.createElement('footer');
  const footerText = document.createElement('div');
  const footerLogo = document.createElement('div');
  const ghLink = document.createElement('a');

  // Set attributes
  footerDiv.classList.add('footer-div');
  footerText.classList.add('footer-text');
  footerLogo.classList.add('footer-logo');
  ghLink.setAttribute('href', 'https://github.com/v-sudo29');
  
  // Append elements
  footerLogo.appendChild(ghLink);
  ghLink.appendChild(githubLogo);

  footerDiv.appendChild(footerText);
  footerDiv.appendChild(footerLogo);

  // Return appended footer
  console.log(footerDiv);
  return contentDiv.appendChild(footerDiv);
}