/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greethings = (name) => {

return`ciao ${name}`
}
const now = new Date();
console.log(now)

const thisHour = now.getHours();
console.log(thisHour);

if(thisHour < 13){
    {console.log (`Buongiorno`);
    message = `buongiorno`
}else if (thisHour >= 13)
message= `Buon pomeriggio`
else {



    message = `Buonasera`
}




return `${message} `
}
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.