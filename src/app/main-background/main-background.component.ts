import { Component } from '@angular/core';
import {BackgroundImage} from "../models/background-image";

@Component({
  selector: 'app-main-background',
  standalone: true,
  imports: [],
  templateUrl: './main-background.component.html',
  styleUrl: './main-background.component.css'
})
export class MainBackgroundComponent {
  private readonly images: BackgroundImage[] = [
    {
      "url": "/assets/Gray_High-rise_Building_at_Night_373893.jpg",
      "credit": "Mitul Shah - Pexels",
      "credit_url": "https://commons.wikimedia.org/wiki/File:Gray_High-rise_Building_at_Night_373893.jpg"
    },
    {
      "url": "/assets/Shanghai_skyline_unsplash.jpg",
      "credit": "Adi Constantin - Unsplash",
      "credit_url": "https://commons.wikimedia.org/wiki/File:Shanghai_skyline_unsplash.jpg"
    },
    {
      "url": "/assets/The_City_London.jpg",
      "credit": "kloniwotski - Flickr",
      "credit_url": "https://de.m.wikipedia.org/wiki/Datei:The_City_London.jpg"
    },
    {
      "url": "/assets/frankfurt-city-skyline-skyscraper-5b915841fec179677b5e93dc80c0246a.jpg",
      "credit": "kloniwotski - Flickr",
      "credit_url": "https://de.m.wikipedia.org/wiki/Datei:The_City_London.jpg"
    },
    {
      "url": "/assets/52839296592_065dcb1054_6k.jpg",
      "credit": "abbilder - Flickr",
      "credit_url": "https://www.flickr.com/photos/abbilder/52839296592"
    },
    {
      "url": "/assets/rvwiesbaden1.jpg",
      "credit": "belgrano® Naturstein",
      "credit_url": "https://besco-gmbh.de/projekt/wiesbaden-vorplatz-der-rv-versicherung/"
    }
  ];
  public background: BackgroundImage = this.images[Math.floor(Math.random() * this.images.length)];
}
