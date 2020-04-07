import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: []
})
export class AppComponent implements OnInit{
  title = 'services-and-dependency-injection';
  accounts = [];

  constructor(private accountService : AccountsService){
  }

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }

}
