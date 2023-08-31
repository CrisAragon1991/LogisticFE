import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.scss']
})
export class LocationFormComponent {
  title = 'LogisticFE';
  name='';
  locationType = 1

  /**
   *
   */
  constructor(private requestService: RequestService) {
  }

  registerLocation(){
    if (this.name) {
      this.requestService.registerLocation({name: this.name, locationType: this.locationType})
                         .subscribe(res => {
                          this.name = '';
                         });
    }
  }
 }
