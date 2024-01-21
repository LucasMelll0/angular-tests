import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFeildTestsComponent } from './form-field-tests.component';

describe('FormFeildTestsComponent', () => {
  let component: FormFeildTestsComponent;
  let fixture: ComponentFixture<FormFeildTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFeildTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFeildTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
