import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionnaireClientsComponent } from './concessionnaire-clients.component';

describe('ConcessionnaireClientsComponent', () => {
  let component: ConcessionnaireClientsComponent;
  let fixture: ComponentFixture<ConcessionnaireClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionnaireClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcessionnaireClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
