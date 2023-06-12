import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsComponent } from './dogs.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule,
    ComponentsModule
  ]
})
export class DogsModule { }
