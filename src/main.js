import { filterRole, filterDifficulty, filterName } from "./data.js";
import data from "./data/lol/lol.js";

const cardsField = document.getElementById("champ-box");

let lol = [];
for (let item in data.data) {
  lol.push(data.data[item]);
}
function createCards(listdata) {
  cardsField.innerHTML = "";
  for (let champ in listdata) {
    cardsField.innerHTML += `
    <div class = "champ-card" id =${listdata[champ].id}>
      <img class="champ-img" id=${listdata[champ].name} src=${listdata[champ].img} alt=${listdata[champ].name}><br>
      <p class="champ-name">${listdata[champ].name}</p>
    </div>`;
  }
  return;
}
createCards(lol);

document.getElementById("role-tags").addEventListener("change", showRoleFilter);
function showRoleFilter() {
  const selectedRole = document.getElementById("role-tags").value;
  if (selectedRole === "") {
    createCards(lol);
  } else {
    cardsField.innerHTML = "";
    createCards(filterRole(lol, selectedRole));
  }
  openModal()
  return;
}

document.getElementById("difficulty").addEventListener("change", showDiffFilter);
function showDiffFilter() {

  const selectedDiff = document.getElementById("difficulty").value;
  const easyValue = 4;
  const mediumValue = 7;
  const hardValue = 8;
  cardsField.innerHTML = "";
  if (selectedDiff === "easy") {
    createCards(filterDifficulty.easy(lol, easyValue));
  } else if (selectedDiff === "medium") {
    createCards(filterDifficulty.medium(lol, easyValue, mediumValue));
  } else if (selectedDiff === "hard") {
    createCards(filterDifficulty.hard(lol, hardValue));
  } else {
    createCards(lol);
  }
  openModal();
  return;
}
const searchBtn = document.getElementById("search-name")
searchBtn.addEventListener("input", showByName);
function showByName() {
const inputName = document.getElementById("search-name").value
const capName = inputName.slice(0,1).toUpperCase()+inputName.slice(1).toLowerCase()
createCards(filterName(lol,capName))
openModal()
}

document.addEventListener("click", function (event) {
  if (event.target.matches("#search-name")) {
    searchBtn.setAttribute("placeholder"," ")
  }else{
    searchBtn.setAttribute("placeholder","Buscar por nome")
  }   
  return
});

function createModal(champ) {
  const data = lol.find((personagem) => personagem.id === champ);
  document.getElementById("modal").innerHTML = `<button class="btn-close">X</button></br>
    <h1 class= "champ-name text-modal">${champ}</h1><br>
    <h3 class= "champ-name text-modal">${data.tags.join(", ")}</h3><br>
    <img class="splash-art-image" id="${champ}" src="${data.splash}"
    alt="Splash art do campeão ${data.id}"><br>
    <div class="champ-content">
      <div class = "info">
        <p class= "blurb-champ text-modal"><em>${data.blurb}</em></p><br>
        <div class= "info-box">
          <p class= "text-modal">Informações: </p><br>
          <p class= "text-modal">Ataque: ${data.info.attack}</p><br>
          <p class= "text-modal">Defesa: ${data.info.defense}</p><br>
          <p class= "text-modal">Mágica: ${data.info.magic}</p><br>
          <p class= "text-modal">Dificuldade: ${data.info.difficulty}</p><br>
        </div>  
      </div>
      <div class = "stats">
        <h3 class= "stats-champ text-modal">Stats:</h3>
        <p class= "stats-champ text-modal">Vida: ${data.stats.hp}</p>
        <p class= "stats-champ text-modal">Vida por nível: ${data.stats.hpperlevel}</p>
        <p class= "stats-champ text-modal">Mana: ${data.stats.mp}</p>
        <p class= "stats-champ text-modal">Mana por nível: ${data.stats.mpperlevel}</p>
        <p class= "stats-champ text-modal">Velocidade de movimento: ${data.stats.movespeed}</p>
        <p class= "stats-champ text-modal">Armadura: ${data.stats.armor}</p>
        <p class= "stats-champ text-modal">Armadura por nível: ${data.stats.armorperlevel}</p>
        <p class= "stats-champ text-modal">Resistência mágica: ${data.stats.spellblock}</p>
        <p class= "stats-champ text-modal">Resistência mágica por nível: ${data.stats.spellblockperlevel}</p>
        <p class= "stats-champ text-modal">Alcance (range): ${data.stats.attackrange}</p>
        <p class= "stats-champ text-modal">Regeneração de vida: ${data.stats.hpregen}</p>
        <p class= "stats-champ text-modal">Regeneração de vida por nível: ${data.stats.hpregenperlevel}</p>
        <p class= "stats-champ text-modal">Regeneração de mana: ${data.stats.mpregen}</p>
        <p class= "stats-champ text-modal">Regeneração de mana por nível: ${data.stats.mpregenperlevel}</p>
        <p class= "stats-champ text-modal">Crítico: ${data.stats.crit}</p>
        <p class= "stats-champ text-modal">Crítico por nível: ${data.stats.critperlevel}</p>
        <p class= "stats-champ text-modal">Dano de ataque: ${data.stats.attackdamage}</p>
        <p class= "stats-champ text-modal">Dano de ataque por nível: ${data.stats.attackdamageperlevel}</p>
        <p class= "stats-champ text-modal">Velocidade de ataque: ${data.stats.attackspeedoffset}</p>
        <p class= "stats-champ text-modal">Velocidade de ataque por nível: ${data.stats.attackspeedperlevel}</p>    
      </div>     
    </div>`;
  return
}

function openModal() {
  const champList = document.getElementsByClassName("champ-card");
  for (let champ of champList) {
    champ.addEventListener("click", function () {
      document.getElementById("modal-container").classList.add("show");
      const modalId = champ.getAttribute("id");
      createModal(modalId);
    });
  }
  return;
}
openModal();

document.addEventListener("click", function (event) {
  if (event.target.matches("#modal-container")||event.target.matches(".btn-close")) {
    document.getElementById("modal-container").classList.remove("show");
    return
  }
});