import { example } from './data.js';
import data from './data/lol/lol.js';
console.log(example, data);

const cardsField = document.getElementById("champ-box"); 

let lol = [];
for (let item in data.data){
    lol.push(data.data[item]);
};

function createCards(listdata){
    cardsField.innerHTML = "";
    for(let champ in listdata){
        cardsField.innerHTML += `<div class = champ-card id = ${listdata[champ].id}>
            <img class="champ-img" id=${listdata[champ].name} src=${listdata[champ].img} alt=${listdata[champ].name}><br>
            <p class="champ-name">${listdata[champ].name}</p></div>`
    };
    return;
};
createCards(lol);

document.getElementById("role-tags").addEventListener("click",function(){
    document.getElementById("hidden").classList.toggle("show-roles");
});

document.addEventListener("click",function() {
    if (!event.target.matches("#role-tags")) {
        document.getElementById("hidden").classList.remove("show-roles");
    };
});