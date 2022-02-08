
function changeHome() {
    document.getElementById("navHome").classList.toggle("backcolor");
}

let vorname = document.getElementById("vorname");
let nachname = document.getElementById("nachname");
let land = document.getElementById("land");

function getFormValues() {
    console.log("Vorname: " + vorname.value);
    console.log("Nachname: " + nachname.value);
    console.log("Land: " + land.value);
}

function small() {
    document.getElementById("element").classList.remove("middle");
    document.getElementById("element").classList.remove("big");
    document.getElementById("element").classList.add("small");
}

function middle() {
    document.getElementById("element").classList.remove("small");
    document.getElementById("element").classList.remove("big");
    document.getElementById("element").classList.add("middle");
}

function big() {
    document.getElementById("element").classList.remove("small");
    document.getElementById("element").classList.remove("middle");
    document.getElementById("element").classList.add("big");
}