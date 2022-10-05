// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)

const nomepersona = prompt("Come ti chiami ?");
const cognome = prompt("Il tuo cognome ?");
const colorepreferito = prompt("Il tuo colore preferito ?");
const eta = prompt("La tua etá ?");
const persona = nomepersona + cognome + colorepreferito + eta;
const elemento = document.getElementById("persona");
elemento.innerHTML = persona;
