import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'Test', 'https://static01.nyt.com/images/2018/10/18/dining/ch-maple-roast-chicken-horizontal/ch-maple-roast-chicken-horizontal-threeByTwoMediumAt2X-v2.jpg'),
        new Recipe('New recipe', 'New', 'https://static01.nyt.com/images/2018/10/18/dining/ch-maple-roast-chicken-horizontal/ch-maple-roast-chicken-horizontal-threeByTwoMediumAt2X-v2.jpg')
      ];
    getRecipes() {
        return this.recipes.slice();
    }
}