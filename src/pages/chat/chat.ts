import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Nav, MenuController} from 'ionic-angular';
import {TestPage} from "../test/test";
import {StartPage} from "../start/start";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {
    @ViewChild(Nav) nav: Nav;
    chatRootPage: any = TestPage;

    pages: Array<{title: string, component: any}>;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public menu: MenuController,) {

        // 左侧菜单
        this.pages = [
            {title: 'StartPage', component: StartPage},
            {title: 'TabsPage', component: TestPage}
        ];

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatPage');
    }


    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}
