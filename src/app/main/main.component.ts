import { Component, inject } from '@angular/core';
import {MainBackgroundComponent} from "../main-background/main-background.component";
import {MainHeaderComponent} from "../main-header/main-header.component";
import {StationInfoService} from "../services/station-info.service";
import {TitleCasePipe} from "@angular/common";
import {ForecastService} from "../services/forecast.service";
import {StationInfo} from "../models/station-info";
import {PlaceLookupService} from "../services/place-lookup.service";
import {WeatherMainComponent} from "../weather-main/weather-main.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MainBackgroundComponent,
    MainHeaderComponent,
    TitleCasePipe,
    WeatherMainComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  //placeName: string = localStorage.getItem("placeName") ?? "";
  placeName: string = "";
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.placeName = this.route.snapshot.params['placeName'] ?? '';
  }
}
