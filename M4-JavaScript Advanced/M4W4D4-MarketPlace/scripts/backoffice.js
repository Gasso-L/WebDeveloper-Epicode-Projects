const alertGenerationTable = document.getElementById("alert-generation-table");
const formContainer = document.getElementById("form-container");

const productDescription = document.getElementById("productDescription");
const productBrand = document.getElementById("productBrand");
const productImage = document.getElementById("productImage");
const productPrice = document.getElementById("productPrice");
const productName = document.getElementById("productName");

const spinnerTable = document.getElementById("spinner-table");

const tableContainer = document.getElementById("table-body");

//funzione per visualizzare l'errore quando l'input è errato
const setError = (input, message) => {
  const inputControl = input.parentElement;
  const showError = inputControl.querySelector(".invalid-input");

  showError.innerText = message;
  inputControl.classList.add("invalid-input");
  inputControl.classList.remove("success");
};

//funzione per visualizzare che l'input inserito è corretto
const setSuccess = (input) => {
  const inputControl = input.parentElement;
  const showError = inputControl.querySelector(".invalid-input");

  if (showError) {
    showError.innerText = "";
  };

  inputControl.classList.add("success");
  inputControl.classList.remove("invalid-input");
};

//funzione per validare gli input, restituisce un booleano se input corretti oppure false altrimenti
const validateInputs = () => {
  const productDescriptionValue = productDescription.value.trim();
  const productBrandValue = productImage.value.trim();
  const productImageValue = productImage.value.trim();
  const productPriceValue = productPrice.value.trim();
  const productNameValue = productName.value.trim();
  let isValidateForm = true;

  if (productNameValue === "") {
    setError(productName, "Name Required");
    isValidateForm = false;
  } else {
    setSuccess(productName);
  }

  if (productDescriptionValue === "") {
    setError(productDescription, "Description Required");
    isValidateForm = false;
  } else {
    setSuccess(productDescription);
  }

  if (productBrandValue === "") {
    setError(productBrand, "Brand Required");
    isValidateForm = false;
  } else {
    setSuccess(productBrand);
  }

  if (productImageValue === "") {
    setError(productImage, "Image Required");
    isValidateForm = false;
  } else {
    setSuccess(productImage);
  }

  if (productPriceValue === "") {
    setError(productPrice, "Price Required");
    isValidateForm = false;
  } else {
    setSuccess(productPrice);
  }

  return isValidateForm;
};

//fetch post per aggiungere il prodotto
const createProduct = async (product) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify(product)
    })
    window.location.reload();
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

//addevent listener al form per aggiungere i prodotti. Se i campi ok faccio chiamata post
formContainer.addEventListener("submit", async e => {
  e.preventDefault();
  let valideForm = validateInputs();
  if (valideForm) {
    const payload = {
      name: productName.value,
      description: productDescription.value,
      brand: productBrand.value,
      imageUrl: productImage.value,
      price: Number(productPrice.value)
    }
    await createProduct(payload);
    formContainer.reset();
  }
});

//funzione genera td
const generateTdTable = () => {
  const tdElement = document.createElement("td");
  return tdElement;
};

//funzione genera btn
const generateBtnTd = () => {
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn btn-color btn-no-hover-color");
  return btn
};

//funzione che genera la tabella con i prodotti
const generateTableRow = (row) => {
  const { name, description, brand, price } = row;
  const generateTr = document.createElement("tr");
  const tdActionBtn = generateTdTable();
  tdActionBtn.setAttribute("class", "d-flex justify-content-start gap-2");

  [name, description, brand, price].map(element => {
    const tdElement = generateTdTable(element);
    tdElement.innerText = element;
    tdElement.setAttribute("class", "short-text");
    generateTr.appendChild(tdElement);
  });

  const editBtn = generateBtnTd();
  editBtn.innerHTML = `<img src="./img/pencil-square.svg" alt="Edit">`;
  editBtn.value = row._id;
  editBtnEventListener(editBtn);

  const deleteBtn = generateBtnTd();
  deleteBtn.innerHTML = `<img src="./img/trash.svg" alt="Delete">`;
  deleteBtn.value = row._id;
  deleteBtnEventListener(deleteBtn);

  tdActionBtn.append(editBtn, deleteBtn);

  generateTr.appendChild(tdActionBtn);
  tableContainer.appendChild(generateTr);
};

//fetch per prendere i prodotti da inserire nella tabella
const getAllProducts = async () => {
  try {
    toggleSpinner(spinnerTable);
    const response = await fetch(API_ENDPOINT, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      }
    })
    return await response.json();
  } catch (error) {
    toggleDangerAlert(alertGenerationTable);
  } finally {
    toggleSpinner(spinnerTable);
  }
};
//presi i prodotti invoco la funzione genereateTableRow
getAllProducts()
  .then(results => {
    results.map(result => generateTableRow(result))
  });
