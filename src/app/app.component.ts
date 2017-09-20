import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Zoom Level
  zoom = 8;

  // Start Position
  lat = 41.7151;
  lng = 44.8271;
  markers: marker[] = [
    {
      name: 'Tbilisi',
      lat: 41.7151,
      lng: 44.8271,
      draggable: true
    },
    {
      name: 'Kutaisi',
      lat: 42.26791,
      lng: 42.69459,
      draggable: true
    },
    {
      name: 'Batumi',
      lat: 41.6168,
      lng: 41.6367,
      draggable: true
    }
  ];

  constructor() {

  }
}

// Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
