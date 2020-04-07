import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputEle: ElementRef;
  @ViewChild('amountInput') amountInputEle: ElementRef;

  @Output() onIngredientAdded = new EventEmitter<{ name: string, amount: number }>();

  constructor() { }

  ngOnInit(): void {
   
  }

  onAddItem(){
    this.onIngredientAdded.emit({
      name: this.nameInputEle.nativeElement.value,
      amount: this.amountInputEle.nativeElement.value
    });
  }
}
