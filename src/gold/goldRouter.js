import { Router } from "express";
import goldController from "./goldController.js";

const goldRouter = Router();

goldRouter.get("/gold/price/18", goldController.getGoldPrice_18);

export default goldRouter;
