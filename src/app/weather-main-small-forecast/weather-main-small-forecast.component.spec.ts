import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMainSmallForecastComponent } from './weather-main-small-forecast.component';

describe('WeatherMainSmallForecastComponent', () => {
  let component: WeatherMainSmallForecastComponent;
  let fixture: ComponentFixture<WeatherMainSmallForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherMainSmallForecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherMainSmallForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
