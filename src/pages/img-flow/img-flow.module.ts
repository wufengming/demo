import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImgFlowPage } from './img-flow';
import {PreviewPicturePageModule} from "../../shared/preview-picture/preview-picture.module";

@NgModule({
  declarations: [
    ImgFlowPage,
  ],
  imports: [
    IonicPageModule.forChild(ImgFlowPage)
  ],
})
export class ImgFlowPageModule {}
