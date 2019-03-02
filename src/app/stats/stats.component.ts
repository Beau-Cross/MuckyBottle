import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource, MatPaginator } from '@angular/material';


export interface Street {
  name: string;
  day: string;
}

export interface RecoveredMat {
  year: string;
  glass: number;
  alum: number;
  paper: number;
  news: number;
  cardb: number;
  chipb: number;
  steelC: number;
  plasticB: number;
  scrapMetal: number;
  concrete: number;
  ewaste: number;
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

const ROWS_STAT: RecoveredMat[] = [
{year: "2015", glass:1315, alum: 75, paper: 951, news: 633, cardb:2507, chipb:0, steelC:108,plasticB:292, scrapMetal:124, concrete:43, ewaste:26 },
//2014 1,297 59 962 722 2,134 69 112 324 75 136 3 5,893
{year: "2014", glass:1297, alum: 59, paper: 962, news: 722, cardb:2134, chipb:69, steelC:112,plasticB:324, scrapMetal:75, concrete:136, ewaste:3 },

//1,357 57 952 754 1,925 206 110 252 68 5,681
{year: "2013", glass:1357, alum: 57, paper: 952, news: 745, cardb:2925, chipb:206, steelC:110,plasticB:252, scrapMetal:68, concrete:0, ewaste:0 },
//2012 1,058 65 932 767 1,160 791 87 267 62
{year: "2012", glass:1058, alum: 65, paper: 932, news: 767, cardb:1160, chipb:791, steelC:87,plasticB:267, scrapMetal:62, concrete:0, ewaste:0 },
//2011 1,010 73 848 892 1,175 827 110 252 114
{year: "2011", glass:1010, alum: 73, paper: 848, news: 892, cardb:1175, chipb:827, steelC:110,plasticB:252, scrapMetal:114, concrete:0, ewaste:0 },
//2010 997 70 899 915 1,135 743 112 232 112
{year: "2010", glass:997, alum: 70, paper: 899, news: 915, cardb:1135, chipb:743, steelC:112,plasticB:232, scrapMetal:112, concrete:0, ewaste:0 },
//2009 1,144 63 867 1,096 1,113 727 112 266 126
{year: "2009", glass:1144, alum: 63, paper: 867, news: 1096, cardb:1113, chipb:727, steelC:112,plasticB:266, scrapMetal:126, concrete:0, ewaste:0 },
//2008 967 62 880 1,548 1,284 670 92 247 133
{year: "2008", glass:967, alum: 62, paper: 880, news: 1548, cardb:1284, chipb:670, steelC:92,plasticB:247, scrapMetal:133, concrete:0, ewaste:0 },
//2007 897 48 773 1,749 1,153 718 102 247
{year: "2007", glass:897, alum: 48, paper: 773, news: 1749, cardb:1153, chipb:718, steelC:102,plasticB:247, scrapMetal:0, concrete:0, ewaste:0 },
//2006 897 74 824 1,580 1,133 799 103 241
{year: "2006", glass:897, alum: 74, paper: 824, news: 1580, cardb:1133, chipb:799, steelC:103,plasticB:241, scrapMetal:0, concrete:0, ewaste:0 }
];

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StatsComponent implements OnInit {

	displayedColumns: string[] = ['name', 'day'];
  	dataSource = new MatTableDataSource(ROWS);

  	displayedColumnsStats: string[] = ['year', 'glass', 'alum', 'paper', 'news', 'cardb', 'chipb', 'steelC', 'plasticB', 'scrapMetal', 'concrete', 'ewaste'];
  	dataSourceStats = new MatTableDataSource(ROWS_STAT);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
	constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

