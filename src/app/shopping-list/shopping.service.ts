import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingredientsChanged = new Subject<Ingredient[]>(); 
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 5)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index: number) {
      return this.ingredients[index];
    }
    checkForExistingIngredient(ingredient: Ingredient) {
      let searchElement = this.ingredients.find( el => el.name === ingredient.name);
        if(searchElement){
          searchElement.amount += ingredient.amount;
        }
        else{
          this.ingredients.push(ingredient);
        }
    }
    addIngredient(ingredient: Ingredient) {
        this.checkForExistingIngredient(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    toShoppingList(ingredient: Ingredient) {
      this.checkForExistingIngredient(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    onDelete(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }

}
