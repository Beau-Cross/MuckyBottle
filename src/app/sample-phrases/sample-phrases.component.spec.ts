import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePhrasesComponent } from './sample-phrases.component';

describe('SamplePhrasesComponent', () => {
  let component: SamplePhrasesComponent;
  let fixture: ComponentFixture<SamplePhrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePhrasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
