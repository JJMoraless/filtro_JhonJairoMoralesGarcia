import { request, response } from "express";
import { resOk } from "../utils/functions.js";
import db from "../../db/conection.js";

// el objeto user es del request es del jwt strategy
// que saca los datos que vienen del token

export class PostsCrll {
  static async create(req, res) {
    console.log("🚀 ~ file: posts.js:7 ~ PostsCrll ~ create ~ req:", req.user);
    resOk(res, { msg: "funciona" });
  }

  static async update(req, res) {
    resOk(res, { msg: "funciona 2" });
  }

  static async delete(req, res) {
    resOk(res, { msg: "funciona" });
  }
}
