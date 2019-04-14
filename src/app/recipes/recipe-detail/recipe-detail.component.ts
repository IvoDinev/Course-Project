import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
              private shoppingService: ShoppingService, private router:Router) {
    
   }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.recipe = this.recipeService.getElementByID(this.index);
      } 
    )
  }
  onClick() {
    for (let index = 0; index < this.recipe.ingredients.length; index++) {
      this.shoppingService.toShoppingList(this.recipe.ingredients[index])      
    }    
  }
  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  } 
  onDelete() {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['recipes']);
  }
}
