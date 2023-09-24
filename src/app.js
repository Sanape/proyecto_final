//Imports
import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';

//Variables
const app = express();

//Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('api/carts/', cartsRouter);
app.use('api/products/', productsRouter);

//Middlewares
app.use(errorHandlerMiddleware);

app.listen(8080, () => {
  console.log(`Listening on port 8080`);
});
