import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ingredientForm: FormGroup;
    
    
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredientForm = new FormGroup({
    'ingredientName': new FormControl(null, Validators.required),
    'amount': new FormControl(null, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
    });
  }
  
  onSubmit() {
    const value = this.ingredientForm.value;
    const newIngredient = new Ingredient(value.ingredientName, value.amount);
    this.shoppingService.addIngredient(newIngredient);
      
  }
  ngOnDestroy() {    
  }    
}