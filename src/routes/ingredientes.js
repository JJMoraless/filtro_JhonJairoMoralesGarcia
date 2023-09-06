import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { passportJwt } from "../utils/auth/index.js";
import { IngredientesCrll } from "../controllers/ingredientes.js";
import routesVersioning from "express-routes-versioning";

export const router = Router();
// router.use(passportJwt);
const version = routesVersioning();

router.get(
  "/stock40",
  version({
    "1.0.0": wrapError(IngredientesCrll.getStockless40),
  })
);
