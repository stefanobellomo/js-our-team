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

/*
// Recupero i nodi della dom che ci servono
const formEl = document.getElementById('addMember')
const nameField = document.getElementById('nameField')
const roleField = document.getElementById('roleField')
const imageField = document.getElementById('imageField')

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newMember = {
    name: nameField.value,
    role: roleField.value,
    img: imageField.value
  }

  teamMembers.push(newMember)

  // reset dei campi
  nameField.value = ''
  roleField.value = ''
  imageField.value = ''
})
*/

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
    <div class="shadow">
    <div class="card-body d-flex align-items-center bg-dark">
    <img src="${thisMember.img}" class="" alt="${thisMember.name}">
         <div class="ms-3 d-flex flex-column mx-3">
      <h5 class="card-title font-weight-bold text-white">${thisMember.name}</h5>
      <p class="card-text text-white mb-2">${thisMember.role}</p>
      <a href="mailto:${thisMember.email}" class="btn btn-primary btn-sm">${thisMember.email}</a>
    </div>
      </div>
    </div>
  `;

  // unisci il contenunto di testo al cardsContainer  
  cardsContainer.innerHTML += cardMember;
}







