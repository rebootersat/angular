import { EventEmitter } from '@angular/core';
import { PowerSummary } from '../models/power-summary.model';
import { TransformersLoading } from '../models/transformers-loading.model';

export class RealtimeDataService{

    onPowerSummary = new EventEmitter<PowerSummary>();

    onTransformersLoading = new EventEmitter<TransformersLoading[]>();

}