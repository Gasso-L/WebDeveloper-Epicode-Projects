const alertEdit = document.getElementById("alert-edit-product");
const btnCloseModal = document.querySelector(".close-modal");
const spinnerEdit = document.getElementById("spinner-edit");
const editModal = document.getElementById("editModal");
const editForm = document.getElementById("edit-form");

//Funzione eventListiner btn chiudi modale
btnCloseModal.addEventListener("click", () => closeModal(editModal));

//funzione eventListener al btn edit
const editBtnEventListener = (btn) => {
    btn.addEventListener("click", async () => {
        showModal(editModal);
        const productID = btn.value;
        const productData = await getSingleProduct(productID);
        const inputsForm = editForm.querySelectorAll("input");
        resetForm();
        inputsForm.forEach(input => {
            const inputName = input.name;
            input.value = productData[inputName];
        })
    }
    )
};

//fetch per recuperare il singolo prodotto dal modale
const getSingleProduct = async (productID) => {
    try {
        toggleSpinner(spinnerEdit);
        const response = await fetch(`${API_ENDPOINT}/${productID}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            }
        })
        return await response.json();
    } catch (error) {
        toggleDangerAlert(alertEdit);
    } finally {
        toggleSpinner(spinnerEdit);
        resetForm();
    }
};

//fetch modifico il prodotto
const editSingleProduct = async (product, productID) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/${productID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            body: JSON.stringify(product)
        })
        return await response.json();
    } catch (error) {
        toggleDangerAlert(alertEdit);
    }
};

//al click del bottone modify product invoco la fetch put
editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputsForm = editForm.querySelectorAll("input");
    const payload = {};
    //array di booleani per controllare gli input
    const isInputsValid = [];
    inputsForm.forEach(input => {
        const inputName = input.name;
        isInputsValid.push(validateModalInput(input));
        if (validateModalInput(input)) {
            payload[inputName] = input.value;
        }
    });
    //se non ci sono false nell'array, input corretti, carico il prodotto
    if (!isInputsValid.includes(false)) {
        await editSingleProduct(payload, payload._id);
        editForm.reset();
        window.location.reload();
    }
});

//valido gli input
const validateModalInput = (input) => {
    if (!input.value) {
        setError(input, "Required");
        return false;
    } else {
        setSuccess(input);
        return true;
    }
};

//reset form success/error
const resetForm = () => {
    const inputsControl = editForm.querySelectorAll(".input-control");
    inputsControl.forEach(input => input.classList.remove("success","invalid-input"));
    const invalidInputs = editForm.querySelectorAll(".invalid-input");
    invalidInputs.forEach(input => input.innerText = "");
};