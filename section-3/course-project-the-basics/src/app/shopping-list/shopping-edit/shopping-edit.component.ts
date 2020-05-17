import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputEle: ElementRef;
  @ViewChild('amountInput') amountInputEle: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
   
  }

  onAddItem(){
    this.shoppingService.addIngredient({
      name: this.nameInputEle.nativeElement.value,
      amount: this.amountInputEle.nativeElement.value
    });
  }
}
