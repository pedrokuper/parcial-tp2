import NumeroService from "../services/NumeroService.js";

export default class NumeroController {
  constructor() {
    this.numerosService = new NumeroService();
  }

  obtenerNumeros = async (req, res) => {
    try {
      const numeros = await this.numerosService.obtenerNumeros();
      res.json(numeros);
    } catch (error) {
      console.error(error);
    }
  };

  ingresarNumeros = async (req, res) => {
    const { numero } = req.body;
    try {
      await this.numerosService.ingresarNumero(numero);
      res.send("Numero Agregado");
    } catch (error) {
      console.error(error);
    }
  };

  obtenerPromedio = async (req, res) => {
    try {
      const promedio = await this.numerosService.obtenerPromedio();
      res.json({ promedio });
    } catch (error) {
      console.error(error);
    }
  };

  obtenerMinMax = async (req, res) => {
    try {
      const minMax = await this.numerosService.obtenerMinMax();
      res.json(minMax);
    } catch (error) {
      console.error(error);
    }
  };

  obtenerCantidad = async (req, res) => {
    try {
      const cantidad = await this.numerosService.obtenerCantidad();
      res.json(cantidad);
    } catch (error) {
      console.error(error);
    }
  };
}
