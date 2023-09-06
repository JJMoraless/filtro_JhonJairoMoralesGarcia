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

  // 4
  static async increment15(req, res) {
    const ingredientesUpdated = await Ingrediente.updateMany(
      {},
      { $inc: { precio: 1.5 } }
    );
    const ingredientesFound = await Ingrediente.find().toArray();
    resOk(res, { ingredientesUpdated: ingredientesFound });
  }

  // 7
  static async deleteStock0(req, res) {
    const ingredientesDelete = await Ingrediente.deleteMany({ stock: 0 });
    resOk(res, { ingredientesDelete });
  }
}
