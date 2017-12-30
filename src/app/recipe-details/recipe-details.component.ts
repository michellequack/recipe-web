import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatGridList} from '@angular/material';
import { Recipe, Ingredient} from '../models/recipe.models';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.less']
})
export class RecipeDetailsComponent implements OnInit {

  public recipe: Recipe;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.recipe = data.recipe;
   }

  ngOnInit() {
    
  }

}
