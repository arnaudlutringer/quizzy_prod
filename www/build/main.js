webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_category__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facebook_facebook_service__ = __webpack_require__(279);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__category_category__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__facebook_facebook_service__["a"]; });



//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook_ngx__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_providers__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_page_transitions__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["e" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["d" /* ProfileCommentsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["c" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["b" /* GameLoaderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["h" /* ReplyPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["g" /* ReplyLoaderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["f" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["j" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["i" /* SettingsInterestsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    mode: 'ios'
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__quizzydb'
                    //driverOrder: ['localstorage' ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["e" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["d" /* ProfileCommentsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["c" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["b" /* GameLoaderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["h" /* ReplyPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["g" /* ReplyLoaderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["f" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["j" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pages__["i" /* SettingsInterestsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_8__providers_providers__["a" /* CategoryProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook_ngx__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_8__providers_providers__["b" /* FacebookService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["e" /* ProfilePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProfilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(104);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, facebook) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.facebook = facebook;
        _this.state = "hide";
        _this.doughnut = [1000, 2000, 3000];
        _this.mock();
        _this.calculateTaux();
        return _this;
    }
    ProfilePage.prototype.makeShow = function (id) {
        if (this.state == id) {
            this.state = null;
        }
        else {
            this.state = id;
        }
    };
    ProfilePage.prototype.play = function (index) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_4__pages__["b" /* GameLoaderPage */], 'forward', { 'friend': this.friends[index] });
    };
    ProfilePage.prototype.mock = function () {
        this.friends = [{
                'id': 1,
                'usualName': 'Shaba',
                'description': 'Recordman du CO',
                'account_image': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/person.png',
                'score': 55,
                'answers': {
                    'good': 4,
                    'bad': 6,
                    'not_played': 30
                },
                'comments': [{
                        'date': '22/01/2019 19:10',
                        'message': 'Coucou',
                        'me': true
                    }, {
                        'date': '22/01/2019 21:10',
                        'message': 'Bah quoi il est pas beau mon quizz ?',
                        'me': false,
                    }, {
                        'date': '23/01/2019 22:10',
                        'message': 'Coucou',
                        'me': true
                    }, {
                        'date': '23/01/2019 22:11',
                        'message': 'Bah quoi il est pas beau mon quizz ?',
                        'me': false,
                    }, {
                        'date': '22/01/2019 19:10',
                        'message': 'Coucou',
                        'me': true
                    }, {
                        'date': '22/01/2019 21:10',
                        'message': 'Bah quoi il est pas beau mon quizz ?',
                        'me': false,
                    }, {
                        'date': '23/01/2019 22:10',
                        'message': 'Coucou',
                        'me': true
                    }, {
                        'date': '23/01/2019 22:11',
                        'message': 'Bah quoi il est pas beau mon quizz ?',
                        'me': false,
                    }, {
                        'date': '22/01/2019 19:10',
                        'message': 'Coucou',
                        'me': true
                    }, {
                        'date': '22/01/2019 21:10',
                        'message': 'Bah quoi il est pas beau mon quizz ?',
                        'me': false,
                    }, {
                        'date': '23/01/2019 22:10',
                        'message': 'Coucou',
                        'me': true
                    }, {
                        'date': '23/01/2019 22:11',
                        'message': 'Bah quoi il est pas beau mon quizz ?',
                        'me': false,
                    }],
                'his_score': {
                    'score': 24,
                    'answers': {
                        'good': 4,
                        'bad': 66,
                        'not_played': 12
                    }
                }
            },
            {
                'id': 2,
                'usualName': 'Morgane',
                'description': 'Recordman de la lutte',
                'account_image': 'https://cdn2.iconfinder.com/data/icons/marriage-life/500/marry-512.png',
                'score': 70,
                'answers': {
                    'good': 34,
                    'bad': 16,
                    'not_played': 0
                },
                'comments': [],
                'his_score': {
                    'score': 1,
                    'answers': {
                        'good': 1,
                        'bad': 10,
                        'not_played': 1
                    }
                }
            },
            {
                'id': 3,
                'usualName': 'Gwladys',
                'description': 'Je n\'oublie jamais ;)',
                'account_image': 'https://cdn0.iconfinder.com/data/icons/avatar-25/64/avatar-business-woman-girl-blonde-512.png',
                'score': 12,
                'answers': {
                    'good': 4,
                    'bad': 16,
                    'not_played': 2
                },
                'comments': [],
                'his_score': {
                    'score': 78,
                    'answers': {
                        'good': 40,
                        'bad': 6,
                        'not_played': 1
                    }
                }
            }];
    };
    ProfilePage.prototype.calculateTaux = function () {
        for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
            var friend = _a[_i];
            var good = friend.answers.good;
            var bad = friend.answers.bad;
            var not_played = friend.answers.not_played;
            var total = good + bad + not_played;
            friend.taux = {
                'good': Math.floor(good / total * 100),
                'bad': Math.floor(bad / total * 100),
                'not_played': Math.floor(not_played / total * 100)
            };
            good = friend.his_score.answers.good;
            bad = friend.his_score.answers.bad;
            not_played = friend.his_score.answers.not_played;
            total = good + bad + not_played;
            friend.his_score.taux = {
                'good': Math.floor(good / total * 100),
                'bad': Math.floor(bad / total * 100),
                'not_played': Math.floor(not_played / total * 100)
            };
        }
    };
    ProfilePage.prototype.modalComments = function (friend) {
        var commentsModal = this.modalCtrl.create(ProfileCommentsPage, { friend: friend });
        commentsModal.present();
    };
    ProfilePage.prototype.connectFb = function () {
        alert('a');
        this.facebook.loginFB();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\profile\profile.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-row>\n			<ion-col col-3 class="active"><ion-icon name="people"></ion-icon></ion-col>\n			<ion-col col-3 (click)="goToQuestions(\'forward\')"><ion-icon name="play"></ion-icon></ion-col>\n			<ion-col col-3><ion-icon name="search"></ion-icon></ion-col>\n			<ion-col col-3 (click)="goToSettings(\'forward\')"><ion-icon name="settings"></ion-icon></ion-col>\n		</ion-row>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card class="card-friend" *ngFor="let friend of friends; let i = index">\n		<ion-item class="friend-item">\n			<ion-row (click)="makeShow(friend.id)">\n				<ion-col col-8>\n					<ion-avatar item-start float-left>\n						<img src="{{friend.account_image}}">\n					</ion-avatar>\n					<div class="align-left-center">\n						<div><strong>{{friend.usualName}}</strong><br/><span class="description">{{friend.description}}</span></div>\n					</div>\n				</ion-col>\n				<ion-col col-3>\n					<div class="align-center-center">\n						<div style="width:100%">\n							<strong text-center>{{friend.score}} pts.</strong>\n							<div col-12 class="card-header-info">\n								<div class="good" [style.width]="friend.taux.good + \'%\'">&nbsp;</div>\n							</div>\n							<div col-12 class="card-header-info">\n								<div class="bad" [style.width]="friend.taux.bad + \'%\'">&nbsp;</div>\n							</div>\n							<div col-12 class="card-header-info">\n								<div class="not-played" [style.width]="friend.taux.not_played + \'%\'">&nbsp;</div>\n							</div>\n						</div>\n					</div>\n				</ion-col>\n				<ion-col col-1>\n					<div class="align-center-center" *ngIf="state != friend.id"><ion-icon name="arrow-down"></ion-icon></div>\n					<div class="align-center-center"  *ngIf="state == friend.id"><ion-icon name="arrow-up"></ion-icon></div>\n				</ion-col>\n			</ion-row>\n		</ion-item>\n		<div [style.display]="state == friend.id ? \'block\' : \'none\'">\n			<ion-card-content>\n				<ion-row>\n					<ion-col col-auto >\n						<div class="score">{{friend.score}} pts.</div>\n					</ion-col>\n					<ion-col col-auto>\n						<div class="details good">{{friend.answers.good}} bonnes réponses</div>\n						<div class="details bad">{{friend.answers.bad}} mauvaises réponses</div>\n						<div class="details error">{{friend.answers.not_played}} non répondues</div>\n					</ion-col>\n				</ion-row>\n\n				<ion-row class="friend-score">\n					<ion-col col-10 class="align-right-center">\n						Score de {{friend.usualName}} : {{friend.his_score.score}} pts.\n					</ion-col>\n					<ion-col col-2>\n						<div class="align-center-center">\n							<div style="width:100%">\n								<div col-12 class="card-header-info">\n									<div class="good" [style.width]="friend.his_score.taux.good + \'%\'">&nbsp;</div>\n								</div>\n								<div col-12 class="card-header-info">\n									<div class="bad" [style.width]="friend.his_score.taux.bad + \'%\'">&nbsp;</div>\n								</div>\n								<div col-12 class="card-header-info">\n									<div class="not-played" [style.width]="friend.his_score.taux.not_played + \'%\'">&nbsp;</div>\n								</div>\n							</div>\n						</div>\n					</ion-col>\n				</ion-row>\n				<!--<p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>-->\n			</ion-card-content>\n			<ion-row class="actions">\n				<ion-col col-4>\n					<button ion-button icon-start clear small>\n						<ion-icon name="share"></ion-icon>\n						<div>Partager</div>\n					</button>\n				</ion-col>\n				<ion-col col-4 text-center>\n					<button ion-button icon-start clear small (click)="modalComments(friend)">\n						<ion-icon name="text"></ion-icon>\n						<div>{{friend.comments?.length}} Comments</div>\n					</button>\n				</ion-col>\n				<ion-col col-4 align-self-center text-center>\n					<button ion-button icon-start clear small (click)="play(i)">\n						<ion-icon name="play"></ion-icon>\n						<div>Jouer</div>\n					</button>\n				</ion-col>\n			</ion-row>\n		</div>\n	</ion-card>\n	<button (click)="connectFb()" ion-button button-lg> FB</button>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["b" /* FacebookService */]])
    ], ProfilePage);
    return ProfilePage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

