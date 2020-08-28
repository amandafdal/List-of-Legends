import { filterRole, filterDifficulty, filterName, calc} from "./data.js";
import { openModal, closeModal } from "./modal.js";
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

  openModal(lol)
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

  openModal(lol);
}

const showByName = () => {
  document.querySelector(".champ-percentage").innerHTML = "";
  const inputName = document.querySelector("#search-name").value
  const capName = inputName.slice(0,1).toUpperCase()+inputName.slice(1).toLowerCase()

  createCards(filterName(lol,capName))
  openModal(lol)
};

const clearPlaceholder = (event) => {
  event.target.matches("#search-name")
  ?searchBtn.setAttribute("placeholder"," ")
  :searchBtn.setAttribute("placeholder","Buscar por nome")
};

filterByRole.addEventListener("change", showRoleFilter);
filterBtDifficulty.addEventListener("change", showDiffFilter);
searchBtn.addEventListener("input", showByName);
document.addEventListener("click", clearPlaceholder);
document.addEventListener("click", closeModal);
createCards(lol);
openModal(lol);
