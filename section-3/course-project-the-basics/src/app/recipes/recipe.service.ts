import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Ingredient } from '../shopping-list/Ingredient.model';


export class RecipeService {

    recipes: Recipe[] = [new Recipe('Chhole', 'Pindi chole', 'https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/06/chole-thumb-3.jpg?resize=575%2C262',
        [new Ingredient('Cholle', 200), new Ingredient('Onion', 2)]
    ),
    new Recipe('Rajma', 
    'Kashmiri Rajma special for rice', 'https://recipes.justhindi.in/wp-content/uploads/2017/02/Rajma.jpg',
    [new Ingredient('Rajma', 200), new Ingredient('Onion', 2)]
    )
    ];


    onItemDetails = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

}