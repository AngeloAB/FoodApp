import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from '../models/cart-item.model';
import { Food } from '../models/food.model';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-datail',
  templateUrl: './datail.page.html',
  styleUrls: ['./datail.page.scss'],
})
export class DatailPage implements OnInit {
id: number;
food: Food;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private toastCtrl: ToastController
  ) { 
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id);
  }

  addItemToCart(){
    const cartitem: CartItem = {
      id: this.food.id,
      name: this.food.name,
      price: this.food.price,
      image: this.food.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Producto agregado al carrito',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }

}