var ProfileCommentsPage = /** @class */ (function (_super) {
    __extends(ProfileCommentsPage, _super);
    function ProfileCommentsPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.friend = _this.params.get('friend');
        _this.me = {
            'account_image': 'http://img.over-blog.com/481x500/4/04/49/24/Nov2010/winnie-the-pooh.jpg',
        };
        console.log(_this.chat);
        return _this;
    }
    ProfileCommentsPage.prototype.ionViewWillEnter = function () {
        this.content.scrollTo(0, 400000, 10, function () { });
    };
    ProfileCommentsPage.prototype.sendMessage = function () {
        this.friend.comments.push({
            'date': this.toDateFormat(new Date()),
            'message': this.message,
            'me': true
        });
        this.message = '';
        this.content.scrollToBottom(10);
    };
    ProfileCommentsPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ProfileCommentsPage.prototype.toDateFormat = function (date) {
        return date.getDate() + '/' + this.toMonthFormat(date.getMonth()) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    };
    ProfileCommentsPage.prototype.toMonthFormat = function (monthNumber) {
        if (monthNumber < 10) {
            return '0' + (monthNumber + 1);
        }
        else {
            return (monthNumber + 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], ProfileCommentsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat'),
        __metadata("design:type", Object)
    ], ProfileCommentsPage.prototype, "chat", void 0);
    ProfileCommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\profile\profile-comments.html"*/'<ion-header class="comments">\n\n	<button ion-button clear icon-only (click)="back()">\n\n		<ion-icon name=\'close\'></ion-icon>\n\n	</button>\n\n	<ion-row>\n\n		<ion-col col-12>Conversation avec {{friend.usualName}}</ion-col>\n\n	</ion-row>\n\n</ion-header>\n\n<ion-content #content padding class="profile-comments">\n\n		<ion-grid>\n\n			<ion-row *ngFor="let message of friend.comments">\n\n				<ng-container *ngIf="!message.me">\n\n					<div class="comment-not-me">\n\n						<img [src]="friend.account_image"/>\n\n						<div class="block-message">\n\n							<div>\n\n								<div class="message">{{message.message}}</div>\n\n								<div class="time">{{message.date}}</div>\n\n							</div>\n\n						</div>\n\n					</div>\n\n				</ng-container>\n\n				<ng-container *ngIf="message.me">\n\n					<div class="comment-me">\n\n						<img [src]="me.account_image"/>\n\n						<div class="block-message">\n\n							<div>\n\n								<div class="message">{{message.message}}</div>\n\n								<div class="time">{{message.date}}</div>\n\n							</div>\n\n						</div>\n\n					</div>\n\n				</ng-container>\n\n			</ion-row>\n\n		</ion-grid>\n\n</ion-content>\n\n<ion-footer>\n\n  <div #chat class="chat">\n\n		<div>\n\n			<ion-textarea [(ngModel)]="message" placeholder=""></ion-textarea>\n\n			<button ion-button (click)="sendMessage()" [disabled]="message?.length<=0">Envoyer</button>\n\n		</div>\n\n	</div>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\profile\profile-comments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfileCommentsPage);
    return ProfileCommentsPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryProvider = /** @class */ (function () {
    function CategoryProvider(storage) {
        this.storage = storage;
    }
    CategoryProvider.prototype.getCategories = function () {
        return this.categories;
    };
    CategoryProvider.prototype.getById = function (id) {
        return this.categories[id];
    };
    CategoryProvider.prototype.getAllSelected = function () {
        var result = 0;
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category.selected) {
                result++;
            }
        }
        return result;
    };
    CategoryProvider.prototype.mock = function () {
        this.categories = [
            {
                'id': 1,
                'title': 'Gastronomie',
                'picture': 'http://www.leshallesdenimes.com/imgs/images/etal-bio/Fruits-Legumes.jpg',
                'selected': true
            },
            {
                'id': 2,
                'title': 'Culture générale',
                'picture': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png',
                'selected': true
            },
            {
                'id': 3,
                'title': 'Sport',
                'picture': 'https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/r/o/rogue-lacrosse-ball-5.jpg',
                'selected': false
            },
            {
                'id': 4,
                'title': 'Art',
                'picture': 'https://www.arteum.com/uploads/photos/2182/1319_xl.jpg',
                'selected': false
            },
            {
                'id': 5,
                'title': 'Voyage',
                'picture': 'https://www.mesbagages.com/images/bagages/valise-snowball-266762l.jpg',
                'selected': false
            },
            {
                'id': 6,
                'title': 'Voitures',
                'picture': 'https://modelisme-rc.net/5104-large_default/radiokontrol-kutiger-94177-sport-rally-racing-voiture-rc-thermique-1-10-4-wd-roues-motrices-modelisme-radiocommande.jpg',
                'selected': false
            },
            {
                'id': 7,
                'title': 'Informatique',
                'picture': 'https://media.top-office.com/media//catalog/category/Ordinateur_Portable.png',
                'selected': false
            },
            {
                'id': 8,
                'title': 'Ecole',
                'picture': 'https://beaujeu2014.files.wordpress.com/2013/08/bonnet-ane.png?w=540',
                'selected': false
            }
        ];
        return this.categories;
    };
    CategoryProvider.prototype.sort = function () {
        return this.categories.sort(function (cat1, cat2) {
            return cat1.title.localeCompare(cat2.title);
        });
    };
    CategoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], CategoryProvider);
    return CategoryProvider;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook_ngx__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacebookService = /** @class */ (function () {
    function FacebookService(facebook) {
        this.facebook = facebook;
    }
    FacebookService.prototype.loginFB = function () {
        //On demande les permissions suivantes: email
        alert('test');
        console.log(this.facebook);
        alert(JSON.stringify(this.facebook));
        this.facebook.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return alert('Logged into Facebook!'); })
            .catch(function (e) { return alert('Error logging into Facebook'); });
        alert('2');
    };
    FacebookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook_ngx__["a" /* Facebook */]])
    ], FacebookService);
    return FacebookService;
}());

