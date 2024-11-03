import { Injectable } from '@angular/core';
import {StationInfo} from "../models/station-info";

@Injectable({
  providedIn: 'root'
})
export class StationInfoService {
  protected readonly stationUrl = 'https://brentspine.github.io/public-uploads/weather-angle-stations.json';

  constructor() { }

  public async getStationInfo(id: String): Promise<StationInfo> {
    const response = await fetch(this.stationUrl);
    const data = await response.json();
    if (data == undefined) {
      return new StationInfo();
    }
    return data.filter(
        function (d: { id: String; }) {
          return d.id == id;
        }
    )[0] ?? undefined;
  }
}
