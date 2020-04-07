import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() featureSelected = new EventEmitter<{ eventName: string }>();

    constructor() { }

    ngOnInit() { }

    onSelect(feature : string) {
        this.featureSelected.emit({ eventName: feature });
    }

}