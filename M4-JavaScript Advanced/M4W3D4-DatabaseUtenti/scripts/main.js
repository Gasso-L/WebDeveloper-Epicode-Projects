const alertCategoryContainer = document.getElementById("category-danger-alert");
const alertInputSearchContainer = document.getElementById("input-danger-alert");
const chooseCategoryDropdown = document.getElementById("chooseCategory");
const spinnerContainer = document.querySelector(".spinner-container");
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const usersNotFound = document.getElementById("users-not-found");
const tableDataContainer = document.getElementById("table-data");
const inputForm = document.querySelector(".input-search-users");
const btnSearch = document.querySelector(".search-btn");

const toggleShowSpinner = () => {
    spinnerContainer.classList.toggle("d-none");
};

const showCategoryAlertMessage = () => {
    alertCategoryContainer.innerText = "Choose one Category";
    alertCategoryContainer.classList.remove("d-none");
}

const showInputAlertMessage = () => {
    alertInputSearchContainer.innerText = "At least three characters";
    alertInputSearchContainer.classList.remove("d-none");
}

const hideCategoryAlertMessage = () => {
    alertCategoryContainer.classList.add("d-none");
}

const hideInputAlertMessage = () => {
    alertInputSearchContainer.classList.add("d-none");
}

const generateTableRow = (user) => {
    const tr = document.createElement("tr");
    const { id, email, name, username, phone, website } = user;
    [id, email, name, username, phone, website].forEach(item => {
        const td = document.createElement("td");
        td.innerText = item;
        tr.appendChild(td);
    })
    tableDataContainer.appendChild(tr);
}

const getUsersData = async () => {
    toggleShowSpinner();
    try {
        const response = await fetch(API_ENDPOINT);
        const list = await response.json();
        return list
    } catch (error) {
        throw toggleDangerAlertMessage();
    } finally {
        toggleShowSpinner();
    }
}

//Generazione della prima tabella con tutti i dati
getUsersData()
    .then(res => res.forEach(data => generateTableRow(data)));


const validateInputSearchField = (strInput) => {
    const isInputEmpty = strInput.trim() === "";
    const isMinimumLength = strInput.length > 2;
    return !isInputEmpty && isMinimumLength
};

const validateDropodownCategory = (dropdownValue) => {
    const isDropdownCorrect = dropdownValue !== "Choose one";
    return isDropdownCorrect;
}

const setLowerCase = (object) => {
    for (const key in object) {
        if (typeof object[key] === "string") {
            object[key] = object[key].toLowerCase();
        }
    }
    return object
}

const getUsersByFilters = (user, inputSearch, inputDropdown) => {
    if (user[inputDropdown].includes(inputSearch.toLowerCase())) {
        return true
    } else {
        return false
    }
}

btnSearch.addEventListener("click", () => {
    const isInputValid = validateInputSearchField(inputForm.value);
    const strDropdown = chooseCategoryDropdown.value;
    const isDropdownValid = validateDropodownCategory(strDropdown);

    if (isInputValid && isDropdownValid) {
        tableDataContainer.innerHTML = "";
        hideCategoryAlertMessage();
        hideInputAlertMessage();
        getUsersData()
            .then(results => {
                let isAnyUserFound = false;
                usersNotFound.innerHTML = "";
                usersNotFound.classList.add("d-none");
                results.forEach(res => {
                const { id, email, name, username, phone, website } = res;
                const objLowerCase = setLowerCase({ id, email, name, username, phone, website });
                const isUserFound = getUsersByFilters(objLowerCase, inputForm.value, strDropdown);
                if (isUserFound) {
                    generateTableRow(res);
                    isAnyUserFound = true;
                }
            });
            //avviso se non è stato trovato nessun utente
            if (!isAnyUserFound) {
                usersNotFound.innerHTML = `Utente non trovato con questa tipologia di filtro: ${strDropdown} - ${inputForm.value}`;
                usersNotFound.classList.remove("d-none");
            }
        }) 

    } else if (isInputValid) {
        showCategoryAlertMessage();
    } else if (isDropdownValid) {
        showInputAlertMessage();
    } else {
        showCategoryAlertMessage();
        showInputAlertMessage();
    }
})

