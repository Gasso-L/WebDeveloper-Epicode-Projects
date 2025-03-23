const bookCardsContainer = document.querySelector(".books-cards-container");
const URL_ADDRESS_BOOK = "https://striveschool-api.herokuapp.com/books";
const spinnerContainer = document.querySelector(".spinner-border");

//Modale Carrello
const tableCartContainer = document.querySelector(".modal-container");
const closeCartButton = document.querySelector(".close-cart-modal");
const cartContainer = document.querySelector(".cart-container");
const openCartButton = document.querySelector(".open-cart");
const customModal = document.getElementById("customModal");

//contatori carello
let allBookCart = 0;
let allBookCartCost = 0;

//Input Search Books e btn search Books
const inputSearchBooks = document.querySelector(".input-search-books");
const inputCharCheckWarning = document.querySelector(".char-check");
const btnSearchBook = document.querySelector(".btn-search-book");

//Funzione per visualizzare il carrello quando clicco nell'icona
const showModal = () => {
    customModal.showModal();
}

//Funzione per chiudere il carrello
const closeModal = () => {
    customModal.close();
}

//Funzione spinner show
const spinnerShow = () => {
    spinnerContainer.classList.remove("spinner-off");
}

//Funzione spinner off
const spinnerOff = () => {
    spinnerContainer.classList.add("spinner-off");
}

//Funzione creazione delle card contente i miei libri
const bookContainerGeneration = (data) => {
    const cardBookContainer = document.createElement("div");
    cardBookContainer.setAttribute("class", "col-12 col-md-4 d-flex card book-card-container");

    const cardBookImage = document.createElement("img");
    cardBookImage.setAttribute("class", "card-img-top");
    cardBookImage.src = data.img;
    cardBookImage.alt = data.title;

    const cardBookBodyContainer = document.createElement("div");
    cardBookBodyContainer.setAttribute("class", "card-body");

    const titleCardBook = document.createElement("h5");
    titleCardBook.setAttribute("class", "card-title");
    titleCardBook.innerText = data.title;

    const priceCardBook = document.createElement("p");
    priceCardBook.setAttribute("class", "card-text");
    priceCardBook.innerText = `Categoria: ` + data.category + `\nPrezzo: ` + data.price + `€`;

    const btnCardBook = document.createElement("button");
    btnCardBook.setAttribute("class", "btn btn-secondary btn-add-to-cart");
    btnCardBook.innerText = "Aggiungi al carrello";
    btnCardBook.value = data.asin;

    cardBookBodyContainer.append(cardBookImage, titleCardBook, priceCardBook, btnCardBook);

    cardBookContainer.appendChild(cardBookBodyContainer);

    bookCardsContainer.appendChild(cardBookContainer);
};

//funzione per il pulsante aggiungi al carrello
const assignBtnAddToCartListeners = (btnBooks) => {
    // selezioni tutti i button "Aggiungi al carrello"
    const btnsAddToCart = document.querySelectorAll(".btn-add-to-cart");
    // per ogni bottone aggiungo un event listiner
    btnsAddToCart.forEach(btnAddToCart => {
        btnAddToCart.addEventListener("click", () => {
            cartContainer.innerHTML = "";
            allBookCart++;
            //al click del botton faccio un controllo se il value del pulsante cliccato è uguale all'id (asin) del mio libro. Se vero allora aggiungo il libro nel modale del carrello
            btnBooks.forEach(book => {
                if (book.asin === btnAddToCart.value) {
                    allBookCartCost += book.price;
                    cartBooksGeneration(book);
                    btnAddToCart.innerText = "Aggiunto";
                }
            })
            cartTotalCost(allBookCart, allBookCartCost);
        });
    });
};

//Funzione che rimuove il libro dal carrello
const removeFromCart = (cartBookTr, data) => {
    // Rimuovo la riga della tabella
    cartBookTr.remove();
    // Aggiorno i totali del carrello
    allBookCart--;
    allBookCartCost -= data.price;
    // Aggiorno la visualizzazione dei totali
    cartTotalCost(allBookCart, allBookCartCost);
}

