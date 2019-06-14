import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPagesNavbarComponent } from './other-pages-navbar.component';

describe('OtherPagesNavbarComponent', () => {
  let component: OtherPagesNavbarComponent;
  let fixture: ComponentFixture<OtherPagesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPagesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPagesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
