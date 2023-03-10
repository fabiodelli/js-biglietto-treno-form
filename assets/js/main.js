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

/*  Seleziono il pulsante e dichiaro la funzione che verra invocata al click.

    Chiedo all'utente nome KM da percorrere e l'età e li salvo in una variabile.

    Creo valori random da mostrare in seguito e li salvo in una variabile.

    Calcolo il prezzo base del biglietto:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)

    Applico sconto in base a fascia d'eta e formatto il prezzo:
    - va applicato uno sconto del 20% per i minorenni.
    - va applicato uno sconto del 40% per gli over 65.
    - formatto il prezzo con massimo due decimali, per indicare centesimi sul prezzo.

    inserisco i valori ricavati e processati nei rispettivi elementi del DOM.
    
*/



//Strumenti

// variables
// Number
// prompt
// console.log
// conditions
// toFixed
// getElementById
// function
// math.floor
// math.random


//Codice


// Seleziono il pulsante e dichiaro la funzione che verra invocata al click.

document.getElementById("button").addEventListener("click", output);

function output() {

// Chiedo all'utente nome KM da percorrere e l'età e li salvo in una variabile.

const nes =document.getElementById("nes").value;
console.log(nes)

const km = document.getElementById("km").value;
console.log(km)

const age = document.getElementById("age").value;
console.log(age)

// Creo valori random da mostrare in seguito e li salvo in una variabile.

const Wagon = Math.floor(Math.random() * 9)

const code = Math.floor(Math.random() * 10000)

// Calcolo valore base biglietto

let ticketPrice = km * 0.21;
console.log(ticketPrice)

// Applico sconto in base a fascia d'eta e formatto il valore.

if (age == "minorenne") {
    ticketPrice = ticketPrice * 0.8;  
} else if (age == "Over 65") {
    ticketPrice = ticketPrice * 0.6;  
}
console.log(ticketPrice)

const priceFormatted = ticketPrice.toFixed(2);

// inserisco i valori ricavati e processati nei rispettivi elementi del DOM

document.getElementById("nesOut").innerHTML = `${nes}`
console.log(nes)

document.getElementById("offer").innerHTML = `${age}`
console.log(age)

document.getElementById("carrozza").innerHTML = `${Wagon}`
console.log(carrozza)

document.getElementById("codiceCp").innerHTML = `${code}`
console.log(code)

document.getElementById("ticketPrice").innerHTML = `€ ${priceFormatted}`
console.log(priceFormatted)
    
};







