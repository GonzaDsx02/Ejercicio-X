import { Component } from '@angular/core';
import { Places } from '../models/places';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {  
  places: Array<Places>
  type: string
  constructor(private appService: AppService) {
    this.places = appService.places    
    this.type=""
  }    

  public ver(){
    console.log(this.type)
    
  }

}
