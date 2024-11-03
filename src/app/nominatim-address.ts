export class NominatimAddress {

  isolvl4: string;
  country: string;
  country_code: string;
  county: string;
  postcode: string;
  state: string;
  town: string;

  constructor() {
    this.isolvl4 = '';
    this.country = '';
    this.country_code = '';
    this.county = '';
    this.postcode = '';
    this.state = '';
    this.town = '';
  }

  static fromJson(json: any): NominatimAddress {
    try {
      let address = new NominatimAddress();
      address.isolvl4 = json["ISO3166-2-lvl4"];
      address.country = json.country;
      address.country_code = json.country_code;
      address.county = json.county;
      address.postcode = json.postcode;
      address.state = json.state;
      address.town = json.town;
      return address;
    } catch (e) {
      return new NominatimAddress();
    }
  }

}
