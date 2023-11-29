import {Schema, model} from "mongoose";

const Ticker = new Schema({
    name: String,
    ticker: String,
    currency: String
});

export default model('Ticker', Ticker)
