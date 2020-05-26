const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//logger middleware
app.use(morgan('dev'));

// body parser middleware
// extracts url endcoded data and makes it easily readable for us
app.use(bodyParser.urlencoded({extended: false}));
//below code to extract json data and make it easily readable to us
app.use(bodyParser.json());

//routes which should hanlde the requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//app.use((req, res, next) => {
  //  const error = new Error('Not found');
    //error.status = 404;
    //next(error);
//});

//app.use((error, req, res, next) => {
  //  res.status(error.status || 500) ;
   // res.json({
    //    error: {
     //       message: error.message
     //   }
  //  });
//});


module.exports = app;