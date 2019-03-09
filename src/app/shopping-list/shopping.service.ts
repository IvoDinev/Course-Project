import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 5)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
      let searchElement = this.ingredients.find( el => el.name === ingredient.name);
        if(searchElement){
          searchElement.amount += ingredient.amount;
        }else{
          this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
