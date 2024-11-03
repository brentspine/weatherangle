export class StationInfo {
  id: string;
  icao: string;
  name: string;
  lat: string;
  lon: string;
  elev: string;

  constructor(id: string = "", icao: string = "", name: string = "", lat: string = "", lon: string = "", elev: string = "") {
    this.id = id;
    this.icao = icao;
    this.name = name;
    this.lat = lat;
    this.lon = lon;
    this.elev = elev;
  }

}
