import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclableComponent } from './recyclable.component';

describe('RecyclableComponent', () => {
  let component: RecyclableComponent;
  let fixture: ComponentFixture<RecyclableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
