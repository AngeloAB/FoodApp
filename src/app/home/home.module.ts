import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchbarModule } from '../components/searchbar/searchbar.module';
import { CategoryItemModule } from '../components/category-item/category-item.module';
import { FoodCardModule } from '../components/food-card/food-card.module';

import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    FoodCardModule,
    RouterLink
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
