import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceToolComponent } from './price-tool.component';

describe('PriceToolComponent', () => {
  let component: PriceToolComponent;
  let fixture: ComponentFixture<PriceToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
