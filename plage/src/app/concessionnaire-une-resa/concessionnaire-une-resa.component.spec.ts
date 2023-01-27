import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionnaireUneResaComponent } from './concessionnaire-une-resa.component';

describe('ConcessionnaireUneResaComponent', () => {
  let component: ConcessionnaireUneResaComponent;
  let fixture: ComponentFixture<ConcessionnaireUneResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionnaireUneResaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcessionnaireUneResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
