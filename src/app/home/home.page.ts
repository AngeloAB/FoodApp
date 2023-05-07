import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Category } from '../models/category.model';
import { Food } from '../models/food.model';
import { FoodService } from '../services/food.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  categorias: Category[] =[];
  foods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit() {
    this.getCategorias();
    this.foods = this.foodService.getFoods();
  }
  getCategorias(){
    this.categorias = [
      {
        id: 1,
        name: "All",
        image: 'assets/imagen/p2.png',
        active: true,
        
      },
      {
        id: 2,
        name: "Burguer",
        image: 'assets/imagen/burger2.png',
        active: false,
        
      },
      {
        id: 3,
        name: "Pizza",
        image: 'assets/imagen/pizza2.png',
        active: false,
        
      },
      {
        id: 4,
        name: "Dessert",
        image: 'assets/imagen/pastel2.png',
        active: false,
        
      },
    ]
  }

  goToDetailPage(id: number){
    this.router.navigate(['datail', id]);
  }

}
