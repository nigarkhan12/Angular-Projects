import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Pasta', "This is Pasta recipe", "https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-by-PictureTheRecipe.jpg"),
    new Recipe('Pizza', "This is Pizza recipe", "https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
