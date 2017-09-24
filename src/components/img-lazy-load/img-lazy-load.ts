import {Component, Input} from '@angular/core';

/**
 * Generated class for the ImgLazyLoadComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'img-lazy-load',
  templateUrl: 'img-lazy-load.html'
})
export class ImgLazyLoadComponent {

  @Input() src: string; //要显示的图片

  default: string = 'http://temp.im/330x466/4CD964/fff';

  constructor() {
    console.log('Hello ImgLazyLoadComponent Component');
  }



  ngOnInit() {
    let img = new Image();
    img.src = this.src;
    img.onload = () => {
      //这里为了达到演示效果给了两秒的延迟，实际使用中不需要延迟
      this.default = this.src;
      // setTimeout(() => {
      //   this.default = this.src;
      // }, 2000)
    }
  }

}
