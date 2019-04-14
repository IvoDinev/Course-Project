import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
 
  constructor(private recipeService: RecipeService) {
  }
  recipes: Recipe[];
  subscription: Subscription;
    
  filteredString: string = '';
  
  ngOnInit() {    
    this.subscription = this.recipeService.newRecipeArr.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();   
    // this.recipeService.MyObservable.subscribe(
    //   (data: Recipe[]) => {
    //     console.log(data);
    //     this.recipes = data;
    //   });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
