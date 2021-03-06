import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ingredientForm: FormGroup;
  editIngredient: FormGroup;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;    
    
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredientForm = new FormGroup({
    'ingredientName': new FormControl(null, Validators.required),
    'amount': new FormControl(null, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
    });
    this.editIngredient = new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
    })
    this.subscription = this.shoppingService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;          
          this.editedItem = this.shoppingService.getIngredient(index);
          this.editIngredient.setValue({
            ingredientName: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }
  
  onSubmit() {
    const value = this.ingredientForm.value;
    const newIngredient = new Ingredient(value.ingredientName, value.amount);
    this.shoppingService.addIngredient(newIngredient);
    this.ingredientForm.reset();      
  }
  onEdit() {
    const value = this.editIngredient.value;
    const newIngredient = new Ingredient(value.ingredientName, value.amount);
    this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
    this.editIngredient.reset();
  }
  onClear() {
    this.ingredientForm.reset();
  }
  onEditClear() {
    this.editIngredient.reset();
  }
  onDelete() {   
    this.shoppingService.onDelete(this.editedItemIndex)
    this.editIngredient.reset();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();    
  }    
}