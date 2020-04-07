import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , OnChanges, DoCheck{

  @Input() element : {type: string, name: string, content: string};

  constructor() {
    console.log('constructor called...');
   }

   ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChanges called...');
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngOnInit called...');
  }

  ngDoCheck(){
    console.log('ngDoCheck called...');
  }

}
