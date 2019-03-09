import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']  
})
export class ShoppingListComponent implements OnInit {
  ingredientsarr: Ingredient[];
  
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredientsarr = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredientsarr = ingredients;    
    }
    );
  }
  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  } 

}
