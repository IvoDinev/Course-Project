import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeBookService } from '../recipebook.service';
import { Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  
})
export class HeaderComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeBookService: RecipeBookService, private recipeService: RecipeService) {}

  ngOnInit() {
    //this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    }
    );
  } 
  onClick() {    
    console.log('click', this.recipes);
    this.recipeBookService.storeRecipes(this.recipes).subscribe(
      (response: Response) => {
         console.log(response);
      }      
    );
  }

}
