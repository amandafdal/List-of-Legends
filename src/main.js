import { example } from "./data.js";
import data from "./data/lol/lol.js";
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

document.getElementById("role-tags").addEventListener("change",filterRole);
function filterRole(){
    const selectedRole = document.getElementById("role-tags").value
    cardsField.innerHTML = "";
    if (selectedRole == "") {
        createCards(lol);
    } else {
        createCards(lol.filter(role => role.tags.includes(selectedRole)));
    };
};
document.getElementById("difficulty").addEventListener("change", difficulty);

function difficulty() {
  const selectedDiff = document.getElementById("difficulty").value
  cardsField.innerHTML = "";
  if(selectedDiff === ""){
    createCards(lol)
  }else if(selectedDiff === "easy"){
    createCards(lol.filter(diff => diff.info.difficulty <= 4));
  }else if(selectedDiff === "medium"){
    createCards(lol.filter(diff => diff.info.difficulty <=7));
    return;
  }else if(selectedDiff === "medium"){
    createCards(lol.filter(diff => diff.info.difficulty >4));
    return;
  }else{
    createCards(lol.filter(diff => diff.info.difficulty >=8));
  }
  return;
}