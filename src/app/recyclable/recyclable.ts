import { ParsedProperty } from "@angular/compiler";

enum RecyclableType {Paper, Plastic, Aluminum, Electronics}

export class recyclable 
{
   public name: string;
   public weightlbs: number;
   public weightkg: number;
   public time: number;


    constructor(theName: string, theWeight: number) 
    {
        this.name = theName;
        this.weightlbs = theWeight;
        this.weightkg = theWeight * 0.453592;
        this.time = Date.now();
    }
}