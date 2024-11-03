import { Injectable } from '@angular/core';
import { Nominatim } from '../nominatim';

@Injectable({
  providedIn: 'root'
})
export class PlaceLookupService {

  async getNominatimForPlace(place: string|null): Promise<Nominatim[]> {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`);
    const data = await response.json()
    return data.map((d: any) => Nominatim.fromJson(d));
  }

  async getNominatimForLatLong(lat: Number, lon: Number): Promise<Nominatim> {
    // Zoom 10 -> City level
    // Otherwise we got the name of a street or an apartment
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
    const data = await response.json()
    return Nominatim.fromJson(data) ?? undefined;
  }

  async askForLocation(): Promise<{lat: number, lon: number }> {
    console.log("Tried to get location from geoLocation API");
    return new Promise((resolve, reject) => {
      // TODO: Show a prompt to the user ?
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({lat: position.coords.latitude, lon: position.coords.longitude});
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  constructor() { }
}
