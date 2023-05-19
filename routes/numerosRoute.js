import express from "express";
const router = express.Router();

import NumeroController from "../controllers/NumeroController.js";

export default class NumerosRoute {
  constructor() {
    this.NumeroController = new NumeroController();
  }

  start() {
    router.get("/entrada", this.NumeroController.obtenerNumeros);
    router.post("/entrada", this.NumeroController.ingresarNumeros);
    router.get("/promedio", this.NumeroController.obtenerPromedio);
    router.get("/minmax", this.NumeroController.obtenerMinMax);
    router.get("/cantidad", this.NumeroController.obtenerCantidad);

    return router;
  }
}
