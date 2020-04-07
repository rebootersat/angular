import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-and-dependency-injection';

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

  onAccountAdded(account: { name: string, status: string }) {
    this.accounts.push(account);
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
