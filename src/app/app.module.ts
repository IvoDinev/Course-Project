import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { NewRecipeComponent } from './recipes/recipe-list/recipe-item/new-recipe/new-recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { EnableButtonDirective } from './shared/enable-button.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeBookService } from './recipebook.service';
import { RecipeService } from './recipes/recipe.service';
import { FilterPipe } from './recipes/recipe-list/filter.pipe';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NewRecipeComponent,
    DropdownDirective,
    EnableButtonDirective,
    HomeComponent,
    PageNotFoundComponent,
    RecipeEditComponent,
    FilterPipe,    
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ShoppingService, RecipeBookService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
