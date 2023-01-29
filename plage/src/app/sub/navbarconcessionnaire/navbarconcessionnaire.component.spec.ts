import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarconcessionnaireComponent } from './navbarconcessionnaire.component';

describe('NavbarconcessionnaireComponent', () => {
  let component: NavbarconcessionnaireComponent;
  let fixture: ComponentFixture<NavbarconcessionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarconcessionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarconcessionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
