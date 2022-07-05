import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes:Recipe[] = [
        new Recipe('Pasta',
            "This is Pasta recipe",
            "https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-by-PictureTheRecipe.jpg",
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20 ),
            ]
        ),
        new Recipe('Pizza',
            "This is Pizza recipe",
            "https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR.jpg",
            [
                new Ingredient('chicken',1),
                new Ingredient('cheese',20 ),
            ]
        ),
    ];
    
    getRecipes() {
        return this.recipes.slice(); // this will not return the exact copy of the recipes but not recipes
    }   
}