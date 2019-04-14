import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { RecipeBookService } from '../../recipebook.service';
import { RecipeService } from '../../recipes/recipe.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  
})
export class HeaderComponent implements OnInit {
  recipes: Recipe[];
  str1: string;  
  constructor(private recipeBookService: RecipeBookService, private recipeService: RecipeService,
              private authService: AuthService) {    
  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
    this.recipeService.newRecipeArr.subscribe((recipeArr: Recipe[]) => {
      this.recipes = recipeArr;
    })    
  }
  onClick() {   
    this.recipeBookService.storeRecipes(this.recipes).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
    console.log(this.recipes, "haha");
  }
  onFetch() {
    this.recipeBookService.fetchRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}


