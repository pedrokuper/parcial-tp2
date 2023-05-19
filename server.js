import express from "express";
import NumerosRoute from "./routes/numerosRoute.js";

const app = express();
const port = 3000;
app.use(express.json());

const NumbersRouteInstance = new NumerosRoute();
app.use("/api/numeros", NumbersRouteInstance.start());

const server = app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`);
});

server.on("error", (error) => console.log("Servidor express en error:", error));
