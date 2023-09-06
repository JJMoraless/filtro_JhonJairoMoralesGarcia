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
      categoria: "Vegetariana",
    }).toArray();

    resOk(res, { hamburguesas });
  }

  static async update(req, res) {
    resOk(res, { msg: "funciona 2" });
  }

  static async delete(req, res) {
    resOk(res, { msg: "funciona" });
  }
}
