// JavaScript source code

function Change() {
    let inputs = document.querySelectorAll(".input");
    
    let button = document.querySelector(".button");

    button.disabled = ""; 
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            button.disabled = "disabled";
            break; 
        }
    }
}

function Subscribe() {
    let storageType = "localStorage";
    let storageUtente = (storageType in window && window[storageType] != null) ? window[storageType] : null;

    let utente = document.getElementById("utente").value;

    storageUtente.setItem('Utente', utente);
}

function Unsubscribe() {
    localStorage.removeItem('Utente');
    alert("Iscrizione annullata correttamente!");
}

function IscrizioneCompletata() {
    alert("Iscrizione completata correttamente!");
}