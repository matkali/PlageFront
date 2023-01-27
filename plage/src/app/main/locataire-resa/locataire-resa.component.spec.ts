import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireResaComponent } from './locataire-resa.component';

describe('LocataireResaComponent', () => {
  let component: LocataireResaComponent;
  let fixture: ComponentFixture<LocataireResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireResaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocataireResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
