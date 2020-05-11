import { filterRole, filterDifficulty, filterName } from "./data.js";
import data from "./data/lol/lol.js";
//console.log(example, data);

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

document.getElementById("role-tags").addEventListener("change",showRoleFilter);
function showRoleFilter() {
  const selectedRole = document.getElementById("role-tags").value
  if (selectedRole === ""){
    createCards(lol)
  }
  else{
    cardsField.innerHTML = "";
  createCards(filterRole(lol, selectedRole))
  return 
  }
}

document.getElementById("difficulty").addEventListener("change", showDiffFilter);
function showDiffFilter() {
  const selectedDiff = document.getElementById("difficulty").value
  const easyValue=4;
  const mediumValue=7;
  const hardValue=8;
  if(selectedDiff === "easy"){
    createCards(filterDifficulty.easy(lol,easyValue));
  }else if(selectedDiff === "medium"){
    createCards(filterDifficulty.medium(lol,easyValue,mediumValue));
  }else if(selectedDiff === "hard"){
    createCards(filterDifficulty.hard(lol,hardValue));
  }else{
    createCards(lol)
  }
}

document.getElementById("search-name").addEventListener("input", showByName);
function showByName() {
const inputName = document.getElementById("search-name").value
const capName = inputName.slice(0,1).toUpperCase()+inputName.slice(1).toLowerCase()
console.log(capName)
createCards(filterName(lol,capName))
}
