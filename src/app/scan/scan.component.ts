import { Router } from '@angular/router';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { BrowserQRCodeReader, BrowserBarcodeReader } from '@zxing/library';
import { AppService } from '../app.service';

@Component({
    selector: 'app-scan',
    templateUrl: './scan.component.html',
    styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements AfterViewInit, OnDestroy {
    codeReader = new BrowserQRCodeReader();
    barcodeReader = new BrowserBarcodeReader();
    list = [];
    showCart = 'none';

    constructor(private service: AppService, private router: Router) {
        this.list = this.service.productList;
    }

    ngAfterViewInit() {
        if (confirm('This feature requires camera permission')) {
            this.scanner();
        } else {
            this.router.navigateByUrl('home')
        }
    }

    scanner() {
        this.codeReader
            .decodeFromInputVideoDevice(undefined, 'qrvideo')
            .then(result => {
                console.log(result);
                var data: any = result;
                this.service.codeValue.push(data.text)
                if (this.service.index === this.service.titleList.length - 1) {
                    this.service.index = 0;
                } else {
                    this.service.productList.push({
                        "id": this.service.productList.length - 1, "productTitle": this.service.titleList[this.service.index], "description": this.service.codeValue[this.service.index],
                        "quantity": 1, "price": this.service.priceList[this.service.index]
                    });
                    this.service.index++;
                }

                this.list = this.service.productList;
                this.service.notifyData.next(true);
                this.showCart = 'block';
                this.codeReader.reset();
                this.barcodeReader.reset();
            })
            .catch(err => console.error(err));

        this.barcodeReader
            .decodeFromInputVideoDevice(undefined, 'barcodevideo')
            .then(result => {
                console.log(result);
                var data: any = result;
                this.service.codeValue.push(data.text)
                if (this.service.index === this.service.titleList.length - 1) {
                    this.service.index = 0;
                } else {
                    this.service.productList.push({
                        "id": this.service.productList.length - 1, "productTitle": this.service.titleList[this.service.index], "description": this.service.codeValue[this.service.index],
                        "quantity": 1, "price": this.service.priceList[this.service.index]
                    });
                    this.service.index++;
                }
                this.list = this.service.productList;
                this.service.notifyData.next(true);
                this.showCart = 'block';
                this.barcodeReader.reset();
                this.codeReader.reset();
            })
            .catch(err => console.error(err));
    }

    close() {
        this.showCart = 'none';
        this.scanner();
    }

    goToCart() {
        this.router.navigateByUrl('cart')
    }

    ngOnDestroy() {
        if (this.codeReader) {
            this.codeReader.reset();
        }
        if (this.barcodeReader) {
            this.barcodeReader.reset();
        }
    }
}
