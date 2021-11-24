const {QuoteModel} = require( './../models/quotesModel' );


const QuoteController = {
    loadIndex : function ( resquest, response ){
        response.render( 'index' );
    },
    loadQuotes : function(request, response){
        QuoteModel.getQuotes() 
        .then( result =>{
            response.render('quotes', {info: result});
        })
    },
    createQuote : function(request, response){
        console.log("Post", request.body);
        QuoteModel.createQuotes(request.body)
        .then( result => {
            request.session.name = result.name;
            request.session.quote = result.quote;
            /*request.session.date = result.date;*/
            console.log("OK");
            response.redirect( '/quotes' );
        })
        .catch( err => {
            request.flash( 'quoteError', 'Your quote has an error or it is in blank!' );
            response.redirect( '/' );
        });
    }
}

module.exports = {QuoteController};