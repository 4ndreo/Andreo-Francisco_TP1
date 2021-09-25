const d = document;
const b = d.body
const m = d.getElementById('main');
const API_KEY = "bab79d526b33f5cb30e5b30322a46298";
const menu = d.getElementById('menu-contenedor');
let ultValor;

let noJs = d.getElementById('noJs');
noJs.remove();


let sectionBusqueda = d.getElementById('sectionBusqueda');


function CrearHomeInicial() {
    let divBusqueda = d.createElement('div');
    divBusqueda.className = ('buscador-input');
    
    let tituloBusqueda = d.createElement('label');
    tituloBusqueda.id = ('busquedaTitle');
    tituloBusqueda.for = ('busqueda');
    tituloBusqueda.innerHTML = ('Buscá cualquier ciudad para conocer sus datos geográficos');

    this.getTituloBusqueda = () => {
        return tituloBusqueda;
    }
    
    let inputBusqueda = d.createElement('input');
    inputBusqueda.id = ('busqueda');
    inputBusqueda.name = ('busqueda');
    inputBusqueda.type = ('text');
    inputBusqueda.autocomplete = ('off');
    inputBusqueda.placeholder = ('Ingresá aquí una ciudad.');

    this.getInputBusqueda = () => {
        return inputBusqueda;
    }
    
    let botonBusqueda = d.createElement('a');
    botonBusqueda.href = ('#');
    botonBusqueda.id = ('btn-enviar');
    botonBusqueda.innerHTML = ('Buscar');
    
    this.getBotonBusqueda = () => {
        return botonBusqueda;
    }

    sectionBusqueda.appendChild(divBusqueda);
    divBusqueda.appendChild(tituloBusqueda);
    divBusqueda.appendChild(inputBusqueda);
    divBusqueda.appendChild(botonBusqueda);
}


CrearHomeInicial();



function traerDatosClima(palabraBusqueda) {

    fetch (
       `https://api.openweathermap.org/data/2.5/weather?q=${palabraBusqueda}&appid=${API_KEY}&lang=es&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(responseJson){
        if (responseJson.cod == 200) {
            console.log(responseJson);
            ultValor = responseJson.name;
            console.log(ultValor);
            eliminarHome();
            ponerElementos(responseJson);
            return responseJson;
        } else {
           ponerNotFound();
        }
    }).catch(function (err) {
        console.log("Hubo un fallo en la interacción con la API.", err);
    });

}

getBotonBusqueda().addEventListener("click", () => {
    traerDatosClima(busqueda.value);
});
function crearNotFound () {
    let notFound = d.createElement('p');
    notFound.className = ('not-found');
    notFound.id = ('notFound');
    notFound.innerHTML = (`Lo siento, esta ubicación no existe. Intentá con otra.`);
    this.getNotFound = () => {
        return notFound;
    }
}crearNotFound ();

function ponerNotFound() {
    if (ultValor != undefined) {
        getNotFound().remove();
        getNotFound().className = ('menu-not-found');
        getDivBuscMenu().appendChild(getNotFound());
    } else  {
        m.appendChild(getNotFound());

    }
    
}
function eliminarHome() {
    getTituloBusqueda().remove();
    getBotonBusqueda().remove();
    getInputBusqueda().remove();
    getNotFound().remove();
}
function crearElementos() {
    
    let divBuscMenu = d.createElement('div');
    divBuscMenu.className= ('div-busc-menu');
    divBuscMenu.id= ('divBuscMenu');

    this.getDivBuscMenu = () => {
        return divBuscMenu;
    }
    
    let sectionDatos = d.createElement('section');
    sectionDatos.className = ('section-datos');
    sectionDatos.id = ('sectionDatos');
    
    this.getSectionDatos = () => {
        return sectionDatos;
    }

    let h2 = d.createElement('h2');
    h2.className = ('nombre-lugar');
    h2.id = ('nombreLugar');

    this.getH2 = () => {
        return h2;
    }

    let span = d.createElement('span');
    this.getSpan = () => {
        return span;
    }
}crearElementos();

function ponerElementos(data) {
    
    menu.appendChild(getDivBuscMenu());
    getInputBusqueda().className = ('menu-buscador-input');
    getDivBuscMenu().appendChild(getInputBusqueda());
    getDivBuscMenu().appendChild(getBotonBusqueda());
    
    
    
    
    getH2().innerHTML = (`${getInputBusqueda().value}`);
    m.appendChild(getH2());
    
    m.appendChild(getSectionDatos());

    getSpan().innerHTML = (`Max: ${data.main.temp_max}°`);
    m.appendChild(getSpan());
}