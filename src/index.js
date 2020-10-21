import './styles.css';
import cardTemplate from './templates/cardTemplate.hbs';
import menuCards from './scripts/menuCards';






const menuCardsList = menuCards.reduce((acc, menuCards) => {
    return acc + cardTemplate(menuCards)
}, '')

const mainMenuEl = document.querySelector('.js-menu');
mainMenuEl.insertAdjacentHTML("beforeend", menuCardsList);




console.log(menuCardsList);