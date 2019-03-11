import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Awesome Schnitzel',
         'https://static01.nyt.com/images/2018/10/18/dining/ch-maple-roast-chicken-horizontal/ch-maple-roast-chicken-horizontal-threeByTwoMediumAt2X-v2.jpg',
          [new Ingredient('Meat', 1),
            new Ingredient('Cheese', 2)
        ]),
        new Recipe('Burger', 'Mazen Burger',
         'https://static01.nyt.com/images/2018/10/18/dining/ch-maple-roast-chicken-horizontal/ch-maple-roast-chicken-horizontal-threeByTwoMediumAt2X-v2.jpg',
          [new Ingredient('Kjufte', 2),
            new Ingredient('Sos', 2)])
      ];
    getRecipes() {
        return this.recipes.slice();
    }
}