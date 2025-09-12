import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSharedAdmin } from './header-shared-admin';

describe('HeaderSharedAdmin', () => {
  let component: HeaderSharedAdmin;
  let fixture: ComponentFixture<HeaderSharedAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSharedAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSharedAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
