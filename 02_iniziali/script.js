/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function mapInitial(array){
    const initials = []
    for (let index = 0; index < array.length; index++) {
        const thisElement = array[index];
        initials.push(thisElement[0])
    }
    



    return initials
} 

// Invoca la funzione qui e stampa il risultato in console

const initials = mapInitial(names)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(initials)