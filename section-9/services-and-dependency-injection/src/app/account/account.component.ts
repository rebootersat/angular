import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name:string, status:string};
  @Input() id:number;
  @Output() statusChanged = new EventEmitter<{id:number, newStatus:string}>();

  constructor(private service:LoggingService) {  }

  ngOnInit(): void {
  }

  onSetTo(status:string){
    this.statusChanged.emit({id:this.id, newStatus: status});
    this.service.logToConsole(status);
  }
}
