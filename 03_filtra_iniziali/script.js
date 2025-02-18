/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterNames(array, char){
    const filteredArr= []
    for (let index = 0; index < array.length; index++) {
        const initial = thisName.charAt(0).tolowerCase();
        if(initial ===char.tolowerCase()){
            filteredArr.push(thisName)
        }

        
    }
    return filteredArr
}

// Invoca la funzione qui e stampa il risultato in console
const filteredArr= filterNames 


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(filterNames)