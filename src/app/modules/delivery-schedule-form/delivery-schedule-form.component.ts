import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'delivery-schedule-form',
  templateUrl: './delivery-schedule-form.component.html',
  styleUrls: ['./deliver-schedule-form.scss']
})
export class DeliveryScheduleFormComponent {
  title = 'LogisticFE';
  products:any[] = []
  locations:any[] = []
  users: any[] = []
  productCategoryId: number = 0
  productQuantity = undefined
  deliveryDate = undefined
  locationId = undefined
  price = 0
  transportId = undefined
  guideNumber = undefined
  userId = 0
  routeId = undefined
  /**
   *
   */
  constructor(private requestService: RequestService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.requestService.getProductsCategory().subscribe(res => this.products = res as any[])
    this.requestService.getLocations().subscribe(res => this.locations = res as any[])
    this.requestService.getUsers().subscribe(res => this.users = res as any[])
    this.routeId = this.activatedRoute.snapshot.params['id'];
    if (this.routeId) {
      this.requestService.getDeliveryItemById(this.routeId).subscribe((res) => {
        this.productCategoryId = (res as any).productCategoryId,
        this.productQuantity = (res as any).productQuantity,
        this.deliveryDate = (res as any).deliveryDate,
        this.locationId = (res as any).locationId,
        this.price = (res as any).price,
        this.transportId = (res as any).transportId,
        this.guideNumber = (res as any).guideNumber,
        this.userId = (res as any).userId
      });
    }
  }

  registerDelivery() {
    if (this.productCategoryId && this.productQuantity && this.deliveryDate && this.locationId && this.price && this.transportId && this.guideNumber && this.userId) {
      this.requestService.registerDeliverySchedule({
        productCategoryId: this.productCategoryId,
        productQuantity: this.productQuantity,
        deliveryDate: this.deliveryDate,
        locationId: this.locationId,
        price: this.price,
        transportId: this.transportId,
        guideNumber: this.guideNumber,
        userId: this.userId
      }).subscribe(res => {
        this.productCategoryId = 0
        this.productQuantity = undefined
        this.deliveryDate = undefined
        this.locationId = undefined
        this.price = 0
        this.transportId = undefined
        this.guideNumber = undefined
        this.userId = 0
      });
    }
  }
}
