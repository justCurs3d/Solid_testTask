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
            const {limit, offset} = req.query || 0

            const quotes = await quotesService.getOneInPeriod(ticker, startDate, endDate, limit, offset)
            res.json(quotes)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Внутренняя ошибка сервера'})
        }
    }
}

export default new QuotesController()