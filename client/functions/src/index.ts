import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import axios from 'axios';

import { Quote } from "./modules/Interfaces/Quote"
import { REACT_APP_RAPIDYAHAOO_API_KEY } from "./modules/Environment";

admin.initializeApp(functions.config().firebase);

exports.getStocks = functions.https.onCall((req:any, context:any) => {
    return new Promise((resolve, reject) => {
        console.log(`called getStocks with request`);
        console.log(req);
        let URIRequest = "https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT";
        
        axios.get(URIRequest,
            { headers: { 
                "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
                "x-rapidapi-key": `${REACT_APP_RAPIDYAHAOO_API_KEY}`
            } 
        }).then((res) => {
            // console.log(`Success retrieving data: ${JSON.stringify(res.data)}`);

            let quotes: Array<Quote> = Array<Quote>();
            let responses: any = res.data;

            quotes = responses.map((data: any) => {
                const myQuote: Quote = new Quote();

                myQuote.symbolName = data.symbol;
                myQuote.price = data.regularMarketPrice;
                myQuote.change = data.regularMarketChange;

                return myQuote;
            });
            // setSymbolQuotes(quotes);
            // console.log(quotes);

        }).catch((err: Error) => {
            console.error(err);
        });
    });
});