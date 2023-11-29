import {Schema, model} from "mongoose";

const Quote = new Schema({
    ticker: String,
    date: Date,
    price: Number
});

export default model('Quote', Quote)
