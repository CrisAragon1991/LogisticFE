import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'product-category-form',
  templateUrl: './product-category-form.component.html',
  styleUrls: ['./product-category-form.scss']
})
export class ProductCategoryFormComponent {
  title = 'LogisticFE';
  name = '';

  /**
   *
   */
  constructor(private requestService: RequestService) {
  }

  registerCategory(){
    if (this.name) {
      this.requestService.registerProductCategory({name: this.name})
                         .subscribe(res => this.name = '');
    }
  }
}
