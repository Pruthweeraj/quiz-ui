import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeansComponent } from './beans.component';

describe('BeansComponent', () => {
  let component: BeansComponent;
  let fixture: ComponentFixture<BeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
