import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients = [{ name: 'Apple', amount: 5 },
  { name: 'Orange', amount: 3 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: { name: string, amount: number }) {
    this.ingredients.push(ingredient);
  }

}
