import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownoteComponent } from './shownote.component';

describe('ShownoteComponent', () => {
  let component: ShownoteComponent;
  let fixture: ComponentFixture<ShownoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShownoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
