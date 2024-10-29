const outputCard = document.getElementById("output-card");

const membri = [
  (membro1 = {
    nome: "MARCO BIANCHI",
    ruolo: "Designer",
    email: "marcobianchi@team.com",
  }),
  (membro2 = {
    nome: "LAURA ROSSI",
    ruolo: "Front-end Developer",
    email: "laurarossi@team.com",
  }),
  (membro3 = {
    nome: "GIORGIO VERDI",
    ruolo: "Back-end Developer",
    email: "giorgoiverdi@team.com",
  }),
  (membro4 = {
    nome: "MARTA IPSUM",
    ruolo: "SEO Specialist",
    email: "martaipsum@team.com",
  }),
  (membro5 = {
    nome: "ROBERTO LOREM",
    ruolo: "SEO Specialist",
    email: "robertolorem@team.com",
  }),
  (membro6 = {
    nome: "DANIELA AMET",
    ruolo: "Analyst",
    email: "danielaamet@team.com",
  }),
];

const getNome = (indice) => {
  return membri[indice].nome;
};

const getRuolo = (indice) => {
  return membri[indice].ruolo;
};

const getEmail = (indice) => {
  return membri[indice].email;
};

for (let i = 0; i < membri.length; i++) {
  const htmlCard = `
    <div class="card mb-3 bg-black text-white" style="max-width: 400px" id="output-card">
        <div class="row g-0">
            <div class="col-md-4">
              <img src="./img/male1.png" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${getNome(i)}</h5>
                <p class="card-text">${getRuolo(i)}</p>
                <a href="#" class="text-decoration-none">${getEmail(i)}</a>
              </div>
            </div>
        </div>
    </div> `;
  outputCard.innerHTML = htmlCard;
}
