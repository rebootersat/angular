import { EventEmitter } from '@angular/core';
import { Ingredient } from './Ingredient.model';



export class ShoppingService {

    onIngredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients = [{ name: 'Apple', amount: 5 },
    { name: 'Orange', amount: 3 }
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.onIngredientAdded.emit(this.ingredients.slice());
    }

}