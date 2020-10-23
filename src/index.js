import './styles.css';
import cardTemplate from './templates/cardTemplate.hbs';
import menuCards from './scripts/menuCards';


const mainMenuEl = document.querySelector('.js-menu');

const menuCardsList = menuCards.reduce((acc, menuCards) => {
    return acc + cardTemplate(menuCards)
}, '')

mainMenuEl.insertAdjacentHTML("beforeend", menuCardsList);
console.log(menuCardsList);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyEl = document.querySelector('body')
const inputEl = document.querySelector('#theme-switch-toggle');
inputEl.addEventListener('change', onInputClick);

function onInputClick (evt) {
    if (evt.target.checked) {
        bodyEl.classList.add(Theme.DARK);
        bodyEl.classList.remove(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.DARK);
      } else {
        bodyEl.classList.add(Theme.LIGHT);
        bodyEl.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
      }
}
