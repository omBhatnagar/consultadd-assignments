import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPeopleComponent } from './display-people.component';

describe('DisplayPeopleComponent', () => {
  let component: DisplayPeopleComponent;
  let fixture: ComponentFixture<DisplayPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
