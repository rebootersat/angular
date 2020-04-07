import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name:string, status:string};
  @Input() id:number;
  
  constructor(private service:LoggingService, private accountService: AccountsService) {  }

  ngOnInit(): void {
  }

  onSetTo(status:string){
    this.accountService.updateInfo(this.id, status)
  //  this.service.logToConsole(status);
  }
}
