import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAd } from './app-adm';

describe('HomeAd', () => {
  let component: HomeAd;
  let fixture: ComponentFixture<HomeAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
