import { NgModule } from '@angular/core';
import { ImgLazyLoadComponent } from './img-lazy-load/img-lazy-load';
import { ProductsListComponent } from './products-list/products-list';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	declarations: [
		ImgLazyLoadComponent,
    	ProductsListComponent
	],
	imports: [BrowserModule],
	exports: [
		ImgLazyLoadComponent,
    	ProductsListComponent
	]
})
export class ComponentsModule {}
