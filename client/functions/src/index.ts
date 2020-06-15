import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

// import axios from 'axios';

// import { Quote } from "./modules/Interfaces/Quote"
// import { REACT_APP_RAPIDYAHAOO_API_KEY } from "./modules/Environment";


exports.testFunctions = functions.https.onCall((req:any, res:any):any => {
    console.log(`called testFunction with`);
    console.log(`req ${JSON.stringify(req)}`);
    return new Promise((resolve, reject) => {
        resolve({message: "response OK"});
    }).catch((err: Error) => {
        console.error(err);
    });
});


// exports.getStocks = functions.https.onCall((req:any, context:any):any => {
//     console.log(`called getStocks`);
//     return new Promise((resolve, reject) => {
//         resolve({data: "Text"});
//     });
// });


// exports.getStocksNew = functions.https.onCall((req:any, context:any):any => {
//     console.log(`called getStocks`);
//     return new Promise((resolve, reject) => {
//         console.log(`called getStocks with request`);
//         console.log(req);
//         const URIRequest = "https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT";
        
//         axios.get(URIRequest,
//             { headers: { 
//                 "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
//                 "x-rapidapi-key": `${REACT_APP_RAPIDYAHAOO_API_KEY}`
//             } 
//         }).then((res) => {
//             // console.log(`Success retrieving data: ${JSON.stringify(res.data)}`);

//             let quotes: Array<Quote> = Array<Quote>();
//             const responses: any = res.data;

//             quotes = responses.map((data: any) => {
//                 const myQuote: Quote = new Quote();

//                 myQuote.symbolName = data.symbol;
//                 myQuote.price = data.regularMarketPrice;
//                 myQuote.change = data.regularMarketChange;

//                 return myQuote;
//             });
//             // setSymbolQuotes(quotes);
//             console.log(quotes);
//             resolve(quotes);

//         }).catch((err: Error) => {
//             console.error(err);
//             reject(err);
//         });
//     });
// });