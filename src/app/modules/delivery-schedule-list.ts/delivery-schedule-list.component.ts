import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'delivery-schedule-form',
  templateUrl: './delivery-schedule-list.component.html',
  styleUrls: ['./deliver-schedule-list.scss']
})
export class DeliveryScheduleListComponent {
  title = 'LogisticFE';

  items: any[] = [];
  /**
   *
   */
  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.requestService.getDeliveryItems()
                       .subscribe(res => {
                        this.items = res as Array<any>
                       })
  }

  deleteDeliver(id: number){
    this.requestService.deleteDeliveryItem(id).subscribe(res => this.items = this.items.filter(d => d.deliveryScheduleId !== id))
  }
}
