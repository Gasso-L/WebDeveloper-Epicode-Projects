/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* function crazySum(num1, num2){
    if (num1===num2){
        return (num1+num2)*3
    } else {
        return num1+num2
    }
}

console.log(crazySum(3,3)); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/*
function boundary(numint){
    return ((numint <= 100 && numint >= 20) || numint===400)
}

console.log(boundary(21));*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*  function reverseString(str){
    let reversestr = "";
    for (let i = str.length-1;i>=0;i--){
        reversestr += str[i];
    }
    return reversestr.toLowerCase();
}

console.log(reverseString("EPICODE")); */

//Versione Array
/* function reverseStringArray(str){
    return str.split("").reverse("").join("");
}

console.log(reverseStringArray("Hello")); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
function upperFirst(str){
    let upperStr = "";
    let arrayParole = str.split(" ");
    for (let i=0; i<arrayParole.length; i++){
        upperStr += arrayParole[i][0].toUpperCase() + arrayParole[i].slice(1, arrayParole[i].length)+ " ";
    }
    return upperStr;
}

console.log(upperFirst("mi chiamo Lorenzo"))*/


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* function giveMeRandom(n){
    if (n === 0 || n <= 0){
        return console.log("Numero non valido, inserire un numero maggiore o uguale ad 1")
    } 
    const arrayRandoms = [];
    for (let i=0;i<n;i++){
        arrayRandoms[i] = Math.round(Math.random() * 10);
    }
    return console.log(arrayRandoms);
}

giveMeRandom(0); */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1, l2){
    if (l1 <= 0 || l2 <= 0){
        return console.log("Valori non validi, immettere valori maggiori di 1")
    }
    return console.log(l1*l2);
}

area(0,12) */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*function crazyDiff(num){
    let crazyDiffresult = Math.abs(num - 19);
    if (crazyDiffresult > 19){
        return crazyDiffresult*3;
    } else return crazyDiffresult;   
} 
console.log(crazyDiff(49));*/


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* const codify = (str) => {
    let str2 = "";
    if (str.startsWith("code")) {
        return str;
    } else {
        return str2.concat("code ",str);
    }
}

console.log(codify("hello, this is a test")); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* const check3and7 = (num) => {
    if (num !== Math.abs(num)){
        return "Inserire un un numero intero positivo"
    } else {
        return (num%3 === 0 || num%7=== 0);
    } 
}

console.log(check3and7(6)); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* const cutString = (str) => {
    return str.slice(1,str.length-1);
}

console.log(cutString("ciao")); */
