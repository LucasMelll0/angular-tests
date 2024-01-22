import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestTestsComponent } from './http-request-tests.component';

describe('HttpRequestTestsComponent', () => {
  let component: HttpRequestTestsComponent;
  let fixture: ComponentFixture<HttpRequestTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpRequestTestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpRequestTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
