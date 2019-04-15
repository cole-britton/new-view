import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBuilderComponent } from './project-builder.component';

describe('ProjectBuilderComponent', () => {
  let component: ProjectBuilderComponent;
  let fixture: ComponentFixture<ProjectBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
