import { NgModule, forwardRef } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingService } from '../shopping-list/shopping.service';
import { RecipeBookService } from '../recipebook.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ShoppingService,
                RecipeBookService,
                RecipeService,
                forwardRef(() => AuthGuard), AuthService]
})
export class CoreModule {}