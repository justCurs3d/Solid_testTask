import Quote from "../models/Quote.js";
import quotesService from "../services/quotesService.js";

class QuotesController {
    async getAllInDate (req, res) {
        try {
            const {date} = req
            const quotes = await quotesService.getAllInDate(date)
            res.json(quotes)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Внутренняя ошибка сервера'})
        }
    }

    async getOneInPeriod (req, res) {
        try {
            const {ticker} = req.params
            const {startDate, endDate} = req
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