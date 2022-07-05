import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes:Recipe[] = [
        new Recipe('Pasta', "This is Pasta recipe", "https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-by-PictureTheRecipe.jpg"),
        new Recipe('Pizza', "This is Pizza recipe", "https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR.jpg"),
    ];
    
    getRecipes() {
        return this.recipes.slice(); // this will not return the exact copy of the recipes but not recipes
    }   
}