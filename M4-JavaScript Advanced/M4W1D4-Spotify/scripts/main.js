const EMINEM_SERVER_ADDRESS = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";
const METALLICA_SERVER_ADDRESS = "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica";
const QUEEN_SERVER_ADRESSS = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

const eminemSection = document.getElementById("eminemSection");
const metallicaSection = document.getElementById("metallicaSection");
const queenSection = document.getElementById("queenSection");

const spinner = document.querySelector('.custom-spinner');

//Modale Lista Album
const listAlbumContainer = document.querySelector(".list-album-container");
const btnModal = document.querySelector(".album-title-btn");


const showLoadingSpinner = () => {
    spinner.classList.add('show-spinner');
}

const hideLoadingSpinner = () => {
    spinner.classList.remove('show-spinner');
}

//Genero le card del mio album e me le faccio restituire
const generateAlbumCard = (dataCard) => {
    const albumContainer = document.createElement("div");
    albumContainer.setAttribute("class", "d-flex flex-column align-items-start justify-content-center swiper-slide col-6 col-md-4");

    const albumImg = document.createElement("img");
    albumImg.setAttribute("class", "img-fluid img-cover pb-2");
    albumImg.src = dataCard.album.cover_medium;

    const albumTitle = document.createElement("h5");
    albumTitle.innerText = dataCard.title;

    const artistAlbum = document.createElement("h6");
    artistAlbum.innerText = dataCard.artist.name;

    albumContainer.append(albumImg, albumTitle, artistAlbum);
    return albumContainer;
};

//genero lo swiper container 
const generateSwiperContainer = () => {
    const swiperContainer = document.createElement("div");
    swiperContainer.setAttribute("class", "swiper pt-3");
    return swiperContainer;
}

//funzione che genera le arrow del mio swiper
const generateSwiperArrow = (swiper) => {
    const swiperNavigationLeft = document.createElement("div");
    const swiperNavigationRight = document.createElement("div");
    swiperNavigationLeft.innerHTML = `<div class="swiper-button-prev"></div>`;
    swiperNavigationRight.innerHTML = `<div class="swiper-button-next"></div>`;
    swiper.appendChild(swiperNavigationLeft);
    swiper.appendChild(swiperNavigationRight);
}

//funzione che genera lo swiper wrapper per le mie card
const generateSwiperWrapperContainer = () => {
    const swiperWrapperContainer = document.createElement("div");
    swiperWrapperContainer.setAttribute("class", "swiper-wrapper");
    return swiperWrapperContainer;
}
//funzione che inizializza lo swiper
const initializeSwiper = (selector) => {
    return new Swiper(selector, {
        slidesPerView: "auto",
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/* fetch(EMINEM_SERVER_ADDRESS)
    .then(result => result.json())
    .then(json => console.log(json))
    .catch(error => console.log(error)) */

//Funzione asincrona per la ricezione dei dati dall'url    
const getAllAlbumEminem = async () => {
    showLoadingSpinner();
    try {
        const response = await fetch(EMINEM_SERVER_ADDRESS);
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error("Ops card non caricata. Riprova tra qualche minuto");
    }

};

//ricevuti i miei dati popolo lo swiper con lo swiper-wrapper e lo swiper-slide per ogni album
getAllAlbumEminem()
    .then(res => {
        const swiperContainer = generateSwiperContainer();
        const swiperWrapperContainer = generateSwiperWrapperContainer();
        res.data.forEach(song => {
            swiperWrapperContainer.appendChild(generateAlbumCard(song));
        });
        swiperContainer.appendChild(swiperWrapperContainer);
        generateSwiperArrow(swiperContainer);
        eminemSection.appendChild(swiperContainer);
        initializeSwiper(".swiper");
    })
    .catch(error => {
        eminemSection.innerText = `${error}`;
    })
    .finally(() => {
        hideLoadingSpinner();
    })

const getAllAlbumMetallica = async () => {
    try {
        const response = await fetch(METALLICA_SERVER_ADDRESS);
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error("Ops card non caricata. Riprova tra qualche minuto");
    }

};

//ricevuti i miei dati popolo lo swiper con lo swiper-wrapper e lo swiper-slide per ogni album
getAllAlbumMetallica()
    .then(res => {
        const swiperContainer = generateSwiperContainer();
        const swiperWrapperContainer = generateSwiperWrapperContainer();
        res.data.forEach(song => {
            swiperWrapperContainer.appendChild(generateAlbumCard(song));
        });
        swiperContainer.appendChild(swiperWrapperContainer);
        generateSwiperArrow(swiperContainer);
        metallicaSection.appendChild(swiperContainer);
        initializeSwiper(".swiper");
    })
    .catch(error => {
        metallicaSection.innerText = `${error}`;
    })

const getAllAlbumQueen = async () => {
    try {
        const response = await fetch(QUEEN_SERVER_ADRESSS);
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error("Ops card non caricata. Riprova tra qualche minuto");
    }

};

//ricevuti i miei dati popolo lo swiper con lo swiper-wrapper e lo swiper-slide per ogni album
getAllAlbumQueen()
    .then(res => {
        const swiperContainer = generateSwiperContainer();
        const swiperWrapperContainer = generateSwiperWrapperContainer();
        res.data.forEach(song => {
            swiperWrapperContainer.appendChild(generateAlbumCard(song));
        });
        swiperContainer.appendChild(swiperWrapperContainer);
        generateSwiperArrow(swiperContainer);
        queenSection.appendChild(swiperContainer);
        initializeSwiper(".swiper");
    })
    .catch(error => {
        queenSection.innerText = `${error}`;
    })

const generateAlbumTitle = (dataAlbumTitle) => {
    const titleContainer = document.createElement("p");
    titleContainer.innerText = dataAlbumTitle.title;
    listAlbumContainer.appendChild(titleContainer);
}



btnModal.addEventListener("click", () => {
    listAlbumContainer.innerHTML = "";

    const getAllTitleAlbumEminem = async () => {
        try {
            const response = await fetch(EMINEM_SERVER_ADDRESS);
            const data = await response.json();
            return data;

        } catch (error) {
            throw new Error("Ops card non caricata. Riprova tra qualche minuto");
        }

    };

    getAllTitleAlbumEminem()
        .then(res => {
            res.data.forEach(title => {
                generateAlbumTitle(title);
            });
        })
        .catch(error => {
            listAlbumContainer.innerText = `${error}`;
        })
})