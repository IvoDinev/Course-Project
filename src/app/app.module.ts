import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { EnableButtonDirective } from './shared/enable-button.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,             
    EnableButtonDirective,
    PageNotFoundComponent     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    SharedModule,
    CoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
