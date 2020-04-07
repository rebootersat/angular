
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

    addAccount(accountName: string, accountStatus: string) {
        this.accounts.push({
            name: accountName,
            status: accountStatus
        });
    }

    updateInfo(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
    }
}