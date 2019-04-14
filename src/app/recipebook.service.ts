import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from './recipes/recipe.service';
import { Recipe } from './recipes/recipe.model';
import { Response } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { map } from "rxjs/operators";

@Injectable()
export class RecipeBookService {
    recipesArr: Recipe[];
    arrChanged: boolean;
      
    
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { 
    //     this.recipeService.MyObservable.subscribe(
    //         (data: Recipe[]) => {
    //           console.log(data);
    //           this.recipesArr = data;
    //           console.log(this.recipesArr,"hello");      
    //         });       
    }    
    storeRecipes(recipes: Recipe[]) {
      const tk = this.authService.getToken();        
        return this.http.put('https://recipes-82842.firebaseio.com/recipes.json?auth=' + tk, recipes);
    }
    fetchRecipes() {
      const tk = this.authService.getToken();      
        this.http.get('https://recipes-82842.firebaseio.com/recipes.json?auth=' + tk)
        .pipe(map(
          (response: Response) => {
            const recipes: Recipe[] = response.json();
            for(let recipe of recipes) {
              if(!recipe['ingredients']) {
                recipe['ingredients'] = [];      
              }
            }
            return recipes;
          }
        ))
        .subscribe(
            (fetchedRecipes: Recipe[]) => {              
              this.recipeService.fetchRecipes(fetchedRecipes);        
            }
          );            
    }  
    
}