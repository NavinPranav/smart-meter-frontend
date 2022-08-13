import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallSmartMeterComponent } from './install-smart-meter.component';

describe('InstallSmartMeterComponent', () => {
  let component: InstallSmartMeterComponent;
  let fixture: ComponentFixture<InstallSmartMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallSmartMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallSmartMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
