// const emails = ["olga@email.com", "muaro@email.com", "marco@email.com"]
// console.log(emails);

// userEmail = prompt("Inserisci la tua email")
// console.log(userEmail);

// let isFound = false;

// for (let i = 0; i < emails.length; i++) {
//     const thisEmail = emails[i];

//     if (thisEmail === userEmail) {
//         isFound = true;
//     }     
// }

// if (isFound) {
//     alert("Email corretta!")
// } else {
//     alert("Email errata.")
// }













// Chiedere all'utente di inserire un numero tra 1 e 6
const userNumber = parseInt (prompt("inserisci un numero tra 1 e 6"));
console.log(userNumber);
// Far generare al computer un numero casuale tra 1 e 6
const computerNumber = parseInt (Math.random() * 6) + 1;
console.log(computerNumber);
// SE il numero dell'utente è maggiore del numero del computer
let result = "";
if (userNumber === computerNumber){
    result = "Pareggio!";
} else if (userNumber > computerNumber){
    result = "Hai vinto!";
} else if (userNumber < computerNumber){
    result = "Hai perso ):"
}
    
console.log(result);
    // scrivi hai vinto!
// ALTRIMENTI SE il numero generato dall'utente è inferiore 
    // scrivi hai perso!