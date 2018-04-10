import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTutorPageComponent } from './create-tutor-page.component';

describe('CreateTutorPageComponent', () => {
  let component: CreateTutorPageComponent;
  let fixture: ComponentFixture<CreateTutorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTutorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
