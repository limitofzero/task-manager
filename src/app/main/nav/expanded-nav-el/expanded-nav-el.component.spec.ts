import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedNavElComponent } from './expanded-nav-el.component';

describe('ExpandedNavElComponent', () => {
  let component: ExpandedNavElComponent;
  let fixture: ComponentFixture<ExpandedNavElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandedNavElComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedNavElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
