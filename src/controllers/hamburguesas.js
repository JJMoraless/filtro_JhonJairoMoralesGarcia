import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";
const Hamburguesa = db.collection("hamburguesas");

// el objeto user es del request es del jwt strategy
// que saca los datos que vienen del token

export class HamburguesasCrll {
  static async create(req, res) {}

  // 2
  static async getVegetarianas(req, res) {
    const hamburguesas = await Hamburguesa.find({
      "categoria.nombre": "Vegetariana",
    }).toArray();

    resOk(res, { hamburguesas });
  }

  static async getCategorias(req, res) {
    const categoriasFound = await Hamburguesa.aggregate([
      {
        $project: {
          categoria: 1,
        },
      },
    ]).toArray();

    resOk(res, { categorias: categoriasFound });
  }

  static async putIngredienteClasica(req, res) {
    const nuevoIngrediente = await Hamburguesa.updateOne(
      { "categoria.nombre": "clasica" },
      {
        $push: { ingredientes: "papas" },
      }
    );
    resOk(res, { nuevoIngrediente });
  }
}
