class Cliente {
   constructor(nombre, saldo) {
      this.nombre = nombre;
      this.saldo = saldo;
   }

   mostrarInformacion() {
      return `Cliente: ${this.nombre}, tu saldo es de $${this.saldo}`;
   }

   static bienvenida() {
      return `Bienvenido al cajero`;
   }
}

// Herencia de la clase Cliente
class Empresa extends Cliente {
   constructor(nombre, saldo, telefono, categoria) {
      super(nombre, saldo);
      this.telefono = telefono;
      this.categoria = categoria;
   }

   static bienvenida() {
      // reescribir un método
      return `Bienvenido al cajero de empresas`;
   }
}

const juan = new Cliente('Juan', 400);

const empresa = new Empresa('Codigo con juan', 500, 1185415, 'Aprendizaje en Línea');

console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
