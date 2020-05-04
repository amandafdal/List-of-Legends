import { example } from './data.js';
import data from './data/lol/lol.js';
console.log(example, data);

const cardsField = document.getElementById("champ-box") 
const lol = data.data

function createCards(listdata){
    for(let champ in listdata){
        const card = document.createElement("div");
        card.className = "champ-card";
        card.id = `${lol[champ].id}`;
        card.innerHTML = 
        `<img class="champ-img" id=${lol[champ].name} src=${lol[champ].img} alt=${lol[champ].name}><br>
        <p class="champ-name">${lol[champ].name}</p>`;
        cardsField.appendChild(card) 
    };
    return;
};
createCards(lol);
console.log(cardsField);

document.getElementById("role-tags").addEventListener("click",function(event){
    event.preventDefault()
    document.getElementById("hidden").classList.toggle("show-roles");
});

document.addEventListener("click",function(event) {
    event.preventDefault()
    if (!event.target.matches("#role-tags")) {
        document.getElementById("hidden").classList.remove("show-roles");
    };
});
