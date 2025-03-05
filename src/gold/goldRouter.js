import { Router } from "express";
import goldController from "./goldController.js";

const goldRouter = Router();

goldRouter.get("/gold-details", goldController.getGoldDetails);
goldRouter.get("/sekee-details", goldController.getSekeeDetails);

export default goldRouter;
    