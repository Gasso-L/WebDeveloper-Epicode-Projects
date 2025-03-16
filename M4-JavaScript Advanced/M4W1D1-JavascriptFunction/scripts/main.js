//1) Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

/* const checkFiftyNum = (num1,num2) => {
    return num1===50 || num2===50 || num1+num2===50
}

console.log(checkFiftyNum(1,49)); */

//2) Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

/* const removeChar = (string,charPosition) => {
    return string.slice(0,charPosition) + string.slice(charPosition+1);
}

console.log(removeChar("ciao",3)); */

//3) Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

/* const checkNumber = (num1, num2) => {
    return ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100));
}

console.log(checkNumber(30,100)); */

// 4) Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

/* const strStartWithLosNews = (string) =>{
    if (string.startsWith("Los") || string.startsWith("New")){
        return string
    } else {
        return false
    }
}

console.log(strStartWithLosNews("New York")); */

//5) Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L’array deve essere passato come parametro.

/* const arraySum = (array) =>{
    let sumelement = 0;
    array.forEach(element => {
        sumelement += element;
    });
    return sumelement;
}

console.log(arraySum([1,2,3,4,5])); */

// 6) Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

/* const checkArrayContent = (array) => {
    let containOne;
    let containThree;
    array.forEach(element => {
        containOne = element.includes(1);
        containThree = element.includes(3);
        if (containOne || containThree){
            return false;
        };
    });
}

console.log(checkArrayContent([1,2,3,4,5])); */

// 7) Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

/* const findAngle = (deg) => {
    if (deg < 90){
        return "acuto"
    } else if (deg > 90 && deg < 180){
        return "ottuso"
    } else if (deg === 90){
        return "retto"
    } else if (deg === 180){
        return "piatto"
    }
}

console.log(findAngle(180)); */

//8) Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

/* const strAcronym = (string) => {
    let words = string.split(" ");
    let acronym = "";

    words.forEach(word => {
        acronym += word.at(0).toUpperCase();
    });

    return acronym;
}

console.log(strAcronym("Fabbrica Italiana Automobili Torino")); */

//ESERCIZI EXTRA

//1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

/* const charFrequent = (str) => {
    let charFrequence = {};

    for (let charStr of str) {
        if (charFrequence[charStr]) {
            charFrequence[charStr]++;
        } else {
            charFrequence[charStr] = 1;
        }
    }
    
    let charMax = "";
    let maxCount = 0;
    
    for (let char in charFrequence) {
        if (charFrequence[char] > maxCount) {
            maxCount = charFrequence[char];
            charMax = char;
        }
    }
    return charMax;
}

console.log(charFrequent("PIPPO")); */

//2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.

/* const strsCheckAnagrams = (str1, str2) => {
    return str1.split("").sort().join() === str2.split("").sort().join();
}

console.log(strsCheckAnagrams("ciao","ciao")); */