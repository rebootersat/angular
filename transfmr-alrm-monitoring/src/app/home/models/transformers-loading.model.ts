
export class TransformersLoading {

    public tranformerName: string;
    public realTimeMW: string;
    public realTimeMVar: string;
    public realtimeMVA: string;
    public realTimeVoltage220KV: string;
    public realTimeVoltage66KV: string;
    public warningType: string;

    public constructor(tranformerName: string, realTimeMW: string, realTimeMVar: string, realtimeMVA: string, realTimeVoltage220KV: string
        , realTimeVoltage66KV: string, warningType: string) {
        this.tranformerName = tranformerName;
        this.realTimeMW = realTimeMW;
        this.realTimeMVar = realTimeMVar;
        this.realtimeMVA = realtimeMVA;
        this.realTimeVoltage220KV = realTimeVoltage220KV;
        this.realTimeVoltage66KV = realTimeVoltage66KV;
        this.warningType = warningType;
    }
}