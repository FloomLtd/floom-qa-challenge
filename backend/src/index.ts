import express from "express";

import {Florist, Product, Flower} from './models/index';

const app = express();
const port = 8080; // default port to listen

// Add headers before the routes are defined
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    // Pass to next layer of middleware
    next();
});

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "v1.0.0" );
} );

app.get( "/products", ( req, res ) => {
    Product.findAll<Product>({})
      .then((products: Product[]) => res.json(products))
      .catch((err: Error) => res.status(500).json(err));
});

app.get( "/products/:productId", ( req, res ) => {
    Product.findOne<Product>({where: { id: req.params?.productId }})
      .then((product: Product) => res.json(product))
      .catch((err: Error) => res.status(500).json(err));
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
