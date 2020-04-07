import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

servers = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.servers.push('New server');
  }

  onRemove(id : number){
    const position = id +1;
    this.servers.splice(position , 1);
  }

}
