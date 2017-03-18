import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumBtnsComponent } from './num-btns.component';

describe('NumBtnsComponent', () => {
  let component: NumBtnsComponent;
  let fixture: ComponentFixture<NumBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
