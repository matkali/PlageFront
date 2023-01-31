import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlageSelectorComponent } from './plage-selector.component';

describe('PlageSelectorComponent', () => {
  let component: PlageSelectorComponent;
  let fixture: ComponentFixture<PlageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlageSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
