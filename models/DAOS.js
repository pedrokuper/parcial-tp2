export default class NumerosMem {
  constructor() {
    this.numeros = [];
  }

  obtenerNumeros = async () => {
    return this.numeros;
  };

  ingresarNumero = async (numero) => {
    this.numeros.push(numero);
  };
}
