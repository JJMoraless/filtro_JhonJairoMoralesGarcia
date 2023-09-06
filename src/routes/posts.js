import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { passportJwt } from "../utils/auth/index.js";
import { PostsCrll } from "../controllers/posts.js";
import routesVersioning from "express-routes-versioning";

export const router = Router();
router.use(passportJwt);    
const version = routesVersioning();

router.post(
  "/",
  version({
    "1.0.0": wrapError(PostsCrll.create),
    "2.0.0": wrapError(PostsCrll.update),
  })
);
