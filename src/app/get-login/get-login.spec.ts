import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetLogin } from './get-login';

describe('GetLogin', () => {
  let component: GetLogin;
  let fixture: ComponentFixture<GetLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(GetLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
