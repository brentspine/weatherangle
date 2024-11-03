import {Component, Input, OnInit} from '@angular/core';
import {TitleCasePipe} from "@angular/common";
import {ForecastService} from "../services/forecast.service";
import {PlaceLookupService} from "../services/place-lookup.service";
import {WeatherMainSmallForecastComponent} from "../weather-main-small-forecast/weather-main-small-forecast.component";
import {CommonModule} from '@angular/common';
import { Forecast } from '../models/forecast';
import { Nominatim } from '../nominatim';
import { NominatimAddress } from '../nominatim-address';

@Component({
  selector: 'app-weather-main',
  standalone: true,
    imports: [WeatherMainSmallForecastComponent, CommonModule],
  templateUrl: './weather-main.component.html',
  styleUrl: './weather-main.component.css'
})
export class WeatherMainComponent implements OnInit {
  @Input() placeName!: string|null;
  @Input() lat!: number;
  @Input() lon!: number;
  hourlyForecast: Forecast[] = [];
  dailyForecast: Forecast[] = [];
  temperature: number = 0;
  elev: number = 0;
  dateFormat = 'hh:mm a';
  currentHour = new Date().getHours();
  searchSuggestions: Nominatim[] = [];
  private searchIdleTimer: any;
  nominatim = new Nominatim();

  constructor(
    private foreCastService: ForecastService,
    private placeLookupService: PlaceLookupService) {}

  ngOnInit() {
    this.init();
  }

  private async init() {
    if((!this.lat || !this.lon) && (!this.placeName || this.placeName.length == 0)) {
      let p = this.placeLookupService.askForLocation();
      p.then((data) => {
        this.lat = data.lat;
        this.lon = data.lon;
        this.loadMissingPlaceInfo();
      }).catch((error) => {
        this.placeName = "Mallorca";
        document.getElementById("geolocation-notice")?.classList.remove("hidden");
        this.refreshOnLocationAllow();
        this.loadMissingPlaceInfo();
      });
    } else {
      this.loadMissingPlaceInfo()
    }
  }

  private locationCheckTimer: any;
  private refreshOnLocationAllow() {
    this.locationCheckTimer = setInterval(() => {
      let p = this.placeLookupService.askForLocation();
      p.then((data) => {
        // Refresh
        window.location.reload();
        // Stop this interval
        clearInterval(this.locationCheckTimer);
      });
    }, 1000);
  }

  private loadMissingPlaceInfo() {
    if(!this.lat || !this.lon) {
      let locations = this.placeLookupService.getNominatimForPlace(this.placeName);
      locations.then((data: any) => {
        if(data.length <= 0) {
          this.onPlaceNotFound();
          return;
        }
        this.lat = data[0].lat;
        this.lon = data[0].lon;
        this.placeName = data[0].name;
        this.nominatim = data[0];
        this.loadForeCast();
      });
    }
    else if(!this.placeName || this.placeName.length == 0) {
      let location = this.placeLookupService.getNominatimForLatLong(this.lat, this.lon);
      // Todo show error no place found
      if(location == undefined) {
        this.onPlaceNotFound();
        return;
      }
      location.then((data: any) => {
        this.placeName = data.name;
        this.loadForeCast();
      });
    }
    else {
      this.loadForeCast();
    }
  }

  private onPlaceNotFound() {
    // @ts-ignore
    document.querySelector(".weather-details").innerHTML = "<h1>404 - Place not found</h1><p>Sorry, we couldn't find the place you're looking for</p>";
  }

  private loadForeCast() {
    this.foreCastService.getForeCastForLocation(this.lat, this.lon).then((forecasts: any) => {
      this.elev = forecasts.elev ?? 0;
      for (let i = 0; i < forecasts.hourly.time.length; i++) {
        this.hourlyForecast.push(new Forecast(
          this.lat,
          this.lon,
          this.elev,
          forecasts.hourly.apparent_temperature[i],
          forecasts.hourly.dew_point_2m[i],
          forecasts.hourly.relative_humidity_2m[i],
          forecasts.hourly.temperature_2m[i],
          forecasts.hourly.time[i],
          forecasts.hourly.weather_code[i],
          forecasts.hourly.wind_speed_10m[i]
        ));
      }
      for(let i = 0; i < forecasts.daily.time.length; i++) {
        this.dailyForecast.push(new Forecast(
          this.lat,
          this.lon,
          this.elev,
          null,
          null,
          null,
          null,
          forecasts.daily.time[i],
          forecasts.daily.weather_code[i],
          null,
          forecasts.daily.temperature_2m_max[i] ?? 0,
          forecasts.daily.temperature_2m_min[i] ?? 0,
          forecasts.daily.rain_sum[i] ?? 0,
          forecasts.daily.wind_speed_10m_max[i] ?? 0
        ));
      }
      this.temperature = forecasts.current.temperature_2m;
    });
  }

  onLocationTyping(event: KeyboardEvent) {
    return;
    /*
    if(event.target == null) return;
    let target = event.target as HTMLInputElement;
    target.style.width = ((target.value.length + 1) * 1.5) + 'rem';
    this.resetSearchTimer();
    */
  }

  private resetSearchTimer() {
    clearTimeout(this.searchIdleTimer);
    this.searchIdleTimer = setTimeout(this.doSuggestionQuery.bind(this), 500);
  }

  doSuggestionQuery() {
    let value: string = (document.getElementById('location-search') as HTMLInputElement)?.value ?? '';
    if(value.length == 0) {
      this.searchSuggestions = [];
      return;
    }
    this.placeLookupService.getNominatimForPlace(value).then((data: Nominatim[]) => {
      // Remove objects with same name attribute
      this.searchSuggestions = data.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.name === value.name
          ))
      );
    });
  }

  onSearchSuggestionClick(event: Nominatim) {
    // Todo
    return;
  }

  onSearch() {
    let value: string = (document.getElementById('location-search') as HTMLInputElement)?.value ?? '';
    if(value.length == 0) {
      window.location.href = '/';
      return false;
    }
    // Redirect to /weather/:placeName
    window.location.href = `/weather/${value}`;
    return false;
  }
}

