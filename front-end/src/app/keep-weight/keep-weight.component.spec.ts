import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepWeightComponent } from './keep-weight.component';

describe('KeepWeightComponent', () => {
  let component: KeepWeightComponent;
  let fixture: ComponentFixture<KeepWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeepWeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
