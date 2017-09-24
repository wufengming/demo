import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {SliderTabPage} from "./slider-tab/slider-tab";
import {ImgFlowPage} from "../img-flow/img-flow";
import {ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject} from '@ionic-native/themeable-browser';
import {BrowserServiceProvider} from "../../providers/browser-service";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //ionic2-rating初始化的值
  private rate: number = 3;

  //打开页面
  url: string = 'http://www.baidu.com';


  //商品列表
  products: Array<any>;
  hasmore = true;
  params = {
    pageNo: 1,
    favoritesId: 0,
  };
  spinner1: boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,) {

  }

  //初始化页面
  ngOnInit() {
    console.log('ngOnInit HomePage');
  }

  ionViewDidLoad() {
    this.getFavoritesItems();
    console.log('ionViewDidLoad HomePage');
  }

  getFavoritesItems() {
    this.products = [
      {PictUrl: 'assets/img/1.jpg', Title: '标题1', ZkFinalPrice: '10', ReservePrice: '10'},
      {PictUrl: 'assets/img/2.jpg', Title: '标题2', ZkFinalPrice: '11', ReservePrice: '11'},
      {PictUrl: 'assets/img/3.jpg', Title: '标题3', ZkFinalPrice: '12', ReservePrice: '12'},
      {PictUrl: 'assets/img/4.jpg', Title: '标题4', ZkFinalPrice: '13', ReservePrice: '13'}
    ];

    this.params.pageNo += 1;
    this.spinner1 = false;
  }

  /**
   * 滚动到底部加载数据
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll) {
    if (this.hasmore == false) {
      infiniteScroll.complete();
      return;
    }

    if (this.params.pageNo <= 5) {
      this.products = this.products.concat([
        {PictUrl: 'assets/img/1.jpg', Title: '标题1', ZkFinalPrice: '10', ReservePrice: '10'},
        {PictUrl: 'assets/img/2.jpg', Title: '标题2', ZkFinalPrice: '11', ReservePrice: '11'},
      ]);
      this.params.pageNo += 1;

      console.log(this.params.pageNo);

    } else {
      this.hasmore = false;
      console.log("没有数据啦！")
    }
    infiniteScroll.complete();
  }

  /**
   * 下拉刷新
   */
  doRefresh() {
    this.params.pageNo = 0;
  }

  /**
   * ionic2-rating 的change事件
   * @param evn
   */
  onModelChange(evn:any){

    console.log(evn);
  }


  /**
   *   ThemeableBrowser 案例
   */
  goBuy() {

    let browser: ThemeableBrowserObject = new BrowserServiceProvider(this.url, [
      {
        image: 'share',
        imagePressed: 'share_pressed',
        align: 'right',
        event: 'sharePressed'
      }
    ], {
      image: 'menu',
      imagePressed: 'menu_pressed',
      title: 'Test',
      cancel: 'Cancel',
      align: 'right',
      items: [
        {
          event: 'helloPressed',
          label: 'Hello World!'
        },
        {
          event: 'testPressed',
          label: 'Test8!'
        }
      ]
    }).launch();

    browser.on('sharePressed').subscribe((data) => {

      alert('share');
    }, (err) => {

      alert('share:error');
      console.error('onError');
    });

  }

  /**
   *  tab样式的布局页面
   */
  sliderTab(){
    this.navCtrl.push(SliderTabPage);
  }

  //跳转到瀑布流图片
  pageAbout() {
    this.navCtrl.push(ImgFlowPage);
  }
}
