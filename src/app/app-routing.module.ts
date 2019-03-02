import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecyclableComponent } from './recyclable/recyclable.component';
import { SamplePhrasesComponent } from './sample-phrases/sample-phrases.component';


const routes: Routes = [
  { path: 'myrecycling', component: RecyclableComponent },
  { path: 'statistics', component: RecyclableComponent },
  { path: 'sample-phrases', component: SamplePhrasesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
