document.addEventListener('DOMContentLoaded',() => {
const materias = [
    {codigo:"0413", nombre:"PROGRAMACION WEB", grupo:"Gpo1", dia:"MARTES", hora:"10:00 - 11:40", aula:"E201"},
    {codigo:"0413", nombre:"PROGRAMACION WEB", grupo:"Gpo1", dia:"JUEVES", hora:"15:00 - 16:40", aula:"E201"},

    {codigo:"0402", nombre:"INTRO. INGENIERIA", grupo:"Gpo3", dia:"LUNES", hora:"08:00 - 09:40", aula:"D104"},
    {codigo:"0402", nombre:"INTRO. INGENIERIA", grupo:"Gpo3", dia:"MIERCOLES", hora:"08:00 - 09:40", aula:"D104"},

    {codigo:"0402", nombre:"INTRO. INGENIERIA", grupo:"Gpo4", dia:"LUNES", hora:"10:00 - 11:40", aula:"E201"},
    {codigo:"0402", nombre:"INTRO. INGENIERIA", grupo:"Gpo4", dia:"JUEVES", hora:"08:00 - 09:40", aula:"E201"},

    {codigo:"0402", nombre:"INTRO. INGENIERIA", grupo:"Gpo7", dia:"LUNES", hora:"15:00 - 16:40", aula:"D104"},
    {codigo:"0402", nombre:"INTRO. INGENIERIA", grupo:"Gpo7", dia:"JUEVES", hora:"13:00 - 14:40", aula:"D104"},

    {codigo:"0402", nombre:"INTRO. INGENIERIA", grupo:"Gpo8", dia:"MARTES", hora:"15:00 - 16:40", aula:"D104"},
    {codigo:"0402", nombre:"INTRO. INGENIERIA", grupo:"Gpo8", dia:"MIERCOLES", hora:"13:00 - 14:40", aula:"D104"}
];

const dias = ["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES"];
const horas = [
    "08:00 - 09:40",
    "09:40 - 10:00",
    "10:00 - 11:40",
    "11:40 - 13:00",
    "13:00 - 14:40",
    "14:40 - 15:00",
    "15:00 - 16:40"
];  

const horasEspeciales = {
    "09:40 - 10:00": {texto:"RECESO", clase:"table-secondary text-center fw-bold"},
    "11:40 - 13:00": {texto:"ALMUERZO", clase:"table-secondary text-center fw-bold"},
    "14:40 - 15:00": {texto:"RECESO", clase:"table-secondary text-center fw-bold"}
};

const coloresGrupo = {
    "Gpo1":"bg-secondary",
    "Gpo3":"bg-info",
    "Gpo4":"bg-success",
    "Gpo7":"bg-danger",
    "Gpo8":"bg-primary"
};

});
