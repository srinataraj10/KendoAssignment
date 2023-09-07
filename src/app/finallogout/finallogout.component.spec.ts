import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinallogoutComponent } from './finallogout.component';

describe('FinallogoutComponent', () => {
  let component: FinallogoutComponent;
  let fixture: ComponentFixture<FinallogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinallogoutComponent]
    });
    fixture = TestBed.createComponent(FinallogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
