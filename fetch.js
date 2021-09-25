const d = document;
const b = d.body
const m = d.getElementById('main');
const API_KEY = "bab79d526b33f5cb30e5b30322a46298";

let noJs = d.getElementById('noJs');
noJs.remove();


let sectionBusqueda = d.getElementById('sectionBusqueda');


function CrearHomeInicial() {
    let divBusqueda = d.createElement('div');
    divBusqueda.className = ('buscador-input');
    
    let tituloBusqueda = d.createElement('label');
    tituloBusqueda.id = ('busquedaTitle');
    tituloBusqueda.for = ('busqueda');
    tituloBusqueda.innerHTML = ('Buscá cualquier ciudad');

    this.getTituloBusqueda = () => {
        return tituloBusqueda;
    }
    
    let inputBusqueda = d.createElement('input');
    inputBusqueda.id = ('busqueda');
    inputBusqueda.name = ('busqueda');
    inputBusqueda.type = ('text');
    inputBusqueda.autocomplete = ('off');
    
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
        console.log(responseJson);
        crearElementos(responseJson);
        return responseJson;
    }).catch(function (err) {
        console.log("Hubo un error!", err);
    });

}

getBotonBusqueda().addEventListener("click", () => {
    traerDatosClima(busqueda.value);
    EliminarHome();
});
function EliminarHome() {
    getTituloBusqueda().remove();
    //botonBusqueda.remove();
    //inputBusqueda.remove();

}
function crearElementos(data) {
    span.innerHTML = (`La máxima es: ${data.main.temp_max}`);
    m.appendChild(span);
}