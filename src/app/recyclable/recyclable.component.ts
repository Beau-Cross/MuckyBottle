import { Component, OnInit } from '@angular/core';
import { recyclable } from './recyclable';
import { RECYCLABLES } from './mock-recyclable'

@Component({
  selector: 'app-recyclable',
  templateUrl: './recyclable.component.html',
  styleUrls: ['./recyclable.component.scss']
})
export class RecyclableComponent implements OnInit 
{
  recyclablesArray: recyclable[];
  totalweight : number = 0;
  totalweightkg : number = 0;
  recyclable : recyclable = {
    name : "",
    weightkg : 0,
    weightlbs : 0,
    time : Date.now()
  }
  
  constructor() {
    this.recyclablesArray = RECYCLABLES;
  }

  add(r: string, rW: number) {
    const rec = new recyclable(r, rW);
    this.recyclablesArray.push(rec);
    this.totalWeight(rec);
  }
  totalWeight(a: recyclable)
  {
      this.totalweight = (+this.totalweight + +a.weightlbs);
      this.totalweightkg = (+this.totalweight * 0.453592);
  }
 
  ngOnInit() 
  {
    console.log(this.recyclablesArray);
    for(let entry of this.recyclablesArray)
      this.totalweight = +this.totalweight + +entry.weightlbs;

      
    this.totalweightkg = (+this.totalweight * 0.453592);
  }

}
