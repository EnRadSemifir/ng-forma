import { TechsRoutingModule } from './techs-routing.module';
import { TechsComponent } from './components/techs/techs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        TechsComponent
    ],
    imports: [
        CommonModule,
        TechsRoutingModule
    ]
})
export class TechsModule { }