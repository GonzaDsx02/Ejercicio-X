import { Injectable } from '@angular/core';
import { Places } from '../models/places';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  places: Array<Places> = [];

  constructor() {
    var place = new Places();
    place.municipio="tepic"
    place.name="villas"
    place.type="ciudad"
    place.rest=true
    place.restNumber=5
    place.description="chido"
    this.places.push(place)    
  }

  public addPlace(place: Places) {
    this.places.push(place)
  }
}
