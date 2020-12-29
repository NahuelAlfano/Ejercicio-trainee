// importando las clases a usar

const Autos = require('./Class.js')
const Motos = require('./Class.js')

// Funciones

function comparacionDePrecios(listaVehiculos){

    // INICIO VARIABLES PARA LAS COMPARACIONES
    
    let vehiculoMasCaro;
    let vehiculoMasBarato;
    let mayorPrecio = 0;
    let menorPrecio = 0;

    for(let i = 0; i < listaVehiculos.length; i++){

        // RECORRO EL ARRAY, CHEQUEANDO QUE EXISTA "PRECIO"
        //  TRANSFORMO A UN FLOAT LA PROPIEDAD PRECIO REEMPLAZANDO LOS . Y LAS , DEL STRING
        // VOY ASIGNANDO EL VALOR MAS ALTO Y LO SIGO COPARANDO CON EL RESTO DEL ARRAY
        // ASIGNO EL OBJETO VEHICULO CON MAYOR PRECIO A OTRA VARIABLE 

        let precioParsed = parseFloat(listaVehiculos[i]['precio'].replace(/\./g,'').replace(',', '.'))

        if (listaVehiculos[i].hasOwnProperty('precio') && precioParsed > mayorPrecio){
            mayorPrecio = precioParsed
            vehiculoMasCaro = listaVehiculos[i]
        }

        else if(precioParsed < menorPrecio || menorPrecio === 0){
            menorPrecio = precioParsed
            vehiculoMasBarato = listaVehiculos[i]
        }
    }

    console.log(`Vehiculo mas caro: ${vehiculoMasCaro['marca']} ${vehiculoMasCaro['modelo']}
Vehiculo mas barato: ${vehiculoMasBarato['marca']} ${vehiculoMasBarato['modelo']}`)
}

function contieneLetra(listaVehiculos, letra){

    let matchVehiculo;

    // RECORRO EL ARRAY Y BUSCANDO EN TODAS LAS MARCAS SI INCLUYEN LA LETRA Y

    for (let i = 0; i < listaVehiculos.length; i++){
        if(listaVehiculos[i]['marca'].toLowerCase().includes(letra)){
            matchVehiculo = listaVehiculos[i]
        }
    }

    console.log(`Vehículo que contiene en el modelo la letra '${letra}': ${matchVehiculo['marca']} ${matchVehiculo['modelo']} ${matchVehiculo['precio']}`)
}

function ordenarDeMayorAMenor(listaVehiculos){


    // CREO LA LISTA PARA ORDENAR

    let listaOrdenada = []

    // NUEVAMENTE PARSEO LOS PRECIOS PARA PODER ORDENARLOS CON EL METODO SORT

    listaOrdenada = listaVehiculos.sort((a, b) => parseFloat(b['precio'].replace(/\./g,'').replace(',', '.')) - parseFloat(a['precio'].replace(/\./g,'').replace(',', '.')))

    // LOS MUESTRO POR PANTALLA
    
    console.log('Vehiculos ordenados por precio de mayor a menor:')
    for(let i = 0; i < listaOrdenada.length; i++){
        console.log(`${listaOrdenada[i]['marca']} ${listaOrdenada[i]['modelo']}`)
    }

}

// creando los objetos

let vehiculo1 = new Autos.Autos('Peugeot', '206', '4', '200.000,00');
let vehiculo2 = new Motos.Motos('Honda', 'Titan', '125cc', '60.000,00');
let vehiculo3 = new Autos.Autos('Peugeot', '208', '5', '250.000,00');
let vehiculo4 = new Autos.Motos('Yamaha', 'YBR', '160cc', '80.500,50');

// Agregandolos a un array para manejarlos mas facilmente

const listaVehiculos = []

vehiculo1.cargarEnLista(listaVehiculos, vehiculo1)
vehiculo2.cargarEnLista(listaVehiculos, vehiculo2)
vehiculo3.cargarEnLista(listaVehiculos, vehiculo3)
vehiculo4.cargarEnLista(listaVehiculos, vehiculo4)


// funcion main que ejecuta el programa pedido

function main(){
    for (let i = 0; i < listaVehiculos.length; i++){
        listaVehiculos[i].mostrarCaracteristicas()
    }
    console.log('=============================')
    comparacionDePrecios(listaVehiculos)
    contieneLetra(listaVehiculos, 'y')
    console.log('=============================')
    ordenarDeMayorAMenor(listaVehiculos)
}

main()


// Nahuel Alfano