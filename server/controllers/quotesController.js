import quotesService from "../services/quotesService.js";
import {validationResult} from "express-validator";

class QuotesController {
    async getAllInDate (req, res) {
        try {
            //Обработка ошибок валидации
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const {date} = req.query
            const quotes = await quotesService.getAllInDate(date)
            res.json(quotes)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Внутренняя ошибка сервера'})
        }
    }

    async getOneInPeriod (req, res) {
        try {
            //Обработка ошибок валидации
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const {ticker} = req.params
            const {startDate, endDate} = req.query
            const {limit, page} = req.query || 0
            const reqParams = {
                ticker,
                startDate,
                endDate,
                limit,
                page
            }
            const result = await quotesService.getOneInPeriod(reqParams)
            res.json(result)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Внутренняя ошибка сервера'})
        }
    }
}

export default new QuotesController()