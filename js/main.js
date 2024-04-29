// PALINDROMA
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
// Sono accettate solo soluzioni che fanno uso del ciclo.
// Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.


// al click
let myBtn = document.getElementById(`scopri`)
myBtn.addEventListener(`click`, function(){
    // salvo valore input
    let parolaUtente = document.getElementById(`parola`).value
    // varibile che prenderà come valore l'output della funzione
    let risultato = parolaPalindroma(parolaUtente)
    // stampo risultato
    document.getElementById(`result`).innerHTML = `La parola ${risultato}`
})

// PARI E DISPARI
// L’utente sceglie su cosa puntare: pari o dispari.
// L'utente inserisce un numero da 1 a 5.
// Il computer estrae un numero casuale sempre tra 1 e 5 // (usando una funzione).
// Stabiliamo se la somma dei due numeri è pari o dispari // (usando una funzione).
// Dichiariamo chi ha vinto.



// chiedo su cosa punta l'utente
let puntata = prompt(`Punti su Pari o su Dispari?`)
// chiedo un numero da 1 a 5
let numeroUtente = parseInt(prompt(`Scegli un numero da 1 a 5`))
console.log(`hai scelto: ${puntata}, con il numero ${numeroUtente}`)
// salvo risultato della funzione numeri random
let numeroPc = getRandomNumber(1,5)
console.log(`Il pc ha estratto il numero: ${numeroPc}`)
// salvo risultato della funzione pari o dispari
let resPariDispari = pariOrDispari(numeroUtente, numeroPc)
console.log(`la somme dei due numeri è: ${resPariDispari}`)
// controllo chi ha vinto se la puntata è uguale al risultato della funzione pari e dispari vince l'utente altrimenti perde
if (puntata == resPariDispari){
    console.log(`Hai vinto`)
} else {
    console.log(`Hai perso`)
}

