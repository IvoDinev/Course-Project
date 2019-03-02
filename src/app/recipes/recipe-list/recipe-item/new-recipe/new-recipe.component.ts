import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

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

  constructor() { }

  newRecipeAdded() {
    const newRecipe = new Recipe(this.newNameRef.nativeElement.value,
                                 this.newDescriptionRef.nativeElement.value,
                                 this.imgPathRef.nativeElement.value );
    this.recipeAdded.emit(newRecipe);
  }

  ngOnInit() {
  }

}
