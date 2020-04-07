import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {

    accounts = [
        {
            name: 'Master Account',
            status: 'Active'
        },
        {
            name: 'Test Account',
            status: 'Inactive'
        }
    ];


    constructor(private logService:LoggingService){}

    addAccount(accountName: string, accountStatus: string) {
        this.accounts.push({
            name: accountName,
            status: accountStatus
        });
        this.logService.logToConsole(accountStatus);
    }

    updateInfo(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logService.logToConsole(newStatus);
    }
}