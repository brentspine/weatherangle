import { NominatimAddress } from "./nominatim-address";

export class Nominatim {

  address: NominatimAddress;
  boundingbox: string[];
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;

  constructor() {
    this.address = new NominatimAddress();
    this.boundingbox = [];
    this.class = '';
    this.display_name = '';
    this.importance = 0;
    this.lat = '';
    this.licence = '';
    this.lon = '';
    this.name = '';
    this.osm_id = 0;
    this.osm_type = '';
    this.place_id = 0;
    this.place_rank = 0;
    this.type = '';
  }

  static fromJson(json: any): Nominatim {
    try {
      let nominatim = new Nominatim();
      nominatim.address = NominatimAddress.fromJson(json.address);
      nominatim.boundingbox = json.boundingbox;
      nominatim.class = json.class;
      nominatim.display_name = json.display_name;
      nominatim.importance = json.importance;
      nominatim.lat = json.lat;
      nominatim.licence = json.licence;
      nominatim.lon = json.lon;
      nominatim.name = json.name;
      nominatim.osm_id = json.osm_id;
      nominatim.osm_type = json.osm_type;
      nominatim.place_id = json.place_id;
      nominatim.place_rank = json.place_rank;
      nominatim.type = json.type;
      return nominatim;
    }
    catch (e) {
      console.error(e);
      return new Nominatim();
    }
  }

}
