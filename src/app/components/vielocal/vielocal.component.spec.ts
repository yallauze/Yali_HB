import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VielocalComponent } from './vielocal.component';

describe('VielocalComponent', () => {
  let component: VielocalComponent;
  let fixture: ComponentFixture<VielocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VielocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VielocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
