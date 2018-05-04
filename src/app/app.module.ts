import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { CollapseComponent } from './collapse/collapse.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { TestComponent } from './test/test.component'; 



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AlertComponent,
    AccordeonComponent,
    CarouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownComponent,
    ModalComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
