import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchJsonPlaceholderComponent } from './fetch-json-placeholder.component';

describe('FetchJsonPlaceholderComponent', () => {
  let component: FetchJsonPlaceholderComponent;
  let fixture: ComponentFixture<FetchJsonPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchJsonPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchJsonPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
