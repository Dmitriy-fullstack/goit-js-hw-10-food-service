import './styles.css';
import cardTemplate from './templates/cardTemplate.hbs';
import menuCards from './scripts/menuCards';






const menuCardsList = menuCards.reduce((acc, menuCards) => {
    return acc + cardTemplate(menuCards)
}, '')




// const menuCardList = [
//     {
//     id: "id",
//     name: "name",
//     description: "description",
//     image: '',
//     price: "price",
//     ingredients: []
// }]
console.log(menuCardsList);