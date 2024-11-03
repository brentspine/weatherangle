import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  async getForeCastForLocation(lat: Number, lon: Number) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum,wind_speed_10m_max`);
    const data = await response.json()
    return data ?? undefined;
  }

  getCurrentHour() {
    return new Date().getHours() - 1;
  }

  constructor() { }
}
