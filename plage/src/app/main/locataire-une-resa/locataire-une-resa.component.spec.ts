import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireUneResaComponent } from './locataire-une-resa.component';

describe('LocataireUneResaComponent', () => {
  let component: LocataireUneResaComponent;
  let fixture: ComponentFixture<LocataireUneResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireUneResaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocataireUneResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
