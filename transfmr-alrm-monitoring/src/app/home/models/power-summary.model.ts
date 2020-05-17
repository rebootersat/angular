


export class PowerSummary {

    public schedule: string;
    public drawl: string;
    public frequency: string;
    public uiRate: string;
    public od: string;

    public constructor(schedule: string, drawl: string, frequency: string,uiRate: string, od: string) {
        this.schedule = schedule;
        this.drawl = drawl;
        this.frequency = frequency;
        this.uiRate = uiRate;
        this.od = od;
    }

}