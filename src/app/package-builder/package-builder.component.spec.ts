import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBuilderComponent } from './package-builder.component';

describe('PackageBuilderComponent', () => {
  let component: PackageBuilderComponent;
  let fixture: ComponentFixture<PackageBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
