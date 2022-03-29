import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedLibComponent } from './med-lib.component';

describe('MedLibComponent', () => {
  let component: MedLibComponent;
  let fixture: ComponentFixture<MedLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