//# sourceMappingURL=facebook-service.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_loader__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questions_questions__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reply_reply__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reply_reply_loader__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings__ = __webpack_require__(286);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_profile__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_profile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__game_game__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__game_game_loader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__reply_reply__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__reply_reply_loader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__questions_questions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__settings_settings__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__settings_settings__["a"]; });








// Pages

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GamePage = /** @class */ (function (_super) {
    __extends(GamePage, _super);
    function GamePage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, sanitizer) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.sanitizer = sanitizer;
        _this.temps = 10;
        _this.remaining = "10";
        _this.currentQuestionId = 0;
        _this.showResponses = false;
        _this.showCategory = true;
        _this.mock();
        _this.currentQuestion = _this.questions[_this.currentQuestionId];
        _this.startShowCategory();
        return _this;
    }
    GamePage.prototype.startShowCategory = function () {
        var _this = this;
        this.showCategory = true;
        this.timerPreGame = setInterval(function (x) {
            _this.startTimer();
            _this.showCategory = false;
            clearInterval(_this.timerPreGame);
        }, 1500);
    };
    GamePage.prototype.startTimer = function () {
        var _this = this;
        var delai = this.temps / 200;
        var time = 10000;
        this.taux = 0;
        this.timer = setInterval(function (x) {
            _this.taux += .5;
            time -= delai * 1000;
            _this.remaining = (Math.floor(time / 1000) + 1).toString();
            if (_this.taux == 100) {
                _this.verify(null);
            }
        }, delai * 1000);
    };
    GamePage.prototype.verify = function (answerChosen) {
        if (!this.showResponses) {
            this.currentResponse = answerChosen;
            this.showResponses = true;
            clearInterval(this.timer);
            if (answerChosen == this.currentQuestion.goodAnswer.id) {
                if (this.taux < 30) {
                    this.toast('+5');
                    return;
                }
                if (this.taux < 70) {
                    this.toast('+3');
                    return;
                }
                if (this.taux < 100) {
                    this.toast('+1');
                    return;
                }
            }
        }
    };
    GamePage.prototype.getClass = function (answerChosen) {
        if (this.showResponses) {
            if (answerChosen == this.currentQuestion.goodAnswer.id) {
                return 'good';
            }
            else {
                if (answerChosen == this.currentResponse) {
                    return 'bad';
                }
            }
        }
        return '';
    };
    GamePage.prototype.nextQuestion = function () {
        clearInterval(this.timer);
        this.currentQuestionId++;
        if (this.currentQuestionId == this.questions.length) {
            this.quit();
        }
        else {
            this.showResponses = false;
            this.currentResponse = null;
            this.startShowCategory();
            this.currentQuestion = this.questions[this.currentQuestionId];
        }
    };
    GamePage.prototype.quit = function () {
        this.goToProfile('forward');
        this.reinitQuestionGame();
    };
    GamePage.prototype.reinitQuestionGame = function () {
        this.showResponses = false;
        clearInterval(this.timer);
    };
    GamePage.prototype.mock = function () {
        this.questions = [{
                'id': 1,
                'title': "En quelle année je suis né ?",
                'category': {
                    'title': 'Gastronomie',
                    'image': 'http://www.leshallesdenimes.com/imgs/images/etal-bio/Fruits-Legumes.jpg'
                },
                'answers': [{
                        "id": 1,
                        'text': "1986",
                    }, {
                        "id": 2,
                        'text': "1987"
                    }, {
                        "id": 3,
                        'text': "1988"
                    }, {
                        "id": 4,
                        'text': "1989"
                    }
                ],
                'goodAnswer': {
                    "id": 1,
                    'text': "1986"
                }
            },
            {
                'id': 2,
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }
                ],
                'goodAnswer': {
                    "id": 8,
                    'text': "Le poulet chasseur"
                }
            },
            {
                'id': 3,
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }
                ],
                'goodAnswer': {
                    "id": 8,
                    'text': "Le poulet chasseur"
                }
            },
            {
                'id': 4,
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }
                ],
                'goodAnswer': {
                    "id": 8,
                    'text': "Le poulet chasseur"
                }
            },
            {
                'id': 5,
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }
                ],
                'goodAnswer': {
                    "id": 8,
                    'text': "Le poulet chasseur"
                }
            }
        ];
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\game\game.html"*/'<ion-content [class]="showCategory ? \' fadeIn\' : \'hidden\'">\n  <div class="pre-game h-full align-center-center">\n    <div class="domain">\n      <div class="title">\n        Categorie\n      </div>\n      <div class="domain-block">\n        <img src="{{currentQuestion.category.image}}"/>\n        <div class="text">{{currentQuestion.category.title}}</div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-content padding>\n  <div class="timer">\n    <div class="time" [style.height]="taux + \'%\'"></div>\n    <div class="info">\n      <div *ngIf="taux < 100">{{ remaining }}</div>\n      <div *ngIf="taux >= 100"><ion-icon name="close-circle"></ion-icon></div>\n    </div>\n  </div>\n  <div class="question">{{currentQuestion.title}}</div>\n  <div class="answers">\n    <div class="answer">\n      <div class="padding-block" (click)="verify(currentQuestion.answers[0].id)">\n        <div [class]="\'block \' + getClass(currentQuestion.answers[0].id)">{{currentQuestion.answers[0].text}}</div>\n      </div>\n    </div>\n    <div class="answer">\n      <div class="padding-block" (click)="verify(currentQuestion.answers[1].id)">\n        <div [class]="\'block \' + getClass(currentQuestion.answers[1].id)">{{currentQuestion.answers[1].text}}</div>\n      </div>\n    </div>\n    <div class="answer">\n      <div class="padding-block" (click)="verify(currentQuestion.answers[2].id)">\n        <div [class]="\'block \' + getClass(currentQuestion.answers[2].id)">{{currentQuestion.answers[2].text}}</div>\n      </div>\n    </div>\n    <div class="answer">\n      <div class="padding-block" (click)="verify(currentQuestion.answers[3].id)">\n        <div [class]="\'block \' + getClass(currentQuestion.answers[3].id)">{{currentQuestion.answers[3].text}}</div>\n      </div>\n    </div>\n  </div>\n  <div class="suivi">\n    <div class="person" [style.top]="sanitizer.bypassSecurityTrustStyle(\'calc( ( 100% - 50px - 20px ) * \' + (currentQuestionId / (questions?.length - 1)) +\')\')">\n      <img src="https://www.popme.app/media/cache/resolve/user/uploads/images/user/4435e3b26ae1da2d545ceb09f353ea10"/>\n      <div class="info">{{currentQuestionId + 1}}/{{questions?.length}}</div>\n    </div>\n  </div>\n  <div class="actions">\n    <div class="quit" (click)="quit()">Quitter</div>\n    <div class="domain">\n      <div class="domain-block">\n        <img src="{{currentQuestion.category.image}}"/>\n        <div class="text">{{currentQuestion.category.title}}</div>\n      </div>\n    </div>\n    <div class="pass" [hidden]="!showResponses" (click)="nextQuestion()">Suivant</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\game\game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], GamePage);
    return GamePage;
}(__WEBPACK_IMPORTED_MODULE_4__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameLoaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameLoaderPage = /** @class */ (function (_super) {
    __extends(GameLoaderPage, _super);
    function GameLoaderPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.remaining = 3;
        _this.delai = 1000;
        _this.startTimer();
        _this.friendChosen = _this.params.get('friend');
        return _this;
    }
    GameLoaderPage.prototype.startTimer = function () {
        var _this = this;
        this.timer = setInterval(function (x) {
            _this.remaining -= _this.delai / 1000;
            if (_this.remaining <= 0) {
                _this.goTo(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* GamePage */], 'forward', {});
                clearInterval(_this.timer);
            }
        }, this.delai);
    };
    GameLoaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-loader',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\game\game-loader.html"*/'<ion-content padding>\n\n  <div class="block-friend">\n\n    <ion-card class="card-friend">\n\n      <ion-item class="friend-item">\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <ion-avatar item-start float-left>\n\n              <img src="{{friendChosen.account_image}}">\n\n            </ion-avatar>\n\n            <div class="align-left-center">\n\n              <div><strong>{{friendChosen.usualName}}</strong><br/><span class="description">{{friendChosen.description}}</span></div>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <div class="align-center-center">\n\n              <div style="width:100%" text-center>\n\n                <strong>{{friendChosen.answers.not_played}}</strong>\n\n                <div col-12>\n\n                  questions\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-card>\n\n  </div>\n\n  <div class="h-full align-center-center overlay-spinner">\n\n    <span class="time">{{remaining}}</span>\n\n  </div>\n\n  <div class="h-full align-center-center overlay-spinner">\n\n    <ion-spinner icon="spiral"></ion-spinner>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\game\game-loader.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GameLoaderPage);
    return GameLoaderPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=game-loader.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionsPage = /** @class */ (function (_super) {
    __extends(QuestionsPage, _super);
    function QuestionsPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, sanitizer) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.sanitizer = sanitizer;
        _this.display = 1;
        _this.mock();
        _this.questions = _this.mockQuestions;
        return _this;
    }
    QuestionsPage.prototype.show = function (menu) {
        this.display = menu;
    };
    QuestionsPage.prototype.goToReply = function () {
        this.goTo(__WEBPACK_IMPORTED_MODULE_5__pages__["g" /* ReplyLoaderPage */], 'forward', {});
    };
    QuestionsPage.prototype.delete = function (questionId) {
        var _this = this;
        var indexOf;
        this.mockQuestions.forEach(function (question, index) {
            if (question.id == questionId) {
                indexOf = index;
            }
        });
        var alert = this.confirm('Suppresion', 'Veux-tu vraiment supprimer cette question ?', function () {
            _this.mockQuestions.splice(indexOf, 1);
            _this.searchQuestion(null);
        });
        alert.present();
    };
    QuestionsPage.prototype.searchQuestion = function (event) {
        if (this.search == undefined || this.search.length < 3) {
            this.questions = this.mockQuestions;
            return;
        }
        var result = new Array();
        for (var _i = 0, _a = this.mockQuestions; _i < _a.length; _i++) {
            var question = _a[_i];
            if (question.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 || question.category.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0) {
                result.push(question);
                continue;
            }
            else {
                for (var _b = 0, _c = question.answers; _b < _c.length; _b++) {
                    var answer = _c[_b];
                    if (answer.id == question.goodAnswer.id && answer.text.toLowerCase().indexOf(this.search.toLowerCase()) >= 0) {
                        result.push(question);
                        continue;
                    }
                }
            }
        }
        this.questions = result;
    };
    QuestionsPage.prototype.mock = function () {
        this.mockQuestions = [{
                'id': 1,
                'title': "En quelle année je suis né ?",
                'category': {
                    'title': 'Gastronomie',
                    'image': 'http://www.leshallesdenimes.com/imgs/images/etal-bio/Fruits-Legumes.jpg'
                },
                'answers': [{
                        "id": 1,
                        'text': "1986",
                    }, {
                        "id": 2,
                        'text': "1987"
                    }, {
                        "id": 3,
                        'text': "1988"
                    }, {
                        "id": 4,
                        'text': "1989"
                    }
                ],
                'goodAnswer': {
                    "id": 1,
                    'text': "1986"
                }
            },
            {
                'id': 2,
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }
                ],
                'goodAnswer': {
                    "id": 8,
                    'text': "Le poulet chasseur"
                }
            },
            {
                'id': 3,
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }
                ],
                'goodAnswer': {
                    "id": 8,
                    'text': "Le poulet chasseur"
                }
            },
            {
                'id': 4,
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }
                ],
                'goodAnswer': {
                    "id": 8,
                    'text': "Le poulet chasseur"
                }
            },
            {
                'id': 5,
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }
                ],
                'goodAnswer': {
                    "id": 8,
                    'text': "Le poulet chasseur"
                }
            }
        ];
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\questions\questions.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-3 (click)="goToProfile(\'back\')"><ion-icon name="people"></ion-icon></ion-col>\n      <ion-col col-3 class="active"><ion-icon name="play"></ion-icon></ion-col>\n      <ion-col col-3><ion-icon name="search"></ion-icon></ion-col>\n      <ion-col col-3 (click)="goToSettings(\'forward\')"><ion-icon name="settings"></ion-icon></ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div layout vertical>\n    <div flex three >\n      <div>\n        <ion-grid class="sub-header">\n          <ion-row>\n            <ion-col col-6 [class]="display == 1 ? \'text-center active\' : \'text-center\'" (click)="show(1)">\n              <div class="text-muted text-xs l-s-1x m-t-xs"><ion-icon name="play"></ion-icon>&nbsp;Jouer</div>\n            </ion-col>\n            <ion-col col-6 [class]="display == 2 ? \'text-center active\' : \'text-center\'" (click)="show(2)">\n              <div class="text-muted text-xs l-s-1x m-t-xs"><ion-icon name="trophy"></ion-icon>&nbsp;Mes questions\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n  <ng-container *ngIf="display == 1">\n      <div class="play-desc">J\'ajoute des questions</div>\n    <div class="play align-center-center">\n      <div class="play-button" (click)="goToReply()"><div><ion-icon name="play"></ion-icon></div></div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf="display == 2">\n  <ion-searchbar placeholder="Catégorie, Question, Réponse" [(ngModel)]="search" (ionInput)="searchQuestion($event)"></ion-searchbar>\n    <ion-grid class="questions">\n      <ion-row *ngFor="let question of questions; let i = index" class="my-question">\n        <ion-col col-2>\n          <div class="align-center-center"><img [src]="question.category.image"/></div>\n        </ion-col>\n        <ion-col col-8>\n          <ion-row>\n            <ion-col col-12 class="title">{{question.title}}</ion-col>\n            <ion-col col-12 text-right class="answer">{{question.goodAnswer.text}}</ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2>\n          <div class="align-center-center"><button ion-button icon-start clear small (click)="delete(question.id)"><ion-icon name="trash"></ion-icon></button></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\questions\questions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], QuestionsPage);
    return QuestionsPage;
}(__WEBPACK_IMPORTED_MODULE_4__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReplyPage = /** @class */ (function (_super) {
    __extends(ReplyPage, _super);
    function ReplyPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.temps = 10;
        _this.remaining = "10";
        _this.currentQuestionId = 0;
        _this.replied = false;
        _this.mock();
        _this.currentQuestion = _this.questions[_this.currentQuestionId];
        return _this;
    }
    ReplyPage.prototype.setGood = function (answerChosen) {
        if (this.questions[this.currentQuestionId].goodAnswer == answerChosen) {
            this.replied = false;
            this.questions[this.currentQuestionId].goodAnswer = null;
        }
        else {
            this.replied = true;
            this.questions[this.currentQuestionId].goodAnswer = answerChosen;
        }
    };
    ReplyPage.prototype.getClass = function (answerChosen) {
        if (answerChosen == this.currentQuestion.goodAnswer) {
            return 'good';
        }
        return '';
    };
    ReplyPage.prototype.nextQuestion = function () {
        this.currentQuestionId++;
        this.currentResponse = null;
        if (this.currentQuestionId == this.questions.length) {
            console.log("STOP");
        }
        else {
            this.currentQuestion = this.questions[this.currentQuestionId];
        }
    };
    ReplyPage.prototype.quit = function () {
        this.goTo(__WEBPACK_IMPORTED_MODULE_4__pages__["f" /* QuestionsPage */], 'backward', {});
    };
    ReplyPage.prototype.mock = function () {
        this.questions = [{
                'title': "En quelle année je suis né ?",
                'category': {
                    'title': 'Gastronomie',
                    'image': 'http://www.leshallesdenimes.com/imgs/images/etal-bio/Fruits-Legumes.jpg'
                },
                'answers': [{
                        "id": 1,
                        'text': "1986",
                    }, {
                        "id": 2,
                        'text': "1987"
                    }, {
                        "id": 3,
                        'text': "1988"
                    }, {
                        "id": 4,
                        'text': "1989"
                    }, {
                        "id": 5,
                        'text': "1990"
                    }, {
                        "id": 6,
                        'text': "1991"
                    }, {
                        "id": 7,
                        'text': "1992"
                    }, {
                        "id": 8,
                        'text': "1993"
                    }
                ],
                'goodAnswer': null
            },
            {
                'title': "Quel est mon plat préféré ?",
                'category': {
                    'title': 'Culture générale',
                    'image': 'https://pbs.twimg.com/profile_images/2587029738/jl43207kyoox2f9gorbo_400x400.png'
                },
                'answers': [{
                        "id": 5,
                        'text': "Le tajine",
                    }, {
                        "id": 6,
                        'text': "Le bon vieux kebab"
                    }, {
                        "id": 7,
                        'text': "La blanquette de veau"
                    }, {
                        "id": 8,
                        'text': "Le poulet chasseur"
                    }, {
                        "id": 9,
                        'text': "Les raviolis"
                    }, {
                        "id": 10,
                        'text': "Le poulet basquaise"
                    }, {
                        "id": 11,
                        'text': "La salade nicoise"
                    }, {
                        "id": 12,
                        'text': "Le pot-au-feu"
                    }
                ],
                'goodAnswer': null
            }
        ];
    };
    ReplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reply',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\reply\reply.html"*/'<ion-content padding>\n  <div class="question">{{currentQuestion.title}}</div>\n  <div class="answers">\n    <ion-row style="height: 100%">\n      <ion-col col-6 style="height: 25%;" *ngFor="let answer of currentQuestion.answers; let i = index">\n        <div class="answer">\n          <div class="padding-block" (click)="setGood(answer.id)">\n            <div [class]="\'block \' + getClass(answer.id)">{{answer.text}}</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="actions">\n    <div class="quit" (click)="quit()">Quitter</div>\n    <div class="domain">\n      <div class="domain-block">\n        <img src="{{currentQuestion.category.image}}"/>\n        <div class="text">{{currentQuestion.category.title}}</div>\n      </div>\n    </div>\n    <div class="pass" [hidden]="!replied" (click)="nextQuestion()">Suivant</div>\n    <div class="pass" [hidden]="replied" (click)="nextQuestion()">Passer</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\reply\reply.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReplyPage);
    return ReplyPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=reply.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyLoaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReplyLoaderPage = /** @class */ (function (_super) {
    __extends(ReplyLoaderPage, _super);
    function ReplyLoaderPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.remaining = 3;
        _this.delai = 1000;
        _this.startTimer();
        return _this;
    }
    ReplyLoaderPage.prototype.startTimer = function () {
        var _this = this;
        this.timer = setInterval(function (x) {
            _this.remaining -= _this.delai / 1000;
            if (_this.remaining <= 0) {
                _this.goTo(__WEBPACK_IMPORTED_MODULE_4__pages__["h" /* ReplyPage */], 'forward', {});
                clearInterval(_this.timer);
            }
        }, this.delai);
    };
    ReplyLoaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reply-loader',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\reply\reply-loader.html"*/'<ion-content padding>\n\n  <div class="h-full align-center-center overlay-spinner">\n\n    <span class="time">{{remaining}}</span>\n\n  </div>\n\n  <div class="h-full align-center-center overlay-spinner">\n\n    <ion-spinner icon="spiral"></ion-spinner>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\reply\reply-loader.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReplyLoaderPage);
    return ReplyLoaderPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=reply-loader.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SettingsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsInterestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(104);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = /** @class */ (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, categoryProvider) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.categoryProvider = categoryProvider;
        _this.categoryProvider.mock();
        return _this;
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.nbCategories = this.categoryProvider.getAllSelected();
    };
    SettingsPage.prototype.pushToInterest = function () {
        this.pushTo(SettingsInterestsPage, 'forward', {});
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\settings\settings.html"*/'<ion-header>\n    <ion-navbar>\n    <ion-row>\n      <ion-col col-3 (click)="goToProfile(\'back\')"><ion-icon name="people"></ion-icon></ion-col>\n      <ion-col col-3 (click)="goToQuestions(\'back\')"><ion-icon name="play"></ion-icon></ion-col>\n      <ion-col col-3><ion-icon name="search"></ion-icon></ion-col>\n      <ion-col col-3 class="active"><ion-icon name="settings"></ion-icon></ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Mes centres d\'intérêt</ion-list-header>\n    <button ion-item (click)="pushToInterest()" >\n        <ion-icon name="game-controller-a" item-start></ion-icon>{{ nbCategories }} centres d\'intérêt\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* CategoryProvider */]])
    ], SettingsPage);
    return SettingsPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

