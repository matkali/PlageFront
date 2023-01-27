import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionnaireResaTraiterComponent } from './concessionnaire-resa-traiter.component';

describe('ConcessionnaireResaTraiterComponent', () => {
  let component: ConcessionnaireResaTraiterComponent;
  let fixture: ComponentFixture<ConcessionnaireResaTraiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionnaireResaTraiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcessionnaireResaTraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
