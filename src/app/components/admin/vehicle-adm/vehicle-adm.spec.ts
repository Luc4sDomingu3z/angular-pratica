import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAdm } from './vehicle-adm';

describe('VehicleAdm', () => {
  let component: VehicleAdm;
  let fixture: ComponentFixture<VehicleAdm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleAdm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleAdm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
