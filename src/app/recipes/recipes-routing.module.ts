import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { NewRecipeComponent } from './recipe-list/recipe-item/new-recipe/new-recipe.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';

const recipeRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [    
        { path: 'new-recipe', component: NewRecipeComponent},    
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent}
      ]},
];
@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
  })

export class RecipesRoutingModule {    
}