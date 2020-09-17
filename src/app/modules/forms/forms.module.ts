import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormBuilderComponent, FormControlComponent, FormArrayComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
