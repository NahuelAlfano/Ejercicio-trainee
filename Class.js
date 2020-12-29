// clase padre
class Vehiculos {
    constructor(marca, modelo, precio){
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }

    cargarEnLista(listaVehiculos, vehiculo){
        listaVehiculos.push(vehiculo)
    }

}

// clases hijos

class Autos extends Vehiculos{
    constructor(marca, modelo, puertas, precio){
        super(marca, modelo,precio)
        this.puertas = puertas
    }

    mostrarCaracteristicas(){
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio}`)
    }
}

class Motos extends Vehiculos{
    constructor(marca, modelo, cilindrada, precio){
        super(marca, modelo, precio)
        this.cilindrada = cilindrada
    }
    
    mostrarCaracteristicas(){
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: $${this.precio}`)
    }
}

exports.Autos = Autos
exports.Motos = Motos