import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
      }
    )
    this.initForm();
  }
  private initForm() {
    let recipeName = '';
    let img = '';
    let description = '';    
    const editedRecipeIndex = this.id;
    const editedRecipe = this.recipeService.getElementByID(this.id);
    let recipeIngredients = new FormArray([]);
    recipeName = editedRecipe.name;
    img = editedRecipe.imagePath;
    description = editedRecipe.description;
    if(editedRecipe['ingredients']) {
      for(let ingredient of editedRecipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        );
      }
    }
        this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'imgPath' : new FormControl(img, Validators.required),
      'description' : new FormControl(description, Validators.required),
      'ingredients' : recipeIngredients      
    });   
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;    
  }
    
  onSubmit() {    
    const newRecipe = new Recipe(this.id, this.recipeForm.value.recipeName, this.recipeForm.value.description,
                                this.recipeForm.value.imgPath, this.recipeForm.value.ingredients);    
    this.recipeService.editRecipe(newRecipe, this.id); 
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onAdd(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount' : new FormControl()
      })
    );
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    this.recipeService.deleteIngredient(this.id, index);
  }

}
