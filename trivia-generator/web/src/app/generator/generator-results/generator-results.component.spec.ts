import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorResultsComponent } from './generator-results.component';

describe('GeneratorResultsComponent', () => {
  let component: GeneratorResultsComponent;
  let fixture: ComponentFixture<GeneratorResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
