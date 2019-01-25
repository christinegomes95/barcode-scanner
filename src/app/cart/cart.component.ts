import { AppService } from './../app.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent {
    items = [];
    subTotal = 0;
    shipping = 0;
    payable = 0
    today = new Date();
    hasItems = false;
    
    constructor(private router: Router, private service: AppService) {
        this.items = this.service.productList;
        if(this.items.length !== 0) {
            this.hasItems = true;
        }
        for (let i = 0; i <= this.items.length - 1; i++) {
            this.items[i].total = this.items[i].price * this.items[i].quantity;
            this.subTotal += this.items[i].total;
            this.shipping = 50;
            this.service.subtotal = this.subTotal;
            this.payable = this.subTotal + this.shipping
        }
    }

    changeQuantity(value, list) {
        if (value === 'add') {
            for (let i = 0; i <= this.items.length - 1; i++) {
                if (this.items[i].productTitle === list.productTitle) {
                    this.items[i].quantity = this.items[i].quantity + 1
                    this.items[i].total = this.items[i].price * this.items[i].quantity;
                    this.subTotal += this.items[i].price;
                    this.service.subtotal = this.subTotal;
                    this.payable = this.subTotal + this.shipping
                }
            }
        } else {
            for (let i = 0; i <= this.items.length - 1; i++) {
                if (this.items[i].productTitle === list.productTitle) {
                    if (this.items[i].quantity > 0) {
                        this.items[i].quantity = this.items[i].quantity - 1
                        this.items[i].total = this.items[i].price * this.items[i].quantity;
                        this.subTotal -= this.items[i].price;
                        this.service.subtotal = this.subTotal;
                        this.payable = this.subTotal + this.shipping

                        if(this.items[i].quantity == 0) {
                            if(confirm("Are you sure you want to remove this item?")){
                                this.items.splice(i,1);
                                console.log(this.service.productList)

                            }
                        }
                        if(this.items.length == 0) {
                            this.hasItems = false;;
                        }
                    }
                }
            }
        }
        this.service.notifyData.next(true);
    }

    redirectToHome() {
        this.router.navigateByUrl('home');
    }

    goToScan() {
        this.router.navigateByUrl('scan');
    }

    goToInvoice() {
        this.router.navigateByUrl('invoice');
    }
}
