import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyoutContentComponent } from './loyout-content.component';

describe('LoyoutContentComponent', () => {
  let component: LoyoutContentComponent;
  let fixture: ComponentFixture<LoyoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyoutContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
