import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
        recipeID:   {type: Number, required: true},
        title:      {type: String, required: true},
        text:       {type: String, required: true},
        date:       {type: Date,   required: true}
    });

mongoose.model('Recipe', RecipeSchema);