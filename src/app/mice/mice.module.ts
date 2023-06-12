import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiceRoutingModule } from './mice-routing.module';
import { MiceComponent } from './mice.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MiceComponent
  ],
  imports: [
    CommonModule,
    MiceRoutingModule,
    ComponentsModule
  ]
})
export class MiceModule { }
