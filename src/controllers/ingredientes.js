import { request, response } from "express";
import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";
const Ingrediente = db.collection("ingredientes");

// el objeto user es del request es del jwt strategy
// que saca los datos que vienen del token

export class IngredientesCrll {
  static async create(req, res) {}

  // 1
  static async getStockless40(req, res) {
    const ingredientesFound = await Ingrediente.find({
      stock: { $lt: 400 },
    }).toArray();
    resOk(res, { ingredientes_menos_40_stock: ingredientesFound });
  }

  static async update(req, res) {
    resOk(res, { msg: "funciona 2" });
  }

  static async delete(req, res) {
    resOk(res, { msg: "funciona" });
  }
}
