import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { passportJwt } from "../utils/auth/index.js";
import routesVersioning from "express-routes-versioning";
import { HamburguesasCrll } from "../controllers/hamburguesas.js";

export const router = Router();
// router.use(passportJwt);
const version = routesVersioning();

router.get(
  "/vegetarianas",
  version({
    "1.0.0": wrapError(HamburguesasCrll.getVegetarianas),
  })
);
