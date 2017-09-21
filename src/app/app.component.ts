import { Component } from '@angular/core';
import { IMarker } from './marker';

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
  marker: IMarker[];
  newMarker;
  updMarker;

  markers: IMarker[] = [
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

  clickedMarker(markers: IMarker, index: number) {
    console.log('Clicked marker ' + this.markers[index].name + ' at index ' + index);
  }

  mapClicked($event: any) {
    this.newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    };

    this.markers.push(this.newMarker);

  }

  markerDragEnd(marker: any, $event: any) {
    console.log('dragEnd', marker, $event);

    this.updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    };

    const newLat = $event.coords.lat;
    const newLng = $event.coords.lng;
  }
}
