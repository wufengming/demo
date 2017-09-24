import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, Config} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';
import {MyApp} from './app.component';

import {TabModule} from "../pages/tabs/tab.module";
import {StartModule} from "../pages/start/start.module";
import {LoginModule} from '../pages/login/login.module';
import {HomeModule} from '../pages/home/home.module';
import {DemoModule} from "../pages/demo/demo.module";
import {MineModule} from '../pages/mine/mine.module';
import {ChatPageModule} from "../pages/chat/chat.module";
//import {ComponentsModule} from "../components/components.module";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppVersion} from '@ionic-native/app-version';
import {Camera} from '@ionic-native/camera';
import {Toast} from '@ionic-native/toast';
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {ImagePicker} from '@ionic-native/image-picker';
import {Network} from '@ionic-native/network';
import {AppMinimize} from '@ionic-native/app-minimize';
import {JPush} from "../../typings/modules/jpush/index";
import {Diagnostic} from "@ionic-native/diagnostic";

import {NativeService} from "../providers/NativeService";
import {HttpService} from "../providers/HttpService";
import {FileService} from "../providers/FileService";
import {Helper} from "../providers/Helper";
import {Utils} from "../providers/Utils";
import {TestModule} from "../pages/test/test.module";
import {HttpModule} from "@angular/http";

import {GlobalData} from "../providers/GlobalData";
import {ENABLE_FUNDEBUG, IS_DEBUG, FUNDEBUG_API_KEY} from "../providers/Constants";
import {Logger} from "../providers/Logger";
import {ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave} from "./modal-transitions";



//安装依赖:cnpm i fundebug-javascript --save
//https://docs.fundebug.com/notifier/javascript/framework/ionic2.html
declare var require: any;
let fundebug: any = require("fundebug-javascript");
fundebug.apikey = FUNDEBUG_API_KEY;
fundebug.releasestage = IS_DEBUG ? 'development' : 'production';//应用开发阶段，development:开发;production:生产
fundebug.silent = !ENABLE_FUNDEBUG;//如果暂时不需要使用Fundebug，将silent属性设为true

export class FunDebugErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        fundebug.notifyError(err);
        console.error(err);
    }
}

/**
 *declarations（声明一下这个模块内部成员）：本模块中拥有的视图类。angular 有三种视图类：Components(组件)、Directives(指令)、Pipes(管道);
 *exports：暴露该模块中的组件，指令以及管道等, 以便提供给其他Angular2模块使用
 *providers：模块内部成员能够访问使用的Service；内部和外部Service都可以放在这里声明，因为Service的权限控制依赖于ng的DI而不是module。
 *imports：导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
 *bootstrap：根组件,此处声明当模块启动加载的时候同时执行启动加载的组件，这些组件会自动添加到entryComponents中。
 *entryCompoenents: 声明在模块定义时进行编译的组件，当模块加载的时候回生成ComponentFactory并保存在ComponentFactoryResolver，使用ComponentFactoryResolver创建组件的时候应该现在此处进行声明。
 declarations: [],   // 用到的组件，指令，管道
 providers: [],      // 依赖注入服务
 imports: [],        // 导入需要的模块
 exports: [],        // 导出的模块，跨模块交流
 entryComponents: [] // 需提前编译好的模块
 bootstrap: []       // 设置根组件
 */

@NgModule({
    declarations: [MyApp],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios',//android是'md'
            backButtonText: ''
        }),
        IonicStorageModule.forRoot(),
        StartModule,
        TabModule,
        LoginModule,
        HomeModule,
        DemoModule,
        MineModule,
        TestModule,
        ChatPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [MyApp],
    providers: [
        StatusBar,
        SplashScreen,
        AppVersion,
        Camera,
        Toast,
        File,
        Transfer,
        InAppBrowser,
        ImagePicker,
        Network,
        AppMinimize,
        JPush,
        Diagnostic,
        {provide: ErrorHandler, useClass: FunDebugErrorHandler},
        NativeService,
        HttpService,
        FileService,
        Helper,
        Utils,
        GlobalData,
        Logger
    ]
})
export class AppModule {
    constructor(public config: Config) {
        this.setCustomTransitions();
    }

    private setCustomTransitions() {
        this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
        this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
        this.config.setTransition('modal-scale-enter', ModalScaleEnter);
        this.config.setTransition('modal-scale-leave', ModalScaleLeave);
    }
}
