import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemDesktopComponent } from './menu-item-desktop.component';

describe('MenuItemDesktopComponent', () => {
  let component: MenuItemDesktopComponent;
  let fixture: ComponentFixture<MenuItemDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
