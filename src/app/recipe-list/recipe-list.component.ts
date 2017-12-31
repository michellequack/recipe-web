import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../services/recipe-data.service';
import { MatIcon, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Recipe } from '../models/recipe.models';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  constructor(public dataService: RecipeDataService, public recipeViewDialog: MatDialog,) { }

  ngOnInit() {
  }

  openRecipeViewDialog(recipe: Recipe): void {
    let dialogRef = this.recipeViewDialog.open(RecipeDetailsComponent, {
      data: { recipe: recipe },
      width: '600px'
    });

  }

}
