/* console.log('test') */

/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo? */

//promt ask word
//controlla il tipo di parola

let random_word = prompt('inserisci una parola')

function getReversedWord(word){
    let reversed_word = ''
for(let i=word.length - 1 ; i>=0; i--){
    const type = word[i]
        reversed_word += type
} 
if  (reversed_word == random_word){
    console.log('è un palindromo')
} 
else {
    console.log('non è un palindromo')
}

/* console.log(reversed_word) */
return reversed_word
}

const reversed_word = getReversedWord(random_word)
/* console.log(getReversedWord('')) */
console.log(reversed_word)

// odd even pc player

let pari_dispari = prompt('scegli pari o dispari')
let player = Number(prompt('scegli un numero da 1 a 5'))
let computer = Math.floor(Math.random() *5) + 1;
console.log(player,computer)

function sum(player, computer){
return player + computer
}
    const total = sum(player,computer);
    console.log(total)
let risultato;

if (total%2==0){
    risultato = 'pari';
    console.log( 'il risultato è pari')
}  
else{
    risultato = 'dispari'
    console.log('il risultato è dispari')
}
if ( pari_dispari == risultato){
    console.log('hai vinto')
}
else{
    console.log('hai perso')
}






/* 

example
function sum (x,y) {
    const result = x + y;
    return result
}
const numX = 22;
const numY = 10;

const total = sum (numX,numY);
console.log(total) */
