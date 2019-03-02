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
  recyclable : recyclable = {
    name : "",
    weightkg : 0,
    weightlbs : 0
  }
  
  constructor() {
    this.recyclablesArray = RECYCLABLES;
  }

  add(private r: string, private rW: number) {
    const rec = new recyclable(r, rW);
    this.recyclablesArray.push(rec);
  }

  ngOnInit() 
  {
    console.log(this.recyclablesArray);
  }

}
