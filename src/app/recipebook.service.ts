import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from './recipes/recipe.service';
import { Recipe } from './recipes/recipe.model';


@Injectable()
export class RecipeBookService {
    recipesArr: Recipe[];
    arrChanged: boolean;
      
    
    constructor(private http: Http, private recipeService: RecipeService) {  
        // this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
        //     this.recipesArr = recipes;    
        //   }
        //   );     
    }   
    
    storeRecipes(recipes: Recipe[]) {
        console.log('storeRecipes');
        console.log(recipes);
        return this.http.put('https://recipe-book-9db76.firebaseio.com/data.json', recipes);
    }  
    
}