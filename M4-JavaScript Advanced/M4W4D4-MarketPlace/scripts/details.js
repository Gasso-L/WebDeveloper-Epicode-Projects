const cardDetailWrapper = document.getElementById("card-detail-wrapper");
const alertDetailError = document.getElementById("alert-detail-card");
const spinnerDetail = document.getElementById("spinner-detail");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//fetch per recuperare il singolo prodotto
const getDetailSingleProduct = async (productID) => {
    try {
        toggleSpinner(spinnerDetail);
        const response = await fetch(`${API_ENDPOINT}/${productID}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            }
        })
        return await response.json();
    } catch (error) {
        toggleDangerAlert(alertDetailError);
    } finally {
        toggleSpinner(spinnerDetail);
    }
};

//funzione generazione del prodotto
const generateDetailProduct = (product) => {
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class","col-12 col-md-6 img-card-detail card");
    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("class","img-fluid");
    imgProduct.src = product.imageUrl;
    imgProduct.alt = product.name;

    imgContainer.appendChild(imgProduct);

    const infoProductContainer = document.createElement("div");
    infoProductContainer.setAttribute("class","col-12 col-md-6 card");
    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("class","card-body");

    const productTitle = document.createElement("h5");
    productTitle.setAttribute("class","card-title");
    productTitle.innerText = product.name;

    const productBrand = document.createElement("h6");
    productBrand.setAttribute("class","cardsubtitle mb-3 text-body-secondary");
    productBrand.innerText = product.brand;

    const productDescription = document.createElement("p");
    productDescription.setAttribute("class","card-text");
    productDescription.innerText = product.description;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class","card-text mb-4 fw-bold");
    productPrice.innerText = `${product.price}€`;

    const btnContainer = document.createElement("div");
    btnContainer.setAttribute("class","d-flex flex-column gap-2");
    const btnCart = document.createElement("a");
    btnCart.setAttribute("class","btn btn-add-cart");
    btnCart.innerText = "Add to Cart";
    btnCart.href = "#";
    const btnBuy = document.createElement("a");
    btnBuy.setAttribute("class","btn btn-buy");
    btnBuy.innerText = "Buy Now";
    btnBuy.href = "#";

    btnContainer.append(btnCart,btnBuy);

    infoContainer.append(productTitle,productBrand,productDescription,productPrice,btnContainer);
    infoProductContainer.appendChild(infoContainer);

    cardDetailWrapper.append(imgContainer,infoProductContainer);
};

getDetailSingleProduct(id)
    .then (res => generateDetailProduct(res));