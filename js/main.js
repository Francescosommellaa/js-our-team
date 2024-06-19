// Creazione di un array di oggetti per rappresentare i membri del team
const teamMembers = [
    // Ogni membro del team è rappresentato da un oggetto con proprietà name, role e image
    { name: 'Wayne Barnett', role: 'Founder & CEO', image: 'img/wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela', role: 'Chief Editor', image: 'img/angela-caroll-chief-editor.jpg' },
    { name: 'Walter Gordon', role: 'Office Manager', image: 'img/walter-gordon-office-manager.jpg' },
    { name: 'Angela Lopez', role: 'Social Media Manager', image: 'img/angela-lopez-social-media-manager.jpg' },
    { name: 'Scott Estrada', role: 'Developer', image: 'img/scott-estrada-developer.jpg' },
    { name: 'Barbara Ramos', role:'Graphic Designer', image:'img/barbara-ramos-graphic-designer.jpg'}
];
console.log(teamMembers);

// Aggiunta di un elemento HTML per ogni membro del team al contenitore del team nel DOM
for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    // L'elemento HTML include un'immagine, un titolo con il nome del membro del team e un paragrafo con il ruolo del membro del team
    document.getElementById('team-container').innerHTML += `
        <div class="card">
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <span class="card-p">${member.role}</span>
        </div>
    `;
}