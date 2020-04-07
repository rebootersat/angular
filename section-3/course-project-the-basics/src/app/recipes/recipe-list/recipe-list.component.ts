import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('Chhole', 'Pindi chole', 'https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/06/chole-thumb-3.jpg?resize=575%2C262'),
  new Recipe('Rajma', 'Kashmiri Rajma special for rice', 'https://recipes.justhindi.in/wp-content/uploads/2017/02/Rajma.jpg')
  ];

  @Output() onItemDetails = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  itemDetails(item: Recipe) {
    this.onItemDetails.emit(item);
  }

}
