import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MODULE_ROUTES, MODULE_COMPONENT } from './app.routing';
import { SideCartComponent } from './common/side-cart/side-cart.component';
import { HeaderComponent } from './common/header/header.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SideCartComponent,
    HeaderComponent,
    MODULE_COMPONENT,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MODULE_ROUTES)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
