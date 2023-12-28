import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentScanningComponent } from './component-scanning.component';

describe('ComponentScanningComponent', () => {
  let component: ComponentScanningComponent;
  let fixture: ComponentFixture<ComponentScanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentScanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentScanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
