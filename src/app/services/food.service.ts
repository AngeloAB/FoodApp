import {Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
    providedIn: 'root'
})
export class FoodService{
    

    getFoods(): Food[]{
        return[
            {
                id: 1,
                name: 'Baconator',
                price: 20,
                image: 'assets/imagen/burger2.png',
                description: 'Dos carnes de 1/4 de libra, queso y tocineta ahumada Applewood. Incluye papas fritas y bebida 20 oz.',
            },
            {
                id: 2,
                name: 'Cheesse pizza',
                price: 32,
                image: 'assets/imagen/pizza2.png',
                description: 'Dos carnes de 1/4 de libra, queso y tocineta ahumada Applewood. Incluye papas fritas y bebida 20 oz.',
            },
        ];
    }

    getFood(id: number): Food{
        return this.getFoods().find((food) => food.id == id);
    }
}