var SettingsInterestsPage = /** @class */ (function (_super) {
    __extends(SettingsInterestsPage, _super);
    function SettingsInterestsPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, categoryProvider) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.categoryProvider = categoryProvider;
        _this.categories = _this.categoryProvider.sort();
        return _this;
        /*this.categories.splice(0, 0, {
            'id':0,
                    'title': 'TOUT',
                    'picture': '',
                    'selected': false
        });*/
    }
    SettingsInterestsPage.prototype.ionViewCanLeave = function () {
        if (this.categoryProvider.getAllSelected() <= 0) {
            this.toast('Choisis au moins un centre d\'intérêt');
        }
        return this.categoryProvider.getAllSelected() > 0;
    };
    SettingsInterestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\settings\settings-interests.html"*/'\n\n<ion-header>\n\n <ion-navbar>\n\n   <ion-title>Mes centres d\'intérêt</ion-title>\n\n </ion-navbar>\n\n</ion-header>\n\n<ion-content class="interests">\n\n  <ion-list>\n\n    <ng-container *ngFor="let category of categories; let i = index">\n\n      <ion-item>\n\n        <ion-label>{{category.title}}</ion-label>\n\n        <ion-checkbox [(ngModel)]="category.selected" [checked]="category.selected"></ion-checkbox>\n\n        <img item-end [src]="category.picture"/>\n\n      </ion-item>\n\n    </ng-container>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\settings\settings-interests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* CategoryProvider */]])
    ], SettingsInterestsPage);
    return SettingsInterestsPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbstractPage = /** @class */ (function () {
    function AbstractPage(viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.params = params;
    }
    AbstractPage.prototype.goTo = function (page, direction, params) {
        this.navCtrl.setRoot(page, params, { animate: true, direction: direction });
    };
    AbstractPage.prototype.pushTo = function (page, direction, params) {
        this.navCtrl.push(page, params, { animate: true, direction: direction });
    };
    AbstractPage.prototype.goToProfile = function (direction) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_2__pages__["e" /* ProfilePage */], direction, {});
    };
    AbstractPage.prototype.goToQuestions = function (direction) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* QuestionsPage */], direction, {});
    };
    AbstractPage.prototype.goToSettings = function (direction) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_2__pages__["j" /* SettingsPage */], direction, {});
    };
    /*goToSearch(){
        this.goTo(ProfilePage, 'backward', {});
    }*/
    AbstractPage.prototype.alert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Oops',
            message: message,
            buttons: ['Retour']
        });
        alert.present();
    };
    AbstractPage.prototype.toast = function (message) {
        var alert = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true,
        });
        alert.present();
    };
    AbstractPage.prototype.confirm = function (title, message, fnct) {
        return this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    cssClass: 'secondary'
                }, {
                    text: 'Je confirme',
                    handler: fnct
                }
            ]
        });
    };
    AbstractPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({}),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AbstractPage);
    return AbstractPage;
}());

//# sourceMappingURL=abstract.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map