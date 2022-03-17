import { Component } from '@angular/core';
import { Places } from '../models/places';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  municipio: string
  type: string
  name: string
  rest: boolean
  restNumber: number
  description: string

  constructor(private appService: AppService) {
    this.municipio=""
    this.name=""
    this.type=""
    this.rest=false
    this.restNumber=1
    this.description=""
  }

  public save(){        
    var place = new Places()
    place.municipio=this.municipio
    place.type=this.type
    place.name=this.name
    place.rest=this.rest
    place.restNumber=this.restNumber
    place.description=this.description
    this.appService.addPlace(place)
    this.municipio=""
    this.name=""
    this.type=""
    this.rest=false
    this.restNumber=1
    this.description=""
    //console.log(this.municipio+"\n"+this.type+"\n"+this.name+"\n"+this.rest+"\n"+this.restNumber+"\n"+this.description)
  }

}
