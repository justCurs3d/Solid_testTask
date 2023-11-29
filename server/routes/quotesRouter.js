import {Router} from "express";
import quotesController from "../controllers/quotesController.js";
import dateMiddleware from "../middleware/dateMiddleware.js";
import periodMiddleware from "../middleware/periodMiddleware.js";

const quotesRouter = new Router()

quotesRouter.get('/quotes', dateMiddleware, quotesController.getAllInDate)

quotesRouter.get('/quotes/:ticker', periodMiddleware, quotesController.getOneInPeriod)

export default quotesRouter