export class Forecast {
  lat: number|null;
  lon: number|null;
  elevation: number|null;
  apparent_temperature: number|null;
  dew_point_2m: number|null;
  relative_humidity_2m: number|null;
  temperature_2m: number|null;
  time: string|null;
  weather_code: number|null;
  wind_speed_10m: number|null;
  temperature_2m_max: number|null;
  temperature_2m_min: number|null;
  rain_sum: number|null;
  wind_speed_10m_max: number|null;


  constructor(lat: number|null=null,
              lon: number|null=null,
              elevation: number|null=null,
              apparent_temperature: number|null=null,
              dew_point_2m: number|null=null,
              relative_humidity_2m: number|null=null,
              temperature_2m: number|null=null,
              time: string|null=null,
              weather_code: number|null=null,
              wind_speed_10m: number|null=null,
              temperature_2m_max: number|null=null,
              temperature_2m_min:number|null=null,
              rain_sum: number|null=null,
              wind_speed_10m_max: number|null=null
  ) {
    this.lat = lat;
    this.lon = lon;
    this.elevation = elevation;
    this.apparent_temperature = apparent_temperature;
    this.dew_point_2m = dew_point_2m;
    this.relative_humidity_2m = relative_humidity_2m;
    this.temperature_2m = temperature_2m;
    this.time = time;
    this.weather_code = weather_code;
    this.wind_speed_10m = wind_speed_10m;
    this.temperature_2m_max = temperature_2m_max;
    this.temperature_2m_min = temperature_2m_min;
    this.rain_sum = rain_sum;
    this.wind_speed_10m_max = wind_speed_10m_max;
  }
}
