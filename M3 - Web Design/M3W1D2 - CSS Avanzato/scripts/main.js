/* JS Exercises should go here */

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.


/* window.onload = (e) => {
    const socialLink = document.querySelector(".blog-sidebar div:nth-child(3) li:nth-child(2)");
    socialLink.remove();
} */


// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

/* const btnJumbotronContinueReading = document.querySelector(".lead.mb-0 a");
const deleteJumbotron = () =>{
    const divJumbotron = document.querySelector(".jumbotron");
    divJumbotron.remove();
    //or -> divJumbotron.innerHTML = "";
}

btnJumbotronContinueReading.addEventListener("click",deleteJumbotron); */


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

/* const authorsPost = document.querySelectorAll(".blog-post-meta a");

const alertAuthor = (authorName) => {
    alert(authorName);
}

authorsPost.forEach((authorPost) => {
    authorPost.addEventListener("mouseenter", ()=>{alertAuthor(`${authorPost.textContent}`)});
}); */