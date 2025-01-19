// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

// Esercizio 7
// Con querySelector -> const newH1 = document.querySelector("#titleEcommerce");
/* const newH1 = document.getElementById("titleEcommerce");
const changeH1 = (newH1) => {
    return newH1.innerText = "New Title E-Commerce";
} */


//Esercizio 8
//Creo un bottone da aggiungere
/* const changeNameNavBtn = document.createElement("button");
//Inserisco il testo del bottone
changeNameNavBtn.innerText = "Change Color Background Body";
//Aggiungo la classe del css style al bottone
changeNameNavBtn.setAttribute("class","btn-default");
//Seleziono il nav
const nav = document.querySelector("nav");
//Aggiungo il bottone nel nav, come ultimo elemento
nav.appendChild(changeNameNavBtn);
//Creo due variabili, uno con il nuovo colore del main e l'altro con il vecchio colore del main
const newBackGroundColor = "grey";
const oldBackGroundColor = "white";
//Funzione per cambiare colore
const changeBackground = () => {
    const changeColorBackgroundBody = document.querySelector("main");
    if (changeColorBackgroundBody.style.backgroundColor === newBackGroundColor) {
        changeColorBackgroundBody.style.backgroundColor = oldBackGroundColor;
    } else {
        changeColorBackgroundBody.style.backgroundColor = newBackGroundColor;
    }
}
//Aggiunge un ascoltatore di eventi per il click sul bottone, che invoca la funzione al click del bottone
addEventListener('click', changeBackground); */


// ESERCIZIO 9
/* const changeAddressFooter = () => {
    const addressFooter = document.querySelector(".addressFooter");
    addressFooter.innerText = `Number 30, 1111, Italy`;
}

changeAddressFooter(); */

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella


/* const addClassLinkAmazon = () => {
    const cards = document.querySelectorAll("a"); //seleziono tutti gli elementi a della pagina
    for (card of cards){
        card.setAttribute("class","linkProductOnAmazon");
    }
}

addClassLinkAmazon(); */

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

/* const toggleImg = () => {
    //prendo tutte le immagine della pagina:
    const images = document.querySelectorAll("img");
    for (image of images){
       image.classList.toggle("img-hidden")
    }

}

toggleImg(); */

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

/* const changeColorPrice = () => {
    const randomColore = "#" + Math.floor(Math.random() * 16777215).toString(16); //Genero un colore casuale in formato esadecimale
    const allPriceProducts = document.querySelectorAll(".product-price");
    for (priceProduct of allPriceProducts){
        priceProduct.style.color = randomColore;
    }
}

changeColorPrice(); */