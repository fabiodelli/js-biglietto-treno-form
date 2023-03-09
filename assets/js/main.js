//Traccia

/*  
scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrereEtà del passeggero 
Sulla base di queste informazioni dovrà calcolare 

il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:

Iniziamo implementando il programma senza alcuna estetica ma usando
esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra.

La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora
realizzeremo un form in pagina in cui l’utente potrà inserire i dati
e visualizzare il calcolo finale con il prezzo.

Il riepilogo dei dati inseriti e l'output del prezzo finale,
andranno quindi stampati in pagina (il prezzo dovrà essere formattato
con massimo due decimali, per indicare i centesimi sul prezzo).
*/


//Procedimento

/* Chiedo all'utente il numero di chilometri e l'età

    Calcolo il prezzo base del biglietto:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)

    Applico lo sconto in base all'età:
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.

    inserisco l'output del prezzo finale nel DOM in forma umana:
    - con massimo due decimali, per indicare centesimi sul prezzo.
*/



//Strumenti

// function
// variables
// Number
// prompt
// console.log
// conditions
// toFixed
// getElementById


//Codice

// Chiedo all'utente il numero di chilometri e l'età




function result() {

const nes = document.getElementById("name").value;
console.nes()

const km = document.getElementById("km").value;
console.log(km)

const age = document.getElementById("age").value;
console.log(age)

let ticketPrice = km * 0.21;
console.log(ticketPrice)


if (age < 18) {
    ticketPrice = ticketPrice * 0.8;  
} else if (age >= 65) {
    ticketPrice = ticketPrice * 0.6;  
}
console.log(ticketPrice)

// inserisco l'output del prezzo finale nel DOM in forma umana
const priceFormatted = ticketPrice.toFixed(2);

document.getElementById("ticket_price").innerHTML = `${priceFormatted}`
console.log(priceFormatted)

}



document.getElementsByClassName("btn-outline-success")