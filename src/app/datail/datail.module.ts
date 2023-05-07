import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatailPageRoutingModule } from './datail-routing.module';

import { DatailPage } from './datail.page';
import { BadgeModule } from '../components/badge/badge.module';
import { ButtonModule } from '../components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatailPageRoutingModule,
    BadgeModule,
    ButtonModule
  ],
  declarations: [DatailPage]
})
export class DatailPageModule {}
