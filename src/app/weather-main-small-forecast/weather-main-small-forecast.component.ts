import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather-main-small-forecast',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './weather-main-small-forecast.component.html',
  styleUrl: './weather-main-small-forecast.component.css'
})
export class WeatherMainSmallForecastComponent {
  @Input () forecast: any;
  @Input () dateFormat: string | undefined;

  constructor() {}
}
