/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function countVowels(str){
    const count = 0
    const vowels = ["a", "e", "i","o","u"]
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
    if (vowels.includes(thisChar)) {
        count++
        foundVolwes.push(thisChar)
    }
    }
    return count
}
// Invoca la funzione qui e stampa il risultato in console
const vowelsCount = countVowels()


//Risultato atteso se si passa 'javascript': 3 (a, a, i)ù
console.log(vowelsCount)