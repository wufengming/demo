import {NgModule} from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';

//页面
import {SliderTabPageModule} from "./slider-tab/slider-tab.module";

//指令
import { MyPipe } from "../../pipes/my";


//组件
import { AutoFitLayout } from "../../components/auto-fit-layout/auto-fit-layout";
import { FlashCardComponent } from '../../components/flash-card/flash-card';
import { IonProductsComponent } from '../../components/ion-products/ion-products';
import { Ionic2RatingModule } from 'ionic2-rating';
import {ImgFlowPageModule} from "../img-flow/img-flow.module";
import {ComponentsModule} from "../../components/components.module";



@NgModule({
  imports: [
    IonicModule,
    Ionic2RatingModule,
    SliderTabPageModule,
    ImgFlowPageModule,
    ComponentsModule

  ],
  declarations: [
    HomePage,
    MyPipe,
    AutoFitLayout,
    FlashCardComponent,
    IonProductsComponent
  ],
  entryComponents: [HomePage],
  providers: [],
  exports: [IonicModule]
})
/*@NgModule({
  declarations: [
    HomePage,
    MyPipe,
    AutoFitLayout,
    FlashCardComponent,
    IonProductsComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    Ionic2RatingModule
  ],
})*/

export class HomeModule {
}
