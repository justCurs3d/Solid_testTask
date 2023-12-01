import Quote from "../models/Quote.js";

class quotesService {
    async getAllInDate(date) {
        const quotes = await Quote.find({date})
        return quotes
    }

    async getOneInPeriod(reqParams) {
        const filter = {
            ticker: reqParams.ticker,
            date: {
                $gte: reqParams.startDate,
                $lte: reqParams.endDate
            }
        }
        const count = await Quote.countDocuments(filter)

        let skip = 0
        if (reqParams.page && reqParams.limit) {
            skip = reqParams.limit * (reqParams.page - 1)
        }

        const quotes = await Quote.find(filter).limit(reqParams.limit).skip(skip)
        const result = {
            count,
            quotes
        }
        return result
    }
}

export default new quotesService()