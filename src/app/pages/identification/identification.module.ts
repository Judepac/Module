import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificationRoutingModule } from './identification-routing.module';
import { IdentificationComponent } from './identification.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    IdentificationComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    IdentificationRoutingModule
  ]
})
export class IdentificationModule { }
