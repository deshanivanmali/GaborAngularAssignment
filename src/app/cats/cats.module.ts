import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    CatsComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    ComponentsModule
  ]
})
export class CatsModule { }
