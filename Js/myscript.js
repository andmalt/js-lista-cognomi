// Creaiamo un array di cognomi

let cognomiArray = ["Bianchi","Neri","Rossi","Verdi","Gialli"];

// chiediamo all'utente il suo cognome

let cognome = (prompt("Inserisci il tuo cognome").toUpperCase());


// inseriamo il cognome nell'array 

cognomiArray.push(cognome);


// ordiniamo l'array alfabeticamente

cognomiArray.sort();


// inseriamo gli array in ordine numerico partendo da 1


for ( let i = 1; i <= cognomiArray.length; i++){
    console.log(i+" "+cognomiArray[i-1]); 
}

//  indichiamo in quale posizione è stato inserito il nostro cognome

console.log(cognomiArray.indexOf(cognome)+1);






