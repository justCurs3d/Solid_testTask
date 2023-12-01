import {Router} from "express";
import quotesController from "../controllers/quotesController.js";
import {check} from "express-validator";

const customPageValidate = (page, {req}) => {
    // Если указан параметр "page", убедимся, что также указан "limit"
    if (page && !req.query.limit) {
        throw new Error('If "page" is specified, "limit" must also be specified.')
    }

    return true
}

const quotesRouter = new Router()

quotesRouter.get('/quotes',
    check('date').isISO8601().toDate(),
    quotesController.getAllInDate)

quotesRouter.get('/quotes/:ticker', [
    check('startDate').isISO8601().toDate(),
    check('endDate').isISO8601().toDate(),
    check('limit').optional().isInt({ min: 1 }),
    check('page').optional().isInt({min: 1}).custom(customPageValidate),

], quotesController.getOneInPeriod)

export default quotesRouter