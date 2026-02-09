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
} if (reversed_word == random_word){
    console.log('è un palindromo')
} else {
    console.log('non è un palindromo')
}

/* console.log(reversed_word) */
return reversed_word
}

const reversed_word = getReversedWord(random_word)
/* console.log(getReversedWord('')) */
console.log(reversed_word)


