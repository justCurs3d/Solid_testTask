import {Router} from "express";
import tickersController from "../controllers/tickersController.js";

const tickersRouter = new Router()

tickersRouter.get('/tickers', tickersController.getAll)

export default tickersRouter