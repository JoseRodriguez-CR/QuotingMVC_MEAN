const express = require( 'express');

//const bodyParser = require("body-parser");
//const bcrypt = require( 'bcrypt' );
const session = require( 'express-session' );
const flash = require( 'express-flash' );


const {QuoteRouter} = require( './server/routes/quoteRouter' );

//importing database from server folder
require( './server/config/database' );

//The QuoteModel is not longer using it here, so it can be remove
//just leave it here to have it as reference
//const {QuoteModel} = require( './server/models/quotesModel' );
const app = express();

//Setting packages we will use
app.use(flash());
app.use(express.static(__dirname + "/client/static"));
app.use(express.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "quotes",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
    }));

app.set("views", __dirname + "/client/views");
app.set("view engine", "ejs");

app.use( '/', QuoteRouter);


//Endpoints were move to routes and its logic to controllers

app.listen(8080, function(){
    console.log("Quotes server is running in port 8080");
});