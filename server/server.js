import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';
import { serverPort } from '../etc/config.json';

const app = express();

db.setUpConnection();

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api/recipes', (req,res) => {
    db.getRecipes().then(data => res.send(data));
});

app.post('/api/recipes', (req,res) => {
    db.createNewRecipe(req.body).then(data => res.send(data));
});

app.post('/api/recipes/:id', (req,res) => {
    db.updateRecipe(req.params.id, req.body).then(data => res.send(data));
});

app.delete('/api/recipes/:id', (req,res) => {
    db.deleteRecipe(req.params.id).then(data => res.send(data));
});

app.delete('/api/recipes/:id/all', (req,res) => {
    db.deleteAll(req.params.id).then(data => res.send(data));
});

app.get('/api/recipes/history/:id', (req,res) => {
    db.getHistory(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is running on ${serverPort}`);
});