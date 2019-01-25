
import { Route, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CartComponent } from "./cart/cart.component";
import { ScanComponent } from "./scan/scan.component";
import { InvoiceComponent } from "./invoice/invoice.component";

export const MODULE_ROUTES: Route[] = [
    {path: 'home', component: DashboardComponent},
    {path: 'cart', component: CartComponent},
    {path: 'scan', component: ScanComponent},
    {path: 'invoice', component: InvoiceComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const MODULE_COMPONENT = [
    DashboardComponent,
    ScanComponent,
    InvoiceComponent,
    CartComponent
];