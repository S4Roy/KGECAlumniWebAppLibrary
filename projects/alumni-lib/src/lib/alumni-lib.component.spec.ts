import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniLibComponent } from './alumni-lib.component';

describe('AlumniLibComponent', () => {
  let component: AlumniLibComponent;
  let fixture: ComponentFixture<AlumniLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
