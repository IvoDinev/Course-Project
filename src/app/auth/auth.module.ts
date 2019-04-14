import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,               
    ],
    imports: [ FormsModule, ReactiveFormsModule, AuthRoutingModule
     ],
    providers: []
})
export class AuthModule {
}