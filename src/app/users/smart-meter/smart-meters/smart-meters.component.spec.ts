import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMetersComponent } from './smart-meters.component';

describe('SmartMetersComponent', () => {
  let component: SmartMetersComponent;
  let fixture: ComponentFixture<SmartMetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartMetersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartMetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
