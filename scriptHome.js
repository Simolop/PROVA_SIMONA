// JavaScript source code

function MessaggioBenvenuto() {
    let storage = window["localStorage"];
    let nomeUtente = storage.getItem("Utente");
    if (nomeUtente == null) {
        alert("Benvenuto nuovo utente!")
    } else {
        alert("Benvenuto" + ' ' + nomeUtente);
    }
}