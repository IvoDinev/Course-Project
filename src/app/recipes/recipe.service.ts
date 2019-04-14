import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject, Observable, Observer } from 'rxjs';


@Injectable()
export class RecipeService {
  //MyObservable: Observable<Recipe[]>;
  constructor() {  
    // this.MyObservable = Observable.create((observer: Observer<Recipe[]>) => {
    //   setTimeout(() => {
    //     observer.next(this.recipes);
    //   }, 2000);
    // });      
   }
  
  newRecipeArr = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(1, 'Schnitzel', 'Awesome Schnitzel',
      'https://static01.nyt.com/images/2018/10/18/dining/ch-maple-roast-chicken-horizontal/ch-maple-roast-chicken-horizontal-threeByTwoMediumAt2X-v2.jpg',
      [new Ingredient('Meat', 1),
      new Ingredient('Cheese', 2)
      ]),
    new Recipe(2, 'Burger', 'Mazen Burger',
      'https://static01.nyt.com/images/2018/10/18/dining/ch-maple-roast-chicken-horizontal/ch-maple-roast-chicken-horizontal-threeByTwoMediumAt2X-v2.jpg',
      [new Ingredient('Kjufte', 2),
      new Ingredient('Sos', 2)])
  ];
  
  getRecipes() {
    return this.recipes.slice();
  }
  getElementByID(id: number) {
    return this.recipes[id];
  }
  incrementID(recipes: Recipe[]) {
    return recipes.length
  }
  addNewRecipe(recipe: Recipe) {
    recipe.id = this.recipes.length;
    this.recipes.push(recipe);
    this.newRecipeArr.next(this.recipes.slice());  
  }
  editRecipe(recipe: Recipe, id: number) {
    this.recipes[id] = recipe;
    this.newRecipeArr.next(this.recipes.slice());
  }
  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.newRecipeArr.next(this.recipes.slice());
  }
  fetchRecipes(fetchedRecipes: Recipe[]) {
    this.recipes = fetchedRecipes;
    this.newRecipeArr.next(this.recipes.slice());
  }
  deleteIngredient(recipeId: number,index : number) {
    this.recipes[recipeId].ingredients.splice(index, 1);
    this.newRecipeArr.next(this.recipes.slice());
  }
}   
