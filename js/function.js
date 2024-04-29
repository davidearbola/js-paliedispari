// PALINDROMA
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
// Sono accettate solo soluzioni che fanno uso del ciclo.
// Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.

// funzione che controlla se la parola dell'utente è palindroma
function parolaPalindroma(parola) {
    // variabile appoggio per la parola al contrario
    let parolaContrario
    // array per comporre la parola al contrario
    let array = []
    // ciclo per selezionare ogni lettera della parola
    for (let i = parola.length - 1; i >= 0; i--) {
        // pusho ad ogni ciclo una lettera
        array.push(parola.charAt(i))
        // trasformo array in stringa unica
        parolaContrario = array.join("")
    }
    console.log(parolaContrario)
    // controllo se le parole sono uguali
    if (parola == parolaContrario){
        return `E' Palindroma`
    } else {
        return `Non è Palindroma`
    }
}

// PARI E DISPARI
// L’utente sceglie su cosa puntare: pari o dispari.
// L'utente inserisce un numero da 1 a 5.
// Il computer estrae un numero casuale sempre tra 1 e 5 // (usando una funzione).
// Stabiliamo se la somma dei due numeri è pari o dispari // (usando una funzione).
// Dichiariamo chi ha vinto.

// funzione per estrarre un numero casuale da 1 a 5
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione per pari o dispari
function pariOrDispari (numero1, numero2){
    let somma = numero1+numero2
    if (somma % 2 == 0){
        return `Pari`
    } else {
        return `Dispari`
    }
}