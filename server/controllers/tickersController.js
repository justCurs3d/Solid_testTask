import tickersService from "../services/tickersService.js";


class TickersController {
    async getAll(req, res) {
        try {
            const tickers = await tickersService.getAll()
            res.json(tickers)
        } catch (e) {
            console.error(e)
            res.status(500).json({message: 'Внутренняя ошибка сервера'})
        }
    }
}

export default new TickersController()