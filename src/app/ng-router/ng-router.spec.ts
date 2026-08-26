import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgRouter } from './ng-router';

describe('NgRouter', () => {
  let component: NgRouter;
  let fixture: ComponentFixture<NgRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRouter],
    }).compileComponents();

    fixture = TestBed.createComponent(NgRouter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
