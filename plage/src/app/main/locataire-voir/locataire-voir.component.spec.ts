import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireVoirComponent } from './locataire-voir.component';

describe('LocataireVoirComponent', () => {
  let component: LocataireVoirComponent;
  let fixture: ComponentFixture<LocataireVoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireVoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocataireVoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
