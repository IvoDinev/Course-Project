import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
    
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
                        (index: number) => {
                         this.editMode = true;
                         this.editedItemIndex = index;
                        }
                      );
  }
  
  onSubmit(form: NgForm) {
    const value = form.value;
   //const newIngredient = new Ingredient(value.ingredientName, value.amount);
   const newIngredient = new Ingredient(value.name, value.amount);
   this.shoppingService.addIngredient(newIngredient);   
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }    
}