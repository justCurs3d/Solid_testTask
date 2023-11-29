import Ticker from "../models/Ticker.js";

class tickersService {
    async getAll () {
        const quotes = await Ticker.find()
        return quotes
    }
}

export default new tickersService()