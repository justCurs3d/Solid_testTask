import Quote from "../models/Quote.js";

class quotesService {
    async getAllInDate (date) {
        const quotes = await Quote.find({date})
        return quotes
    }

    async getOneInPeriod (ticker, startDate, endDate, limit, offset) {
        const quotes = await Quote.find({ticker, date: { $gte: startDate, $lte: endDate }}).limit(limit).skip(offset)
        return quotes
    }
}

export default new quotesService()