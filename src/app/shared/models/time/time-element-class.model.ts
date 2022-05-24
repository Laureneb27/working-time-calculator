import { Time } from "@angular/common";

export class TimeElementClass {
    private name: string;
    private arrivingTime: string;
    private leavingTime: string;
    private lunchTime: string;

	constructor(name: string, arrivingTime: string, leavingTime: string, lunchTime: string) {
		this.name = name;
		this.arrivingTime = arrivingTime;
		this.leavingTime = leavingTime;
		this.lunchTime = lunchTime;
	}
    
}
