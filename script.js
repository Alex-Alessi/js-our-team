const outputCard = document.getElementById("output-card");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const getNome = (indice) => {
  return teamMembers[indice].nome;
};

const getRuolo = (indice) => {
  return teamMembers[indice].ruolo;
};

const getEmail = (indice) => {
  return teamMembers[indice].email;
};

for (let i = 0; i < teamMembers.length; i++) {
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
