const d = document;
const b = d.body
const m = d.getElementById('main');
// const API_KEY = "bab79d526b33f5cb30e5b30322a46298";
const MAPS_API_KEY = "AIzaSyBch-nDzThvc6FKaoelUPl_L7fsGqksZyc";
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
        if (inputBusqueda.value[0]!= null) {
            function capitalize() {
                return inputBusqueda.value[0].toUpperCase() + inputBusqueda.value.slice(1).toLowerCase();
            }

            inputBusqueda.value = capitalize();
        }
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
}CrearHomeInicial();

if (localStorage.getItem('Locacion') != null) {
    busqueda.value = localStorage.getItem('Locacion');

    traerDatosClima(localStorage.getItem('Locacion'));
}



function traerDatosClima(palabraBusqueda) {
    
    fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${palabraBusqueda}&appid=${process.env.API_KEY}&lang=es&units=metric`
        ).then(function(response){
        return response.json();
    }).then(function(responseJson){
        if (responseJson.cod == 200) {
            ultValor = responseJson.name;
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
getInputBusqueda().addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        traerDatosClima(busqueda.value);
        localStorage.setItem("Locacion",getInputBusqueda().value)
    }
  });

    getBotonBusqueda().addEventListener("click", () => {
        traerDatosClima(busqueda.value);
        localStorage.setItem("Locacion",getInputBusqueda().value)
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
function crearMapa() {
    let iframeMap = d.createElement('iframe');
    iframeMap.id = ('mapaIframe');
    iframeMap.className = ('mapa');

    this.getMapaIframe = () => {
        return iframeMap;
    }
}crearMapa();

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

    let divMapa = d.createElement('div');
    divMapa.className = ('mapa');

    this.getDivMapa = () => {
        return divMapa;
    }

    let divInfoCiudad = d.createElement('div');
    divInfoCiudad.className = ('info-ciudad');

    this.getDivInfoCiudad = () => {
        return divInfoCiudad;
    }

    let h2 = d.createElement('h2');
    h2.className = ('nombre-lugar');
    h2.id = ('nombreLugar');

    this.getH2 = () => {
        return h2;
    }

    let divTempIcon = d.createElement('div');
    divTempIcon.className = ('temp-icon');

    this.getDivTempIcon = () => {
        return divTempIcon;
    }

    let spanIcon = d.createElement('span');
    spanIcon.className = ('temperatura icon');

    this.getSpanIcon = () => {
        return spanIcon;
    }

    let spanTemp = d.createElement('span');
    spanTemp.className = ('temperatura');
    spanTemp.id = ('temperatura');

    this.getSpanTemperatura = () => {
        return spanTemp;
    }

    let pClimaDesc = d.createElement('p');
    pClimaDesc.className = ('clima-desc');

    this.getClimaDesc = () => {
        return pClimaDesc;
    }

    let divInfoClima = d.createElement('div');
    divInfoClima.className = ('info-clima');

    this.getDivInfoClima = () => {
        return divInfoClima;
    }

    let ulMasInfoClima = d.createElement('ul');
    ulMasInfoClima.className = ('mas-info-clima');

    this.getUlMasInfoClima = () => {
        return ulMasInfoClima;
    }

    let liMax = d.createElement('li');
    liMax.className = ('max-min');

    this.getLiMax = () => {
        return liMax;
    }
    let spanMaxTitulo = d.createElement('span');
    spanMaxTitulo.className = ('negrita');

    this.getSpanMaxTitulo = () => {
        return spanMaxTitulo;
    }
    let spanMax = d.createElement('span');

    this.getSpanMax = () => {
        return spanMax;
    }
    let liMin = d.createElement('li');
    liMin.className = ('max-min');

    this.getLiMin = () => {
        return liMin;
    }
    let spanMinTitulo = d.createElement('span');
    spanMinTitulo.className = ('negrita');

    this.getSpanMinTitulo = () => {
        return spanMinTitulo;
    }
    let spanMin = d.createElement('span');

    this.getSpanMin = () => {
        return spanMin;
    }

    let liTermica = d.createElement('li');
    liTermica.className = ('termica');

    this.getLiTermica = () => {
        return liTermica;
    }

    let liHumedad = d.createElement('li');
    liHumedad.className = ('humedad');

    this.getLiHumedad = () => {
        return liHumedad;
    }

    let liPresionAtm = d.createElement('li');
    liPresionAtm.className = ('presion-atm');

    this.getLiPresionAtm = () => {
        return liPresionAtm;
    }

    let liVelViento = d.createElement('li');
    liVelViento.className = ('vel-viento');

    this.getLiVelViento = () => {
        return liVelViento;
    }
}crearElementos();

function ponerElementos(data) {
    
    menu.appendChild(getDivBuscMenu());
    getInputBusqueda().className = ('menu-buscador-input');
    getDivBuscMenu().appendChild(getInputBusqueda());
    getDivBuscMenu().appendChild(getBotonBusqueda());
    
    
    
    m.appendChild(getSectionDatos());
    getMapaIframe().src = (`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${getInputBusqueda().value}`);
    getSectionDatos().appendChild(getMapaIframe());
    getSectionDatos().appendChild(getDivInfoCiudad());
    getDivInfoCiudad().appendChild(getH2());
    getH2().innerHTML = (`${getInputBusqueda().value}, ${data.sys.country}`);
    getDivInfoCiudad().appendChild(getDivTempIcon());
    getDivTempIcon().appendChild(getSpanIcon());
    getSpanIcon().className = (`temperatura icon ${getIconoClima(data.weather[0].id,data.weather[0].icon)}`);
    if(data.weather[0].icon > 200) {

    }
    getDivTempIcon().appendChild(getSpanTemperatura());
    getSpanTemperatura().innerHTML = (`${data.main.temp}°`);
    getClimaDesc().innerHTML = (data.weather[0].description);
    console.log(getClimaDesc());
    getClimaDesc().innerHTML = (capitalize(getClimaDesc()));
    getDivInfoCiudad().appendChild(getClimaDesc());
    getDivInfoCiudad().appendChild(getDivInfoClima());
    getDivInfoClima().appendChild(getUlMasInfoClima());
    getUlMasInfoClima().appendChild(getLiMax());
    getLiMax().appendChild(getSpanMaxTitulo());
    getSpanMaxTitulo().innerHTML = ('Max: ');
    getLiMax().appendChild(getSpanMax());
    getSpanMax().innerHTML = (`${data.main.temp_max}°`);
    getUlMasInfoClima().appendChild(getLiMin());
    getLiMin().appendChild(getSpanMinTitulo());
    getSpanMinTitulo().innerHTML = ('Min: ');
    getLiMin().appendChild(getSpanMin());
    getSpanMin().innerHTML = (`${data.main.temp_min}°`);
    getUlMasInfoClima().appendChild(getLiTermica());
    getLiTermica().innerHTML = (`<span class="negrita">Sensación térmica: </span>${data.main.feels_like}°`);
    getUlMasInfoClima().appendChild(getLiHumedad());
    getLiHumedad().innerHTML = (`<span class="negrita">Humedad: </span>${data.main.humidity}%`);
    getUlMasInfoClima().appendChild(getLiPresionAtm());
    getLiPresionAtm().innerHTML = (`<span class="negrita">Presión atmosférica: </span>${data.main.pressure} hPa`);
    getUlMasInfoClima().appendChild(getLiVelViento());
    getLiVelViento().innerHTML = (`<span class="negrita">Velocidad del viento: </span>${data.wind.speed}km/h`);
    

    // getSectionDatos().appendChild(getH2());
    

    // getSpan().innerHTML = (`Max: ${data.main.temp_max}°`);
    // getSectionDatos().appendChild(getSpan());
}

function getIconoClima(codigoClima, iconoAPI) {
    let climaIcono;

    if (codigoClima>=200 && codigoClima<600) {
        climaIcono = 'lluvia-icon';
        if (codigoClima>=500 && codigoClima<505) {
            climaIcono = 'dia-lluvia-icon';
        } else if (codigoClima>=520 && codigoClima<532) {
            climaIcono = 'noche-lluvia-icon';
        }
    } else if (codigoClima>=600 && codigoClima<700) {
        climaIcono = 'nieve-icon';
    } else if (codigoClima>=700 && codigoClima<800) {
        climaIcono = 'neblina-icon';
    }else if (codigoClima == 800 && iconoAPI == '01d') {
        climaIcono = 'dia-desp-icon';
    } else if (codigoClima == 800 && iconoAPI == '01n') {
        climaIcono = 'noche-desp-icon';
    } else if (codigoClima == 801 && iconoAPI == '02d') {
        climaIcono = 'dia-nublado-icon';
    } else if (codigoClima == 801 && iconoAPI == '02n') {
        climaIcono = 'noche-nublado-icon';
    } else if (codigoClima > 801) {
        climaIcono = 'nublado-icon';
    }
console.log(codigoClima);
console.log(iconoAPI);
console.log(climaIcono);
    return climaIcono;
}


function capitalize(textoCap) {
    console.log(textoCap.innerHTML)
    return textoCap.innerHTML[0].toUpperCase() + textoCap.innerHTML.slice(1).toLowerCase();
}