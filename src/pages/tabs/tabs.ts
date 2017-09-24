import {Component, ViewChild} from '@angular/core';
import {Storage} from '@ionic/storage';
import {HomePage} from '../home/home';
import {MinePage} from '../mine/mine';
import {ChatPage} from "../chat/chat";
import {Tabs, Events} from "ionic-angular";
import {DemoPage} from "../demo/demo";
import {GlobalData} from "../../providers/GlobalData";
import {Helper} from "../../providers/Helper";
import {LoginInfo} from "../../model/UserInfo";


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    @ViewChild('mainTabs') tabs: Tabs;
    testRoot: any = ChatPage;
    demoRoot: any = DemoPage;
    homeRoot: any = HomePage;
    mineRoot: any = MinePage;

    constructor(public events: Events, private globalData: GlobalData, private storage: Storage, private helper: Helper) {

    }

    ionViewWillEnter() {
        this.events.subscribe('user:login', (loginInfo: LoginInfo) => {
            let userInfo = loginInfo.user;
            this.globalData.userId = userInfo.id;
            this.globalData.username = userInfo.username;
            this.globalData.fullName = userInfo.fullName;
            if (!userInfo.avatarPath) {
                this.helper.loadAvatarPath(userInfo.avatarId).subscribe(avatarPath => {
                    userInfo.avatarPath = avatarPath;
                    this.storage.set('LoginInfo', loginInfo);
                });
            }
            this.helper.setTags();
            this.helper.setAlias(userInfo.id);
        });
    }
}
