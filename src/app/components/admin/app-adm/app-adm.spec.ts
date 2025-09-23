import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdm } from './app-adm';

describe('AppAdm', () => {
  let component: AppAdm;
  let fixture: ComponentFixture<AppAdm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAdm]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppAdm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
