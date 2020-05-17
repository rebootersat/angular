import { Component, OnInit } from '@angular/core';
import { RealtimeDataService } from '../services/realtime-data.service';
import { PowerSummary } from '../models/power-summary.model';

@Component({
  selector: 'app-power-summary',
  templateUrl: './power-summary.component.html',
  styleUrls: ['./power-summary.component.css']
})
export class PowerSummaryComponent implements OnInit {

  powerSummary : PowerSummary = null;

  constructor(private realTimeDataService : RealtimeDataService) { }

  ngOnInit(): void {
    this.realTimeDataService.onPowerSummary.subscribe(data=>{
      this.powerSummary = data;
      console.log(this.powerSummary);
    });
  }

}