//funzione per generare i libri all'interno del carrello. Li inserisco all'interno di una tabella
const cartBooksGeneration = (data) => {
    const cartBookTr = document.createElement("tr");

    const cartBookTitleTd = document.createElement("td");
    cartBookTitleTd.innerText = data.title;

    const cartBookPriceTd = document.createElement("td");
    cartBookPriceTd.innerText = data.price;

    //Creazione del pulsante con la possibilità di eliminare l'elemento dal carrello
    const deleteBookFromCart = document.createElement("td");
    deleteBookFromCart.setAttribute("class", "d-flex justify-content-center")
    const btnDeleteBookFromCart = document.createElement("button");
    btnDeleteBookFromCart.setAttribute("class", "btn btn-secondary d-flex justify-content-center");
    btnDeleteBookFromCart.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;

    // Event listener per eliminare l'elemento dal carrello
    btnDeleteBookFromCart.addEventListener("click", () => removeFromCart(cartBookTr, data));

    deleteBookFromCart.append(btnDeleteBookFromCart);
    cartBookTr.append(cartBookTitleTd, cartBookPriceTd, deleteBookFromCart);
    tableCartContainer.appendChild(cartBookTr);
};

//funzione che visualizza il totale dei libri nel carrello con il loro prezzo
const cartTotalCost = (totalBooks, totalCost) => {
    cartContainer.innerHTML = "";
    let totalCostFix = Math.floor(totalCost * 100) / 100;
    const totalBooksContainer = document.createElement("div");
    totalBooksContainer.setAttribute("class", "col d-flex justify-content-between py-4");

    const totalBooksTitleCost = document.createElement("h5");
    totalBooksTitleCost.innerText = `Totale dei Libri nel carrello: ${totalBooks} - Totale Costo: ${totalCostFix}€`;

    const btnEmptyCart = document.createElement("button");
    btnEmptyCart.setAttribute("class","btn btn-secondary");
    btnEmptyCart.innerText = "Svuota Carrello";

    //svuota carello, svuota il contenuto della tabella e del carello, azzerando anche i contatori
    btnEmptyCart.addEventListener("click", () => {
        cartContainer.innerHTML="";
        tableCartContainer.innerHTML="";
        allBookCart = 0;
        allBookCartCost = 0;
    });

    totalBooksContainer.append(totalBooksTitleCost,btnEmptyCart);

    cartContainer.appendChild(totalBooksContainer);
};

//Funzione che controlla il valore dell'input
const checkInputField = () => {
    const titleToSearch = inputSearchBooks.value.toLowerCase();
    inputCharCheckWarning.classList.add("input-char-check-off");
    if (titleToSearch.length === 0) { //se vuoto visualizzo tutti i libri
        bookCardsContainer.innerHTML = "";
        return titleToSearch
    } else if (titleToSearch.length > 2) {
        bookCardsContainer.innerHTML = "";
        inputCharCheckWarning.classList.add("input-char-check-off");
        return titleToSearch;
    } else {
        inputCharCheckWarning.classList.remove("input-char-check-off");
        return null
    }
};

//funzione che mi cerca il libro in base all'input
const searchTitle = (results) => {
    btnSearchBook.addEventListener("click", () => {
        //check titolo
        const strToSearch = checkInputField();
        results.forEach(result => {
            const titleBook = result.title.toLowerCase();
            if (titleBook.includes(strToSearch) && strToSearch !== null) { //solo per i libri che contengono la stringa genero le card
                bookContainerGeneration(result);
            }
        })
        //avviso se non trovo nessun libro con quel titolo
        if (bookCardsContainer.innerHTML === "") {
            const emptyTitle = document.createElement("h2");
            emptyTitle.innerText = `Nessun Libro Trovato in base al titolo: ${strToSearch}`;
            bookCardsContainer.appendChild(emptyTitle);
         }  else {
             assignBtnAddToCartListeners(results);
         } 
    })
};


const bookCardsGeneration = async () => {
    spinnerShow();
    try {
        const response = await fetch(URL_ADDRESS_BOOK);
        return await response.json();
    } catch (error) {
        throw new Error(error.message)
    } finally {
        spinnerOff();
    }
};

bookCardsGeneration()
    .then((results) => {
        results.forEach(book => {
            bookContainerGeneration(book);
        });
        return results;
    })
    .then((results) => { //gestisci il carrello
        //funzione che mi genera un eventlistiner per il pulsante aggiungi al carrello
        assignBtnAddToCartListeners(results);
        return results;
    })
    .then((results) => {
        //Cerco il libro in base all'input
        searchTitle(results);    
    })
    .catch(error => console.log(error));

//Apertura e chiusura del modale
openCartButton.addEventListener("click", showModal);
closeCartButton.addEventListener("click", closeModal);