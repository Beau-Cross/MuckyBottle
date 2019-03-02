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
  recyclable : recyclable = {
    name : "",
    weightkg : 0,
    weightlbs : 0
  }
  recyclablesArray = RECYCLABLES;
  constructor() { }

  ngOnInit() 
  {
    console.log(this.recyclablesArray);
  }

}
