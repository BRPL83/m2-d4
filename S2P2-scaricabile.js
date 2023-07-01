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
  isAmbassador: true, //deve venire scontato del 30% perché è True
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false, //il carrello non deve venire sconato ovvero non gode del 30% di sconto
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false, //il carrello non deve venire scontato ovvero non gode del 30% di sconto
}

const prices = [34, 5, 2]
const shippingCost = 50 //il prezzo della spedizione è contemplata per tutti gli utenti (Ambassador o meno) solo se si supera il valore 100
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

// Determina se l'utente è un Ambassador
function isAmbassador(user) {
  return user.isAmbassador;
}

// Calcola il costo totale del carrello
function calculateTotalCost(prices, user, shippingCost) {
  let totalCost = 0;

  if (isAmbassador(user)) {
    // Sconto del 30% per gli Ambassador
    for (let i = 0; i < prices.length; i++) {
      totalCost += prices[i] * 0.7;
    }
  } else {
    // Nessuno sconto per gli utenti non Ambassador
    for (let i = 0; i < prices.length; i++) {
      totalCost += prices[i];
    }
  }

  // Aggiungi il costo della spedizione solo se necessario
  if (totalCost < 100) {
    totalCost += shippingCost;
  }

  return totalCost;
}

// Array di utenti
const users = [];
users.push(marco);
users.push(paul);
users.push(amy);

// Stampa se ogni utente è un Ambassador o meno
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  let ambassadorStatus = "";
  if (isAmbassador(user)) {
    ambassadorStatus = "è un Ambassador.";
  } else {
    ambassadorStatus = "non è un Ambassador.";
  }
  console.log(user.name + " " + user.lastName + " " + ambassadorStatus);
}

// Calcola il costo totale del carrello per l'utente specificato
const totalCost = calculateTotalCost(prices, utenteCheEffettuaLAcquisto, shippingCost);
console.log("Il costo totale del carrello per " + utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + " è: " + totalCost);
