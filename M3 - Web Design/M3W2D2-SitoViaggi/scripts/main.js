//1)Creazione Bottoni vicino ad ogni sezione per collassare la sezione e riaprila se premuti
//seleziono l'area dove verranno creati i bottoni
const btnContainers = document.querySelectorAll(".collapse-btn");


//Funzione che si attiva al click del pulsante, passo alla funzione il bottone e l'indice del pulsante. Per ogni sezione che voglio collassare verifico se ho cliccato il pulsante relativo a quell'indice
const collapseElement = (btn, btnPos) => {
    const sectionsToCollapse = document.querySelectorAll(".container-collapse");
    sectionsToCollapse.forEach((sectionToCollapse, index) =>{
        if (btnPos === index){
            if (sectionToCollapse.classList.contains("collapse")) {
                sectionToCollapse.classList.remove("collapse");
                btn.textContent = "Riduci";
            } else {
                sectionToCollapse.classList.add("collapse");
                btn.textContent = "Visualizza";
            }
        }
    })    
}

//Creo per ogni sezione un bottone ed aggiungo un evento per ogni bottone che invoca la funzione collapseElement quando cliccato. Alla funzione passo anche l'indice di quel bottone
btnContainers.forEach((btnContainer, index) =>{
    const btnCollapse = document.createElement("button");
    btnCollapse.classList.add("btn", "btn-primary", "align-self-end", "m-2");
    btnCollapse.setAttribute("data-bs-toogle", "collapse");
    btnCollapse.textContent = "Riduci";
    btnContainer.appendChild(btnCollapse);
    btnCollapse.addEventListener("click", () =>{
        collapseElement(btnCollapse, index);
    });
})

//2) Counter dei viaggi disponibile nella pagina, lo inserisco appena dopo l'ultima sezione dedicata alle recensioni

const lastSection = document.getElementById("review-section");
//i miei viaggi sono all'interno della classe card. Seleziono tutte le card e conto quante sono
const allCards = document.querySelectorAll(".card");
const allTripsCounter = allCards.length;
//creo l'elemento che visualizzerà il numero di card
const alltripsElement = document.createElement("h3");
alltripsElement.classList.add("pt-5","text-center");
alltripsElement.innerText = `Totale Viaggi Disponibili: ${allTripsCounter}`;
lastSection.appendChild(alltripsElement);


//5) Funzione che rimuove tutte le card della pagina
/* const allCards = document.querySelectorAll(".card");
allCards.forEach((card) =>{
    card.remove();
}) */