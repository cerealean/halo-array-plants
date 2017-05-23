import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantInformationComponent } from './plant-information.component';

describe('PlantInformationComponent', () => {
  let component: PlantInformationComponent;
  let fixture: ComponentFixture<PlantInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
