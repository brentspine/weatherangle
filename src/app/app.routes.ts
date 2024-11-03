import { Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Main Page'
  },
  {
    path: 'weather/:placeName',
    component: MainComponent,
    title: 'Weather Page'
  }
];
