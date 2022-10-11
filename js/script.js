const emails = ["olga@email.com", "muaro@email.com", "marco@email.com"]
console.log(emails);

userEmail = prompt("Inserisci la tua email")
console.log(userEmail);

let isFound = false;

for (let i = 0; i < emails.length; i++) {
    const thisEmail = emails[i];

    if (thisEmail === userEmail) {
        isFound = true;
    }     
}

if (isFound) {
    alert("Email corretta!")
} else {
    alert("Email errata.")
}