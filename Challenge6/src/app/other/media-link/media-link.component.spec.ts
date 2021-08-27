import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLinkComponent } from './media-link.component';

describe('MediaLinkComponent', () => {
  let component: MediaLinkComponent;
  let fixture: ComponentFixture<MediaLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
