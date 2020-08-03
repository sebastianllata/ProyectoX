import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemlplateComponent } from './temlplate.component';

describe('TemlplateComponent', () => {
  let component: TemlplateComponent;
  let fixture: ComponentFixture<TemlplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemlplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemlplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
