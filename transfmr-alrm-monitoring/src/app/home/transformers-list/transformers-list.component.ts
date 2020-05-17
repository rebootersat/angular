import { Component, OnInit } from '@angular/core';
import { TransformersLoading } from '../models/transformers-loading.model';
import { RealtimeDataService } from '../services/realtime-data.service';

@Component({
  selector: 'app-transformers-list',
  templateUrl: './transformers-list.component.html',
  styleUrls: ['./transformers-list.component.css']
})
export class TransformersListComponent implements OnInit {

  transfmrs: TransformersLoading[] = null;
  data: TransformersLoading[] = null;
  enteries: number = 5;
  from: number = 0;
  to: number = 0;
  totalRecords: number = 0;
  totalPages: number[] = [];
  selectedPage: number = 0;
  selected: number = 0;
  startIndex: number = 0;
  endIndex: number = 0;

  constructor(private realTimeDataService: RealtimeDataService) { }

  ngOnInit(): void {
    this.realTimeDataService.onTransformersLoading.subscribe(data => {
      this.data = data;
      var noOfPages: number = Math.floor(this.data.length / this.enteries);
      if(this.data.length % this.enteries != 0)
        noOfPages = noOfPages + 1;
	this.totalRecords = this.data.length;
        this.totalPages = Array.from(Array(noOfPages + 1).keys());
        this.totalPages = this.totalPages.splice(1, noOfPages + 2)
		
		this.startIndex = 0;
		this.from = 1;
      this.endIndex = this.enteries;
	  this.to = this.enteries;
      this.transfmrs = this.data;
	  this.selected = 1;
      
    });
  }
  
  onSelected(value){
	  this.selected = value;
	  this.startIndex = this.enteries * (this.selected - 1);
	  this.from = this.startIndex + 1;
	  this.endIndex = this.startIndex + this.enteries;
	  this.to = this.endIndex;
	  this.transfmrs = [];
	  this.transfmrs = this.data;
	  console.log(this.transfmrs);
  }

	onPrevious(){
	  this.selected = this.selected - 1;
	  this.startIndex = this.enteries * (this.selected - 1);
	  this.from = this.startIndex + 1;
	  this.endIndex = this.startIndex + this.enteries;
	  this.to = this.endIndex;
	  this.transfmrs = [];
	  this.transfmrs = this.data;
	  
	  
	}
	
	onNext(){
	  this.selected = this.selected + 1;
	  this.startIndex = this.enteries * (this.selected - 1);
	  this.from = this.startIndex + 1;
	  this.endIndex = this.startIndex + this.enteries;
	  this.to = this.endIndex;
	  this.transfmrs = [];
	  this.transfmrs = this.data;
	  
	  
	}

	onChangeShowLimit(){
		
	var noOfPages: number = Math.floor(this.data.length / this.enteries);
      if(this.data.length % this.enteries != 0)
        noOfPages = noOfPages + 1;
	this.totalRecords = this.data.length;
        this.totalPages = Array.from(Array(noOfPages + 1).keys());
        this.totalPages = this.totalPages.splice(1, noOfPages + 2)
		console.log(noOfPages+"  - "+this.totalPages);
	  this.startIndex = this.enteries * (this.selected - 1);
	  this.from = this.startIndex + 1;
	  this.endIndex = this.startIndex + this.enteries;
	  this.to = this.endIndex;
	  this.transfmrs = [];
	  this.transfmrs = this.data;
	  
	  
	}

}
