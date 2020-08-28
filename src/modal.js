const createModal = (champ, db) => {
  const data = db.find(personagem => personagem.id === champ);

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

export const openModal = (db) => {
  const champList = document.querySelectorAll(".champ-card");

  for (let champ of champList) {
    champ.addEventListener("click", function () {
      document.querySelector("#modal-container").classList.add("show");
      const modalId = champ.getAttribute("id");
      createModal(modalId, db);
    });
  }
};

export const closeModal = (event) => {
  event.target.matches("#modal-container") ||
    event.target.matches(".btn-close")
    ? document.querySelector("#modal-container").classList.remove("show")
    : null
};