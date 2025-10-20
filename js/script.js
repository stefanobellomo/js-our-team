/*
**Traccia**
-Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

**Bonus**
-Rendere l’esercizio responsive, mandando a capo le card
-Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina
*/


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Recupera il nodo team-container
const cardsContainer = document.getElementById('cardContainer')

// svuoto il contenuto dell'html per poterlo poi riempire con i vari risultati
cardsContainer.innerHTML = ''

// recupera con un ciclo for tutti i dati del team
for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];

  // crea la carta di ogni membro del team
  const cardMember = 
  `
    <div class="card text-center shadow">
      <img src="${thisMember.img}" class="card-img-top" alt="${thisMember.name}">
      <div class="card-body">
        <h5 class="card-title">${thisMember.name}</h5>
        <p class="card-text text-muted">${thisMember.role}</p>
        <a href="mailto:${thisMember.email}" class="btn btn-primary btn-sm">${thisMember.email}</a>
      </div>
    </div>
  `;

  // unisci il contenunto di testo al cardsContainer  
  cardsContainer.innerHTML += cardMember;
}


// Recupero i nodi della dom che ci servono
const formEl = document.getElementById('addMember')
const nameField = document.getElementById('nameField')
const roleField = document.getElementById('roleField')
const imageField = document.getElementById('imageField')
const buttonEl = document.getElementById('buttonEl')








