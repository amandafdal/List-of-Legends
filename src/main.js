import { filterRole, filterDifficulty, filterName, calc} from "./data.js";
import data from "./data/lol.js";

const cardsField = document.querySelector("#champ-box");
const filterByRole = document.querySelector("#role-tags");
const filterBtDifficulty = document.querySelector("#difficulty");
const searchBtn = document.querySelector("#search-name");
const lol = [];
for (let item in data.data) {
  lol.push(data.data[item]);
}

const createCards = (listdata) => {
  cardsField.innerHTML = "";
  for (let champ in listdata) {
    cardsField.innerHTML += `
      <div class = "champ-card" id =${listdata[champ].id}>
        <img class="champ-img" id=${listdata[champ].name} src=${listdata[champ].img} alt=${listdata[champ].name}><br>
        <p class="champ-name">${listdata[champ].name}</p>
      </div>
    `;
  }
}

const showCalc= () => {
  const totalChamp = lol.length;
  const filterChamp = document.querySelectorAll(".champ-card").length;

  filterChamp === totalChamp
  ?document.querySelector(".champ-percentage").innerHTML = ""
  :document.querySelector(".champ-percentage").innerHTML = `
    Este banco de dados conta com ${totalChamp} campeões, 
    ${filterChamp} fazendo parte da categoria selecionada. 
    Isso representa ${calc(totalChamp,filterChamp)}% do total
  `;
}

const showRoleFilter = () => {
  const selectedRole = document.querySelector("#role-tags").value;

  selectedRole === ""
  ?createCards(lol)
  :cardsField.innerHTML = ""
  createCards(filterRole(lol, selectedRole));

  openModal()
  showCalc()
}

const showDiffFilter = () => {
  cardsField.innerHTML = "";
  const selectedDiff = document.querySelector("#difficulty").value;
  const easyValue = 4;
  const mediumValue = 7;
  const hardValue = 8;

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
}

const showByName = () => {
  document.querySelector(".champ-percentage").innerHTML = "";
  const inputName = document.querySelector("#search-name").value
  const capName = inputName.slice(0,1).toUpperCase()+inputName.slice(1).toLowerCase()

  createCards(filterName(lol,capName))
  openModal()
};

const clearPlaceholder = (event) => {
  event.target.matches("#search-name")
  ?searchBtn.setAttribute("placeholder"," ")
  :searchBtn.setAttribute("placeholder","Buscar por nome")
};

const createModal = (champ) => {
  const data = lol.find(personagem => personagem.id === champ);

  document.querySelector("#modal").innerHTML = `
    <button class="btn-close">X</button></br>
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
        <p class= "stats-champ text-modal">Alcance: ${data.stats.attackrange}</p>
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
    </div>
  `;
};

const openModal = () => {
  const champList = document.querySelectorAll(".champ-card");

  for (let champ of champList) {
    champ.addEventListener("click", function () {
      document.querySelector("#modal-container").classList.add("show");
      const modalId = champ.getAttribute("id");
      createModal(modalId);
    });
  }
};

const closeModal = (event) => {
  event.target.matches("#modal-container") ||
  event.target.matches(".btn-close")
  ?document.querySelector("#modal-container").classList.remove("show")
  : null
};

filterByRole.addEventListener("change", showRoleFilter);
filterBtDifficulty.addEventListener("change", showDiffFilter);
searchBtn.addEventListener("input", showByName);
document.addEventListener("click", clearPlaceholder);
document.addEventListener("click", closeModal);
createCards(lol);
openModal();
