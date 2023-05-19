import NumerosMem from "../models/DAOS.js";

export default class NumberService {
  constructor() {
    this.numerosMem = new NumerosMem();
  }

  obtenerNumeros = async () => {
    return { numeros: await this.numerosMem.obtenerNumeros() };
  };

  ingresarNumero = async (numero) => {
    await this.numerosMem.ingresarNumero(numero);
  };

  obtenerPromedio = async () => {
    const { numeros } = await this.obtenerNumeros();

    const suma = numeros.reduce((total, numero) => total + numero, 0);
    const promedio = suma / numeros.length;
    return promedio;
  };

  obtenerMinMax = async () => {
    const { numeros } = await this.obtenerNumeros();
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);

    return { min, max };
  };

  obtenerCantidad = async (req, res) => {
    const { numeros } = await this.obtenerNumeros();

    return { cantidad: numeros.length };
  };
}
