import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantGrowth } from './plant-growth.component';

describe('PlantGrowthComponent', () => {
  let component: PlantGrowth.PlantGrowthComponent;
  let fixture: ComponentFixture<PlantGrowth.PlantGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantGrowth.PlantGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantGrowth.PlantGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
