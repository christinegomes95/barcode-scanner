import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class AppService {
    public notifyData = new BehaviorSubject<any>("");
    codeValue = [];
    titleList = ["Health Drink - Millet Vita","Rusk - Suji & Elaichi","Bikaneri Bhujia Sev","Khari - Jeera","Biscuits - Cashew Nut","Baby Wipes - Cherry Blossom","Healthy Pasta - Quinoa"];
    priceList = [32,74,26,89,45,120,240];
    imgList = [];
    productList = [];
    subtotal = 0;
    index = 0;
}