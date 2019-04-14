import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  @ViewChild('newNameInput') newNameRef: ElementRef;
  @ViewChild('newDescription') newDescriptionRef: ElementRef;
  @ViewChild('imgPath') imgPathRef: ElementRef;
  @Output() recipeAdded = new EventEmitter<Recipe>();
  ingredients: Ingredient[];
  newRecipe: Recipe;
  
  newIndex: number;

  constructor(private recipeService: RecipeService) {
  }
  getIndex(num: number) {
    this.newIndex = num;
  }

 onClick() {
    this.newRecipe = new Recipe(1, this.newNameRef.nativeElement.value,
                                 this.newDescriptionRef.nativeElement.value,
                                 this.imgPathRef.nativeElement.value, this.ingredients );
    this.recipeService.addNewRecipe(this.newRecipe);    
 }
  ngOnInit() {
    
  } 

}
