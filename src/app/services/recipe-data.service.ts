import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Recipe, Ingredient} from '../models/recipe.models';
import { environment } from '../../environments/environment';

@Injectable()
export class RecipeDataService {

  constructor(private http: HttpClient) { }

  public recipes: Recipe[];
  public appetizers: Recipe[];
  public breads: Recipe[];
  public breakfasts: Recipe[];
  public desserts: Recipe[];
  public entrees: Recipe[];
  public sauces: Recipe[];
  public sides: Recipe[];
  public soups: Recipe[];
  public misc: Recipe[];

  private api_url: string = environment.api_url;


  getRecipes() {  
      this.http.get<Recipe[]>(this.api_url + '/Recipes')
      .map(data => data as Recipe[])
      .subscribe(data => {
          this.appetizers = data.filter(r => r.category === "Appetizer");
          this.breads = data.filter(r => r.category === "Bread");
          this.breakfasts = data.filter(r => r.category === "Breakfast");
          this.desserts = data.filter(r => r.category === "Dessert");
          this.entrees = data.filter(r => r.category === "Entree");
          this.sauces = data.filter(r => r.category === "Sauce");
          this.sides = data.filter(r => r.category === "Side Dish");
          this.soups = data.filter(r => r.category === "Soup");
          this.misc = data.filter(r => r.category === "Miscellaneous");
      })
  }
}
