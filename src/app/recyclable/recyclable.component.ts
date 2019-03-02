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
  totalweight : number = 3;
  totalweightkg : number = 1.36;
  recyclable : recyclable = {
    name : "",
    weightkg : 0,
    weightlbs : 0
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
      this.totalweightkg = (+this.totalweight * 0.453592)
  }

  ngOnInit() 
  {
    console.log(this.recyclablesArray);
  }

}
