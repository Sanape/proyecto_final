//Imports
import express from 'express';
import productsRoute from './routes/products.router.js';
import cartsRoute from './routes/carts.router.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import 'dotenv/config';
import morgan from 'morgan';
import viewsRoute from './routes/views.router.js';
import { engine } from 'express-handlebars';
import { __dirname } from './utils.js';
import { Server } from 'socket.io';
import { getAllProductsHandler, messagesHandler } from './handlers/handlers.js';
import databaseConnection from './config/databaseConnection.js';

//Variables
const app = express();

//Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.engine('handlebars', engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Routes
app.use('/api/carts/', cartsRoute);
app.use('/api/products/', productsRoute);
app.use('/', viewsRoute);

//Middlewares
//Global
app.use(errorHandlerMiddleware);

//Global middlewares
app.use(errorHandlerMiddleware);

const httpServer = app.listen(8080, () => {
  console.log(`Listening on port 8080`);
  databaseConnection();
});

const socketServer = new Server(httpServer);

const onConnection = async (socket) => {
  await getAllProductsHandler(socketServer, socket);
  await messagesHandler(socketServer, socket);
};

socketServer.on('connection', onConnection);
