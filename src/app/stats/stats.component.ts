import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator } from '@angular/material';

export interface Street {
  name: string;
  day: string;
}

const ROWS: Street[] = 
	[{name: "East Zion Road",day: "Monday"},
	{name:"North Crossover Road", day:"Monday"}, 
	{name:"East Joyce Boulevard", day:"Monday"},
	{name:"East Rolling Hills Drive", day:"Monday"},
	{name:"East Skillern Road", day:"Monday"},
	{name:"East Township Street", day:"Monday"},
	{name:"North Old Wire Road", day:"Monday"},
	{name:"East North Street", day:"Monday"},
	{name:"North Mission Boulevard", day:"Monday"},
	{name:"East Lafayette Street", day:"Monday"},
	{name: "North Steele Boulevard", day: "Tuesday"},
	{name: "North Gregg Avenue", day: "Tuesday"},
	{name: "West Drake Street", day: "Tuesday"},
	{name: "West Sycamore Street", day: "Tuesday"},
	{name: "West North Street", day: "Tuesday"},
	{name: "West Deane Street", day: "Tuesday"},
	{name: "North Porter Road", day: "Tuesday"},
	{name: "West Mount Comfort Road", day: "Tuesday"},
	{name: "North Rupple Road", day: "Tuesday"},
	{name: "North Garland Avenue", day: "Tuesday"},
	{name: "West Wedington Drive", day: "Wednesday"},
	{name: "South 85th Avenue", day: "Wednesday"},
	{name: "North 85th Avenue", day: "Wednesday"},
	{name: "North Double Springs Road", day: "Wednesday"},
	{name: "North 54th Avenue", day: "Wednesday"},
	{name: "North Broyles Avenue", day: "Wednesday"},
	{name: "South Broyles Avenue", day: "Wednesday"},
	{name: "West Persimmon Street", day: "Wednesday"},
	{name: "North Salem Road", day: "Wednesday"},
	{name: "South Cato Springs Road", day: "Wednesday"},
	{name: "South Razorback Road", day: "Wednesday"},
	{name: "North Razorback Road", day: "Wednesday"},
	{name: "West Martin Luther King Boulevard", day: "Wednesday"},
	{name: "West MLK Boulevard", day: "Wednesday"},
	{name: "West Maple Street", day: "Wednesday"},
	{name: "West Dickson Street", day: "Wednesday"},
	{name: "West 15th Street", day: "Wednesday"},
	{name: "Goose Creek Road", day: "Wednesday"},
	{name:"East Huntsville Road", day: "Thursday"},
	{name:"East 15th Street", day: "Thursday"},
	{name:"West Willoughby Road", day: "Thursday"},
	{name:"North Main Avenue", day: "Thursday"},
	{name:"South City Lake Road", day: "Thursday"},
	{name:"South Armstrong Avenue", day: "Thursday"},
	{name:"South Black Oak Road", day: "Thursday"},
	{name:"South Crossover Road", day: "Thursday"},
	{name:"South Dead Horse Mountain Road", day: "Thursday"},
	{name:"East Mission Boulevard", day: "Thursday"}];

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})

export class StatsComponent implements OnInit {

	displayedColumns: string[] = ['name', 'day'];
  	dataSource = new MatTableDataSource(ROWS);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
	constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

