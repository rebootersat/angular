import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private service:LoggingService, private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
 //   this.service.logToConsole(accountStatus);
  }

}
