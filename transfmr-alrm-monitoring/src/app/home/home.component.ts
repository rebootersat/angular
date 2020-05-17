import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { RealtimeDataService } from './services/realtime-data.service';
import { PowerSummary } from './models/power-summary.model';
import { TransformersLoading } from './models/transformers-loading.model';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RealtimeDataService]
})
export class HomeComponent implements OnInit {

  constructor(private realTimeDataService: RealtimeDataService ) { }

  webSocketEndPoint: string = 'http://localhost:8081/ws';
  topic: string = "/transformer/power-summary";
  stompClient: any;
  dt: any;

  ngOnInit() {
	  
   // console.log("Initialize WebSocket Connection ----> "+ mydata[summary]);
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame) {
        _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
          var realTimeData = JSON.parse(sdkEvent.body);
         var summary: PowerSummary = realTimeData["summary"];
         var loadings: TransformersLoading[] =  realTimeData["loadings"];
         _this.realTimeDataService.onPowerSummary.emit(summary);
         _this.realTimeDataService.onTransformersLoading.emit(loadings);
         
        //  console.log(summary );
         // console.log(loadings);
        });
    }, this.errorCallBack);
  }

  

  _disconnect() {
    if (this.stompClient !== null) {
        this.stompClient.disconnect();
    }
    console.log("Disconnected");
}

// on error, schedule a reconnection attempt
errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this.stompClient.connect();
    }, 5000);
}



}
