import { FormControlComponent } from './components/form-control/form-control.component';
import { NgModule } from '@angular/core';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'builder', component: FormBuilderComponent },
  { path: 'control', component: FormControlComponent },
  { path: 'array', component: FormArrayComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FormsRoutingModule { }
