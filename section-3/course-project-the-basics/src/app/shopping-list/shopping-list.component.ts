import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredient } from './Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingService]
})
export class ShoppingListComponent implements OnInit {

  ingredients= [];

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.onIngredientAdded.subscribe((ingredients : Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  
}
