import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';  

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'server is running'});
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.json(product);
})

const PORT = process.env.APP_PORT;

app.listen(5000, console.log(`Server is running on http://localhost:${PORT}`));