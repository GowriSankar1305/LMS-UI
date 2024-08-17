import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFineComponent } from './view-fine.component';

describe('ViewFineComponent', () => {
  let component: ViewFineComponent;
  let fixture: ComponentFixture<ViewFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
