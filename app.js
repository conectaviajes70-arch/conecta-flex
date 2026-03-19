// MAPA
const map = L.map('map').setView([19.4326, -99.1332], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);


// DATA DEMO (luego lo conectamos a Google Sheets)
const viajes = [
  {
    tarifa: 118,
    origen: "Lomas de Tecamachalco",
    destino: "Insurgentes Sur",
    distancia: "3.2 km"
  },
  {
    tarifa: 95,
    origen: "San Joaquín",
    destino: "Francisco Villa",
    distancia: "4.3 km"
  },
  {
    tarifa: 53,
    origen: "Polanco",
    destino: "Miyana",
    distancia: "2.1 km"
  }
];


// RENDER
const contenedor = document.getElementById("viajes");

function render() {
  contenedor.innerHTML = "";

  viajes.forEach(v => {
    contenedor.innerHTML += `
      <div class="card">

        <div class="row">
          <div class="tarifa">MXN ${v.tarifa}</div>
          <div class="distancia">${v.distancia}</div>
        </div>

        <div class="direccion">${v.origen}</div>
        <div class="direccion">${v.destino}</div>

        <div class="btns">
          <button class="btn aceptar" onclick="aceptar(${v.tarifa})">
            Aceptar
          </button>
          <button class="btn ofertar" onclick="ofertar(${v.tarifa})">
            Ofertar
          </button>
        </div>

      </div>
    `;
  });
}

render();


// FUNCIONES
function aceptar(precio) {
  alert("Viaje aceptado por MXN " + precio);
}

function ofertar(precio) {
  let nueva = prompt("Tu oferta:");
  if(nueva){
    alert("Ofertaste MXN " + nueva);
  }
}
