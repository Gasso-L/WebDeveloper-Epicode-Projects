const queryParam = new URLSearchParams(window.location.search);
const bookID = queryParam.get("id");
const API_ENDPOINT = `https://striveschool-api.herokuapp.com/books?asin=${bookID}`;
const bookCardDetailsContainer = document.querySelector(".book-card-details");
const imgContainer = document.querySelector(".img-container");
const infoBook = document.querySelector(".info-book");

//Funzione che genera il dettaglio del libro
const generateBookDetail = (book) => {
    const imgBook = document.createElement("img");
    imgBook.setAttribute("class", "img-fluid rounded-start");
    imgBook.src = book.img;

    imgContainer.appendChild(imgBook);

    const infoBookContainer = document.createElement("div");
    infoBookContainer.setAttribute("class","card-body align-self-center");

    const titleBook = document.createElement("h5");
    titleBook.setAttribute("class","card-title fs-2");
    titleBook.innerText = book.title;

    const priceBook = document.createElement("p");
    priceBook.setAttribute("class", "card-text fs-3");
    priceBook.innerText = `Prezzo del libro: ${book.price}€`;

    const categoryBook = document.createElement("p");
    categoryBook.setAttribute("class", "card-text fs-3");
    categoryBook.innerText = `Categoria: ${book.category}`;

    infoBookContainer.append(titleBook,priceBook,categoryBook);
    infoBook.appendChild(infoBookContainer);
}

const getBookCardDetails = async () => {
    try {
        const response = await fetch(API_ENDPOINT);
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

 getBookCardDetails()
    .then (results => generateBookDetail(results[0]));