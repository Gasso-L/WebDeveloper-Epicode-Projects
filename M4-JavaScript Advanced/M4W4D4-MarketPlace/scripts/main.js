const alertGenerationCard = document.getElementById("alert-generation-card");
const productsWrapper = document.getElementById("products-wrapper");
const spinnerCard = document.getElementById("spinnercard");

//funzione generazione della card prodotto in pagina index
const generateProduct = (product) => {
    const productContainer = document.createElement("div");
    productContainer.setAttribute("class", "card col-12 col-md-4");

    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("class", "card-img-top card-image pt-2");
    imgProduct.src = product.imageUrl;
    imgProduct.alt = product.name;

    const productInfoContainer = document.createElement("div");
    productInfoContainer.setAttribute("class", "card-body");

    const nameProduct = document.createElement("h5");
    nameProduct.setAttribute("class", "card-title text-truncate");
    nameProduct.innerText = product.name;

    const descriptionProduct = document.createElement("p");
    descriptionProduct.setAttribute("class", "card-text text-truncate");
    descriptionProduct.innerText = product.description;

    productInfoContainer.append(nameProduct, descriptionProduct);

    const productDetailContainer = document.createElement("ul");
    productDetailContainer.setAttribute("class", "list-group list-group-flush");

    const brandProduct = document.createElement("li");
    brandProduct.setAttribute("class", "list-group-item");
    brandProduct.innerText = `Brand: ${product.brand}`;

    const priceProduct = document.createElement("li");
    priceProduct.setAttribute("class", "list-group-item fw-bold");
    priceProduct.innerText = `Price: ${product.price}€`;

    productDetailContainer.append(brandProduct, priceProduct);

    const btnAddToCart = document.createElement("a");
    btnAddToCart.setAttribute("class","btn btn-add-cart mt-4");
    btnAddToCart.innerText = "Add to Cart";
    btnAddToCart.href = `#`;

    const btnDetail = document.createElement("a");
    btnDetail.setAttribute("class","btn btn btn-buy my-2");
    btnDetail.innerText = "Product Detail";
    btnDetail.target = "_blank";
    btnDetail.href = `./details.html?id=${product._id}`;

    productContainer.append(imgProduct, productInfoContainer, productDetailContainer,btnAddToCart,btnDetail);

    productsWrapper.appendChild(productContainer);
};

//fetch get products
const getAllProducts = async () => {
    try {
        toggleSpinner(spinnerCard);
        const response = await fetch(API_ENDPOINT, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            }
        })
        return await response.json();
    } catch (error) {
        toggleDangerAlert(alertGenerationCard);
    } finally {
        toggleSpinner(spinnerCard);
    }
};

//genero i prodotti dopo la fetch
getAllProducts()
    .then(results => {
        results.map(result => generateProduct(result))
    });