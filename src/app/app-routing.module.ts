import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecyclableComponent } from './recyclable/recyclable.component';
import { SamplePhrasesComponent } from './sample-phrases/sample-phrases.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  { path: 'myrecycling', component: RecyclableComponent },
  { path: '', component: HomeComponent },
  { path: 'statistics', component: StatsComponent },
  { path: 'sample-phrases', component: SamplePhrasesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
