import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBlackButtonComponent } from './white-black-button.component';

describe('WhiteBlackButtonComponent', () => {
  let component: WhiteBlackButtonComponent;
  let fixture: ComponentFixture<WhiteBlackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteBlackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteBlackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
