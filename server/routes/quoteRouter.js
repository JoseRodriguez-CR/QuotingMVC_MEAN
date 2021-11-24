const express = require( 'express' );
const QuoteRouter = express.Router();
const {QuoteController} = require( './../controllers/quoteController');

QuoteRouter
    .get( '/', QuoteController.loadIndex );  // got an error after move this endpoint


QuoteRouter
    .route('/quotes')
    .get(QuoteController.loadQuotes ) 
    .post( QuoteController.createQuote );

module.exports = {QuoteRouter};