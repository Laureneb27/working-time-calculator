import { Time } from "@angular/common";

export class TimeElementClass {
    private date: Date;
    private selectedType: Number;
    private arrivingTime: Time;
    private leavingTime: Time;
    private lunchTime: Time;

	constructor(date: Date,selectedType:number, arrivingTime: Time, leavingTime: Time, lunchTime: Time) {
		this.date = date;
		this.selectedType = selectedType;
		this.arrivingTime = arrivingTime;
		this.leavingTime = leavingTime;
		this.lunchTime = lunchTime;
	}
    
}
