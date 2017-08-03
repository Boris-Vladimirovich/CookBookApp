import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Recipe';

const Recipe = mongoose.model('Recipe');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.collectionName}` ,{useMongoClient: true});
}

export function getRecipes() {
    return Recipe.aggregate(
        {$sort: {date: -1}},
        {$group: {
            _id: '$recipeID',
            __id: {$first: '$_id'},
            title: {$first: '$title'},
            text: {$first: '$text'},
            date: {$first: '$date'}
        }},
        {$group: {
            _id: '$__id',
            recipeID: {$first: '$_id'},
            title: {$first: '$title'},
            text: {$first: '$text'},
            date: {$first: '$date'}
        }}
    );
}

export function createNewRecipe(data) {
    const recipe = new Recipe({
        recipeID: parseInt(Date.now()),
        title: data.title,
        text: data.text,
        date: new Date()
    });
    return recipe.save();
}

export function updateRecipe(id, data) {
    const recipe = new Recipe({
        recipeID: id,
        title: data.title,
        text: data.text,
        date: new Date
    });
    return recipe.save();
}

export function getHistory(id) {
    return Recipe.find({recipeID: id})
}

export function deleteRecipe(id) {
    return Recipe.findById(id).remove();
}

export function deleteAll(id) {
    return Recipe.find({recipeID: id}).remove();
}