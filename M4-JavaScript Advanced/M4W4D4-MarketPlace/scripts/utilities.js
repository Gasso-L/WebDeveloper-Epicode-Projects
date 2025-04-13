const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VjMjc5MzNkZjMwMzAwMTUxNWE2ZDciLCJpYXQiOjE3NDM4NDU4MzksImV4cCI6MTc0NTA1NTQzOX0.68qtcPB9K7UNKpKlYt2ZUYnN84hnUVGPUChmd2zLTmg";
const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";

//Funzione spinner
const toggleSpinner = (spinner) => {
    spinner.classList.toggle("d-none");
};

//Funzione per visualizzare il modale
const showModal = (modal) => {
    modal.showModal();
};

//Funzione per chiudere il modale
const closeModal = (modal) => {
    modal.close();
};

//Funzione gestione alert
const toggleDangerAlert = (alert) =>{
    alert.innerText = "Oops, Something Went Wrong, Try Again Later..."
    alert.classList.toggle("d-none");
};