// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

let totalPrice = 0;
//calculate total cart prices
for (let i=0;i<prices.length;i++){
  totalPrice += prices[i]
}

//verify is ambassador and eventually change the total price of cart
if (utenteCheEffettuaLAcquisto.isAmbassador){
  totalPrice = (totalPrice*30)/100
}

//calculate if add the shipping cost
if (totalPrice < 100) {
  totalPrice += shippingCost;
  console.log(`Il costo del tuo carrello è: ${totalPrice}`)
} else {
  console.log(`Il costo del tuo carrello è: ${totalPrice}`)
}

const totalUsers = []; //create empty array for my users
totalUsers.push(marco,paul,amy); //push all users on my array
const ambassadorUsers = []; //create array only for ambassador

for (user of totalUsers){
  if (user.isAmbassador) {
    console.log(`${user.name} ${user.lastName} è un ambassador`);
    ambassadorUsers.push(user) //push my ambassador on array
  } else {
    console.log(`${user.name} ${user.lastName} non è un ambassador`)
  }
}

//Print Ambassador
for (ambassador of ambassadorUsers){
  console.log(`Ecco la lista degli Ambassador: ${ambassador.name} ${ambassador.lastName}`)
}
