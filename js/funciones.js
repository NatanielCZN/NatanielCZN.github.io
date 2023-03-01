const hobbieLenguaje = 'lenguaje-hobbie';
const idTextoLenguaje = 'texto-lenguaje';
const textoLenguaje = 'Siempre estoy buscando material nuevo de lenguajes de programacion, que se relacionan con lo que me encuentro estudiando o que me gustaria profundisar mas. Algunos ejemplos:';
const idLenguaje = 'imagen-lenguaje';
const idOcultarLenguaje = 'oculto-lenguaje';

const hobbieDeporte = 'deporte-hobbie';
const idTextoDeporte = 'texto-deporte';
const textoDeporte = 'El deporte es algo que me apaciona y siempre me motiva a dar mas de mi.';
const idDeporte = 'imagen-deporte';
const idOcultarDeporte = 'oculto-deporte';

const claseImagen = 'imagen';

/**
 * Evento que despliega el contenido del Hobbie Lenguaje
 */
document.getElementById(hobbieLenguaje).addEventListener('click', function () {
    document.getElementById(idTextoLenguaje).innerHTML = textoLenguaje;

    mostrar(idLenguaje, claseImagen);
});

/**
 * Evento que oculta el contenido del Hobbie Lenguaje
 */
document.getElementById(idOcultarLenguaje).addEventListener('click', function () {
    ocultar(idLenguaje);
});

/**
 * Evento que despliega el contenido del Hobbie Deporte
 */
document.getElementById(hobbieDeporte).addEventListener('click', function () {
    document.getElementById(idTextoDeporte).innerHTML = textoDeporte;

    mostrar(idDeporte, claseImagen);
});

/**
 * Evento que oculta el contenido del Hobbie Deporte
 */
document.getElementById(idOcultarDeporte).addEventListener('click', function () {
    ocultar(idDeporte);
});

/**
 * Funcion que muestra el contenido de un bloque de datos
 * 
 * @param {*} nombreId 
 * @param {*} nombreClase 
 */
function mostrar(nombreId, nombreClase) {
    let documento = document.getElementById(nombreId);

    documento.style.display = 'flex'

    documento.className += " row"

    let elemento = document.getElementsByClassName(nombreClase);

    for (let i = 0; i < elemento.length; i++) {
        elemento[i].className += " mx-auto";
    }
};

/**
 * Funcion que oculta el contenido de un bloque de datos
 * 
 * @param {*} nombreId 
 */
function ocultar(nombreId) {
    document.getElementById(nombreId).style.display = 'none';
}