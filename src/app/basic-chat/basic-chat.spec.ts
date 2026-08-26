import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicChat } from './basic-chat';

describe('BasicChat', () => {
  let component: BasicChat;
  let fixture: ComponentFixture<BasicChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicChat],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
