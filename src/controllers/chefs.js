import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";
const Chef = db.collection("chefs");

// el objeto user es del request es del jwt strategy
// que saca los datos que vienen del token

export class HamburguesasCrll {
  static async create(req, res) {}

  // 3
  static async getCarnes(req, res) {
    const chefsFound = await Chef.find({
      especialidad: "Carnes",
    }).toArray();

    resOk(res, { chefs: chefsFound });
  }

  static async update(req, res) {
    resOk(res, { msg: "funciona 2" });
  }

  static async delete(req, res) {
    resOk(res, { msg: "funciona" });
  }
}
