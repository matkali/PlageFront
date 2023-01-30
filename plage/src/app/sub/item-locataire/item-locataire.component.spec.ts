import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLocataireComponent } from './item-locataire.component';

describe('ItemLocataireComponent', () => {
  let component: ItemLocataireComponent;
  let fixture: ComponentFixture<ItemLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
