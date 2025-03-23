const PEXEL_API_KEY = "NcCiAobo7vtWGlDtDbTBplL5oFD6XC3krGVb1O2Brw2h4KLn5F9KS68C";
const imageRandomContainer = document.getElementById("image-container");
const categories = ["animals", "ocean", "people", "city", "cars"];
const randomIndex = Math.floor(Math.random() * categories.length);
const randomWord = categories[randomIndex];

const getInitialRandomPhotos = async () => {
    try {
        const response = await fetch(
            `https://api.pexels.com/v1/search?query=${randomWord}&per_page=4`,
            {
                headers: {
                    Authorization: PEXEL_API_KEY,
                },
            }
        );
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

const generateRandomPhotos = (data) => {
    const photosImg = document.createElement("img");
    photosImg.setAttribute("class", "img-fluid py-5");
    photosImg.src = data.src.tiny;

    imageRandomContainer.append(photosImg);

}

getInitialRandomPhotos()
    .then (results => {
        results.photos.forEach(photo => {
            generateRandomPhotos(photo);
        });
    })