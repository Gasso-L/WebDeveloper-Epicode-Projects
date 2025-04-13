const btnCloseDeleteModal = document.getElementById("closeBtnDeleteModal");
const alertDeleteProduct = document.getElementById("alert-delete-product");
const btnDeleteProduct = document.getElementById("delete-product");
const deleteModal = document.getElementById("deleteModal");


//fetch per eliminare un prodotto
const deleteProduct = async (productID) => {
    try {
        const response = await fetch(`${API_ENDPOINT}${productID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
        })
        window.location.reload();
        return await response.json();
    } catch (error) {
        toggleDangerAlert(alertDeleteProduct);
    }
};

//funzione eventListener al btn delete
const deleteBtnEventListener = (btn) => {
    btn.addEventListener("click", async () => {
        btnDeleteProduct.value = btn.value;
        showModal(deleteModal);
    })
};

//chiusura modale
btnCloseDeleteModal.addEventListener("click", ()=>{closeModal(deleteModal)});

//se confermo eliminazione eseguo fetch
btnDeleteProduct.addEventListener("click", ()=>{
    deleteProduct(btnDeleteProduct.value);
})