import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientsarr: Ingredient[];
  private subscription: Subscription;
  
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredientsarr = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredientsarr = ingredients;    
    }
    );
  }
  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
