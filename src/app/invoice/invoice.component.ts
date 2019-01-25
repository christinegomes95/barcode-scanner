import { AppService } from './../app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent {
    items = [];
    today = new Date();
    subTotal = 0;
    payable = 0;

    constructor(private service: AppService) {
        this.items = this.service.productList;
        this.subTotal = this.service.subtotal;
        this.payable = this.subTotal + 50;
    }
}
