import { ParsedProperty } from "@angular/compiler";

enum RecyclableType {Paper, Plastic, Aluminum, Electronics}

export class recyclable 
{
   public name: string;
   public weightlbs: number;
   public weightkg: number;


    constructor(theName: string, theWeight: number) 
    {
        this.name = theName;
        this.weightlbs = theWeight;
        this.weightkg = theWeight * 0.453592;
    }
}