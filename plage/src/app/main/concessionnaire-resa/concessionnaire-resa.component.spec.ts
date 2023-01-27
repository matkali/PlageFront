import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionnaireResaComponent } from './concessionnaire-resa.component';

describe('ConcessionnaireResaComponent', () => {
  let component: ConcessionnaireResaComponent;
  let fixture: ComponentFixture<ConcessionnaireResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionnaireResaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcessionnaireResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
