import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembershipTypeComponent } from './add-membership-type.component';

describe('AddMembershipTypeComponent', () => {
  let component: AddMembershipTypeComponent;
  let fixture: ComponentFixture<AddMembershipTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMembershipTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMembershipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
