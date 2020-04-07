import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-deep-dive';
 
  oddNumbers = [1,3,5,7,9];
  evenNumbers = [2,4,6,8];
  showEven = true;
   val: number = 2;


}
