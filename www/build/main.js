webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate_translate__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Api = /** @class */ (function () {
    function Api(http, storage, translate) {
        this.http = http;
        this.storage = storage;
        this.translate = translate;
        this.url = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].API_URL;
        this.apiToken = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].API_TOKEN;
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        //return this.http.get('assets/json/initGame.json');
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        body.token = this.apiToken;
        body.lang = this.translate.getLang();
        return this.http.post(this.url + '/' + endpoint, JSON.stringify(body), reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.postAuthent = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__translate_translate__["a" /* Translate */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(140);
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
    function CategoryProvider(storage, api) {
        this.storage = storage;
        this.api = api;
    }
    CategoryProvider.prototype.getCategories = function () {
        return this.categories;
    };
    CategoryProvider.prototype.getById = function (id) {
        return this.categories[id];
    };
    CategoryProvider.prototype.getAllSelected = function () {
        var result = new Array();
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category.selected) {
                result.push(category.id);
            }
        }
        return result;
    };
    CategoryProvider.prototype.getNbSelected = function () {
        var result = 0;
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category.selected) {
                result++;
            }
        }
        return result;
    };
    CategoryProvider.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("Chargement des catégories");
            var data;
            data = {};
            _this.api.post('category/all', data)
                .subscribe(function (data) {
                var body;
                _this.categories = JSON.parse(data.text());
                resolve();
            }, function (err) {
                reject(err);
            }, function () {
                //this.goToHome();
            });
        });
    };
    CategoryProvider.prototype.sort = function () {
        return this.categories.sort(function (cat1, cat2) {
            return cat1.name.localeCompare(cat2.name);
        });
    };
    CategoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], CategoryProvider);
    return CategoryProvider;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization_ngx__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
var Translate = /** @class */ (function () {
    function Translate(translate, storage, globalization) {
        this.translate = translate;
        this.storage = storage;
        this.globalization = globalization;
        console.log('Provider : Translate');
    }
    Translate.prototype.getDefaultLang = function () {
        return this.translate.getDefaultLang();
    };
    Translate.prototype.getNumber = function (objet) {
        return objet;
    };
    Translate.prototype.getLang = function () {
        return this.lang;
    };
    Translate.prototype.getTranslate = function (key) {
        var word = key;
        this.translate.get(key).subscribe(function (value) {
            // value is our translated string
            word = value;
        });
        return word;
    };
    Translate.prototype.setDefaultLang = function (lang) {
        this.translate.use(lang);
        this.translate.setDefaultLang(lang);
        this.storage.set('defaultLang', lang);
    };
    Translate.prototype.initTranslate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('defaultLang').then(function (value) {
                if (value) {
                    _this.translate.use = value;
                    _this.translate.setDefaultLang(value);
                    _this.lang = value;
                }
                else {
                    if (_this.translate.getBrowserLang() !== undefined) {
                        _this.translate.use(_this.translate.getBrowserLang());
                        _this.translate.setDefaultLang(_this.translate.getBrowserLang());
                        _this.lang = _this.translate.getBrowserLang();
                    }
                    else {
                        var language_1 = 'fr';
                        _this.globalization.getPreferredLanguage()
                            .then(function (res) { return language_1 = res.value; })
                            .catch(function (e) { return console.log(e); });
                        _this.translate.use(language_1); // Set your language here
                        _this.translate.setDefaultLang(language_1);
                        _this.lang = language_1;
                    }
                }
                console.log("Langue utilisée : " + _this.lang);
                resolve(true);
            });
        });
    };
    Translate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization_ngx__["a" /* Globalization */]])
    ], Translate);
    return Translate;
}());

//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_globalization_ngx__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_native_page_transitions__ = __webpack_require__(700);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["f" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["e" /* ProfileCommentsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["d" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["c" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["b" /* GameLoaderPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["i" /* ReplyPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["h" /* ReplyLoaderPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["g" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["k" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["j" /* SettingsInterestsPage */]
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
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (HttpLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["f" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["e" /* ProfileCommentsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["d" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["c" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["b" /* GameLoaderPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["i" /* ReplyPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["h" /* ReplyLoaderPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["g" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["k" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["j" /* SettingsInterestsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["b" /* CategoryProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* FacebookService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["e" /* User */],
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_globalization_ngx__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["d" /* Translate */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(43);
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
    function MyApp(platform, statusBar, splashScreen, storage, translate) {
        this.storage = storage;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["d" /* LoadingPage */];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["d" /* Translate */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProfilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(43);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["c" /* FacebookService */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfileCommentsPage);
    return ProfileCommentsPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appSettings; });
var appSettings = {
    PRODUCTION: false,
    API_TOKEN: '7c97eeafa01e1a1431d8399aa0fd5530',
    API_URL: 'http://quizzy.popme.app/api',
    DEBUG: false,
    STORAGE_ATTRIBUTES: {
        USER: 'user'
    }
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_game_loader__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questions_questions__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reply_reply__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reply_reply_loader__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(697);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_profile__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_profile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__loading_loading__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__game_game__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__game_game_loader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__reply_reply__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__reply_reply_loader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__questions_questions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__settings_settings__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__settings_settings__["a"]; });









// Pages

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(41);
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
        this.goTo(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* ProfilePage */], direction, {});
    };
    AbstractPage.prototype.goToQuestions = function (direction) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_2__pages__["g" /* QuestionsPage */], direction, {});
    };
    AbstractPage.prototype.goToSettings = function (direction) {
        this.goTo(__WEBPACK_IMPORTED_MODULE_2__pages__["k" /* SettingsPage */], direction, {});
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AbstractPage);
    return AbstractPage;
}());

//# sourceMappingURL=abstract.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_category__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facebook_facebook_service__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate_translate__ = __webpack_require__(258);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__category_category__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__facebook_facebook_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__user_user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__translate_translate__["a"]; });






//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(354);
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
        this.facebook.login(['public_profile', 'email'])
            .then(function (res) { return alert('Logged into Facebook!'); })
            .catch(function (e) { return alert('Error logging into Facebook : ' + JSON.stringify(e)); });
    };
    FacebookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */]])
    ], FacebookService);
    return FacebookService;
}());

//# sourceMappingURL=facebook-service.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = /** @class */ (function () {
    function User(storage, api, categoryProvider) {
        this.storage = storage;
        this.api = api;
        this.categoryProvider = categoryProvider;
    }
    User.prototype.getCategories = function () {
        return this.categories;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getUsualName = function () {
        return this.usualName;
    };
    User.prototype.getModel = function () {
        var result = {};
        result.id = this.id;
        result.categories = this.categories;
        return result;
    };
    User.prototype.load = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("Chargement du user " + id);
            var data;
            data = {};
            _this.api.post('user/' + id, data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                _this.id = body['id'];
                _this.usualName = body['usualName'];
                _this.categories = new Array();
                var hisCategories = body.categories;
                for (var _i = 0, _a = _this.categoryProvider.getCategories(); _i < _a.length; _i++) {
                    var category = _a[_i];
                    if (hisCategories.indexOf(+category.id) > -1) {
                        category.selected = 1;
                    }
                    else {
                        category.selected = 0;
                    }
                    _this.categories.push(category);
                    resolve();
                }
            }, function (err) {
            }, function () {
                //this.goToHome();
            });
        });
    };
    User.prototype.updateCategories = function () {
        var _this = this;
        var data;
        data = {};
        data.categories = this.categoryProvider.getAllSelected();
        this.api.post('user/' + this.id + '/update-categories', data)
            .subscribe(function (data) {
            var body;
            _this.categories = JSON.parse(data.text());
        }, function (err) {
        }, function () {
            //this.goToHome();
        });
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryProvider */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract__ = __webpack_require__(42);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], GamePage);
    return GamePage;
}(__WEBPACK_IMPORTED_MODULE_4__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(43);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoadingPage = /** @class */ (function (_super) {
    __extends(LoadingPage, _super);
    function LoadingPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, facebook, api, user, category, translate) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.facebook = facebook;
        _this.api = api;
        _this.user = user;
        _this.category = category;
        _this.translate = translate;
        translate.initTranslate().then(function (ret) {
            if (ret) {
                _this.loadElements();
            }
        });
        return _this;
    }
    LoadingPage.prototype.loadElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cats, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.category.load()];
                    case 1:
                        cats = _a.sent();
                        return [4 /*yield*/, this.user.load(2)];
                    case 2:
                        user = _a.sent();
                        this.goToProfile('forward');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loading',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\loading\loading.html"*/'<ion-content padding>\n	LOADING\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\loading\loading.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["e" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* CategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* Translate */]])
    ], LoadingPage);
    return LoadingPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameLoaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(41);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GameLoaderPage);
    return GameLoaderPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=game-loader.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(43);
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
    function QuestionsPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, sanitizer, user, api) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.sanitizer = sanitizer;
        _this.user = user;
        _this.api = api;
        _this.display = 1;
        //this.mock();
        var data;
        data = {};
        data.user_id = _this.user.getId();
        _this.api.post('question/get', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
            _this.baseQuestions = body;
            _this.questions = _this.baseQuestions;
        }, function (err) {
        }, function () {
            //this.goToHome();
        });
        return _this;
    }
    QuestionsPage.prototype.show = function (menu) {
        this.display = menu;
    };
    QuestionsPage.prototype.goToReply = function () {
        this.goTo(__WEBPACK_IMPORTED_MODULE_5__pages__["h" /* ReplyLoaderPage */], 'forward', {});
    };
    QuestionsPage.prototype.delete = function (questionId) {
        var _this = this;
        var indexOf;
        this.questions.forEach(function (question, index) {
            if (question.id == questionId) {
                indexOf = index;
            }
        });
        var alert = this.confirm('Suppresion', 'Veux-tu vraiment supprimer cette question ?', function () {
            _this.questions.splice(indexOf, 1);
            _this.searchQuestion(null);
            var data;
            data = {};
            data.user_id = _this.user.getId();
            data.question_id = questionId;
            _this.api.post('question/delete', data)
                .subscribe(function (data) {
            }, function (err) {
            }, function () {
                //this.goToHome();
            });
        });
        alert.present();
    };
    QuestionsPage.prototype.searchQuestion = function (event) {
        var searchString = '' + this.search;
        if (this.search == undefined || searchString.length < 3) {
            this.questions = this.baseQuestions;
            return;
        }
        var result = new Array();
        for (var _i = 0, _a = this.baseQuestions; _i < _a.length; _i++) {
            var question = _a[_i];
            if (question.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 || question.category.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
                result.push(question);
                continue;
            }
            else {
                if (question.type == 'QCM') {
                    for (var _b = 0, _c = question.goodAnswer.text; _b < _c.length; _b++) {
                        var answer = _c[_b];
                        if (answer.text && answer.text.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
                            result.push(question);
                            continue;
                        }
                    }
                }
                else {
                    if (question.goodAnswer.text[0] && question.goodAnswer.text[0].toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
                        result.push(question);
                        continue;
                    }
                }
            }
        }
        this.questions = result;
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\questions\questions.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-3 (click)="goToProfile(\'back\')"><ion-icon name="people"></ion-icon></ion-col>\n      <ion-col col-3 class="active"><ion-icon name="play"></ion-icon></ion-col>\n      <ion-col col-3><ion-icon name="search"></ion-icon></ion-col>\n      <ion-col col-3 (click)="goToSettings(\'forward\')"><ion-icon name="settings"></ion-icon></ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div layout vertical>\n    <div flex three >\n      <div>\n        <ion-grid class="sub-header">\n          <ion-row>\n            <ion-col col-6 [class]="display == 1 ? \'text-center active\' : \'text-center\'" (click)="show(1)">\n              <div class="text-muted text-xs l-s-1x m-t-xs"><ion-icon name="play"></ion-icon>&nbsp;Jouer</div>\n            </ion-col>\n            <ion-col col-6 [class]="display == 2 ? \'text-center active\' : \'text-center\'" (click)="show(2)">\n              <div class="text-muted text-xs l-s-1x m-t-xs"><ion-icon name="trophy"></ion-icon>&nbsp;Mes questions\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n  <ng-container *ngIf="display == 1">\n      <div class="play-desc">J\'ajoute des questions</div>\n    <div class="play align-center-center">\n      <div class="play-button" (click)="goToReply()"><div><ion-icon name="play"></ion-icon></div></div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf="display == 2">\n  <ion-searchbar placeholder="Catégorie, Question, Réponse" [(ngModel)]="search" (ionInput)="searchQuestion($event)"></ion-searchbar>\n    <ion-grid class="questions">\n      <ion-row *ngFor="let question of questions; let i = index" class="my-question">\n        <ion-col col-2>\n          <div class="align-center-center"><img [src]="question.category.image"/></div>\n        </ion-col>\n        <ion-col col-8>\n          <ion-row>\n            <ion-col col-12 class="title">{{question.title}}</ion-col>\n            <ion-col col-12 text-right class="answer" *ngIf="question.goodAnswer.text != null">\n              <div *ngFor="let response of question.goodAnswer.text">\n                <ng-container *ngIf="response.text">{{response.text}}</ng-container>\n                <ng-container *ngIf="!response.text">{{response}}</ng-container>\n                </div>\n            </ion-col>\n            <ion-col col-12 text-right class="answer not-replied" *ngIf="question.goodAnswer.text == null">Non répondu</ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2>\n          <div class="align-center-center"><button ion-button icon-start clear small (click)="delete(question.id)"><ion-icon name="trash"></ion-icon></button></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\questions\questions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["e" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["a" /* Api */]])
    ], QuestionsPage);
    return QuestionsPage;
}(__WEBPACK_IMPORTED_MODULE_4__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(43);
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
    function ReplyPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, api, user) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.api = api;
        _this.user = user;
        _this.temps = 10;
        _this.remaining = "10";
        _this.currentQuestionId = 0;
        _this.replied = false;
        _this.noMoreQuestion = false;
        _this.questions = params.get('questions');
        _this.prepareLists();
        return _this;
    }
    ReplyPage.prototype.ionViewWillLoad = function () {
        this.currentQuestion = this.questions[this.currentQuestionId];
    };
    ReplyPage.prototype.ionViewDidLeave = function () {
        if (this.noMoreQuestion) {
            this.toast('Plus de questions');
        }
    };
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
    ReplyPage.prototype.setQCMGood = function (answerChosen) {
        var string = new String(answerChosen + ';');
        var indexof = this.questions[this.currentQuestionId].goodAnswer.indexOf(string);
        if (indexof > -1) {
            this.questions[this.currentQuestionId].goodAnswer = this.questions[this.currentQuestionId].goodAnswer.replace(string, '');
        }
        else {
            this.questions[this.currentQuestionId].goodAnswer += string;
        }
        this.replied = (this.questions[this.currentQuestionId].goodAnswer != '');
    };
    ReplyPage.prototype.getQCMClass = function (answerChosen) {
        if (this.questions[this.currentQuestionId].goodAnswer.indexOf(new String(answerChosen + ';')) > -1) {
            return 'good';
        }
        return '';
    };
    ReplyPage.prototype.nextQuestion = function () {
        this.reply(this.questions[this.currentQuestionId].goodAnswer);
    };
    ReplyPage.prototype.doNotReply = function () {
        this.reply(null);
    };
    ReplyPage.prototype.reply = function (reponse) {
        var data;
        data = {};
        data.user_id = this.user.getId();
        data.question_id = this.currentQuestion.id;
        data.reponse = reponse;
        this.api.post('question/reply', data)
            .subscribe(function (data) {
            var body;
            body = JSON.parse(data.text());
        }, function (err) {
        }, function () {
            //this.goToHome();
        });
        this.currentQuestionId++;
        this.currentResponse = null;
        if (this.currentQuestionId == this.questions.length) {
            this.noMoreQuestion = true;
            this.goToQuestions('back');
        }
        else {
            this.noMoreQuestion = false;
            this.replied = false;
            switch (this.currentQuestion.type.name) {
                case 'YMD': {
                    this.sliderDay.lockSwipes(false);
                    this.sliderMonth.lockSwipes(false);
                    this.sliderYear.lockSwipes(false);
                    break;
                }
                case 'YM': {
                    this.sliderMonth.lockSwipes(false);
                    this.sliderYear.lockSwipes(false);
                    break;
                }
                case 'Y': {
                    this.sliderYear.lockSwipes(false);
                    break;
                }
                case 'INT': {
                    this.int_value = null;
                    break;
                }
                case 'TEXT': {
                    this.text_value = null;
                    break;
                }
                default:
                    break;
            }
            this.currentQuestion = this.questions[this.currentQuestionId];
        }
    };
    ReplyPage.prototype.quit = function () {
        this.goTo(__WEBPACK_IMPORTED_MODULE_4__pages__["g" /* QuestionsPage */], 'backward', {});
    };
    ReplyPage.prototype.validYMD = function () {
        this.questions[this.currentQuestionId].goodAnswer = this.sliderYear._slides[this.sliderYear.getActiveIndex()].innerText +
            '-' +
            this.sliderMonth._slides[this.sliderMonth.getActiveIndex()].dataset.value +
            '-' +
            this.sliderDay._slides[this.sliderDay.getActiveIndex()].dataset.value;
        this.sliderDay.lockSwipes(true);
        this.sliderMonth.lockSwipes(true);
        this.sliderYear.lockSwipes(true);
        this.replied = true;
    };
    ReplyPage.prototype.validYM = function () {
        this.questions[this.currentQuestionId].goodAnswer = this.sliderYear._slides[this.sliderYear.getActiveIndex()].innerText +
            '-' +
            this.sliderMonth._slides[this.sliderMonth.getActiveIndex()].dataset.value;
        this.sliderMonth.lockSwipes(true);
        this.sliderYear.lockSwipes(true);
        this.replied = true;
    };
    ReplyPage.prototype.validY = function () {
        this.questions[this.currentQuestionId].goodAnswer = this.sliderYear._slides[this.sliderYear.getActiveIndex()].innerText;
        this.sliderYear.lockSwipes(true);
        this.replied = true;
    };
    ReplyPage.prototype.validINT = function () {
        this.questions[this.currentQuestionId].goodAnswer = this.int_value;
        this.replied = true;
    };
    ReplyPage.prototype.validTEXT = function () {
        this.questions[this.currentQuestionId].goodAnswer = this.text_value;
        this.replied = true;
    };
    ReplyPage.prototype.prepareLists = function () {
        this.years = new Array();
        for (var i = 1950; i <= 2019; i++) {
            this.years.push({ value: i, label: i });
        }
        this.months = new Array();
        this.months.push({ value: '01', label: 'Janvier' });
        this.months.push({ value: '02', label: 'Février' });
        this.months.push({ value: '03', label: 'Mars' });
        this.months.push({ value: '04', label: 'Avril' });
        this.months.push({ value: '05', label: 'Mai' });
        this.months.push({ value: '06', label: 'Juin' });
        this.months.push({ value: '07', label: 'Juillet' });
        this.months.push({ value: '08', label: 'Août' });
        this.months.push({ value: '09', label: 'Septembre' });
        this.months.push({ value: '10', label: 'Octobre' });
        this.months.push({ value: '11', label: 'Novembre' });
        this.months.push({ value: '12', label: 'Décembre' });
        this.days = new Array();
        for (var i = 1; i <= 31; i++) {
            this.days.push({ value: (i < 10 ? '0' + i : '' + i), label: (i < 10 ? '0' + i : '' + i) });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sliderDay'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], ReplyPage.prototype, "sliderDay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sliderMonth'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], ReplyPage.prototype, "sliderMonth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sliderYear'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], ReplyPage.prototype, "sliderYear", void 0);
    ReplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reply',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\reply\reply.html"*/'<ion-content padding>\n  <div class="question">{{currentQuestion.title}}</div>\n  <div class="answers">\n    <ng-container *ngIf="currentQuestion.type.name == \'QS\'">\n      <ion-row style="height: 100%" class="align-center-center">\n        <ion-col col-6 style="height: 25%;" *ngFor="let answer of currentQuestion.answers; let i = index">\n          <div class="answer">\n            <div class="padding-block" (click)="setGood(answer.id)">\n              <div [class]="\'block \' + getClass(answer.id)">{{answer.text}}</div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n     <ng-container *ngIf="currentQuestion.type.name == \'QCM\'">\n      <ion-row style="height: 100%" class="align-center-center">\n        <ion-col col-6 style="height: 25%;" *ngFor="let answer of currentQuestion.answers; let i = index">\n          <div class="answer">\n            <div class="padding-block" (click)="setQCMGood(answer.id)">\n              <div [class]="\'block \' + getQCMClass(answer.id)">{{answer.text}}</div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n    <ng-container *ngIf="currentQuestion.type.name == \'INT\'">\n      <ion-row class="qs-row">\n        <ion-col col-12 style="height: 100px;">\n          <ion-input [readonly]="replied" type="number"\n          [class]="replied ? \'align-center-center input-int valided\' : \'align-center-center input-int\'" \n          [(ngModel)]="int_value"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class="qs-actions">\n        <div style="text-align:center;width:100%">\n         <button ion-button icon-start (click)="validINT()">Valider</button>\n       </div>\n     </ion-row>\n   </ng-container>\n    <ng-container *ngIf="currentQuestion.type.name == \'TEXT\'">\n      <ion-row class="qs-row">\n        <ion-col col-12 style="height: 100px;">\n          <ion-input [readonly]="replied" type="text"\n          [class]="replied ? \'align-center-center input-int valided\' : \'align-center-center input-text\'" \n          [(ngModel)]="text_value"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class="qs-actions">\n        <div style="text-align:center;width:100%">\n         <button ion-button icon-start (click)="validTEXT()">Valider</button>\n       </div>\n     </ion-row>\n   </ng-container>\n   <ng-container *ngIf="currentQuestion.type.name == \'YMD\'">\n    <ion-row [class]="replied ? \'qs-row valided\' : \'qs-row\'">\n      <ion-col col-3 style="height: 100px;">\n        <ion-slides #sliderDay pager="false" direction="vertical" loop="true" watchSlidesVisibility="true" slidesPerView="3" centeredSlides="true">\n          <ng-container *ngFor="let day of days">\n            <ion-slide [attr.data-value]="day.value">{{day.label}}</ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n      <ion-col col-6 style="height: 100px;">\n        <ion-slides #sliderMonth pager="false" direction="vertical" loop="true" watchSlidesVisibility="true" slidesPerView="3" centeredSlides="true">\n          <ng-container *ngFor="let month of months">\n            <ion-slide  [attr.data-value]="month.value">{{month.label}}</ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n      <ion-col col-3 style="height: 100px;">\n        <ion-slides #sliderYear pager="false" direction="vertical" loop="true" watchSlidesVisibility="true" slidesPerView="3" centeredSlides="true">\n          <ion-slide *ngFor="let year of years">{{year.value}}</ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row class="qs-actions">\n      <div style="text-align:center;width:100%">\n       <button ion-button icon-start (click)="validYMD()">Valider</button>\n     </div>\n   </ion-row>\n </ng-container>\n <ng-container *ngIf="currentQuestion.type.name == \'YM\'">\n  <ion-row [class]="replied ? \'qs-row valided\' : \'qs-row\'">\n    <ion-col col-6 style="height: 100px;">\n      <ion-slides #sliderMonth pager="false" direction="vertical" loop="true" watchSlidesVisibility="true" slidesPerView="3" centeredSlides="true">\n\n        <ng-container *ngFor="let month of months">\n          <ion-slide [attr.data-value]="month.value">{{month.label}}</ion-slide>\n        </ng-container>\n      </ion-slides>\n    </ion-col>\n    <ion-col col-6 style="height: 100px;">\n      <ion-slides #sliderYear pager="false" direction="vertical" loop="true" watchSlidesVisibility="true" slidesPerView="3" centeredSlides="true">\n        <ion-slide *ngFor="let year of years">{{year.value}}</ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row class="qs-actions">\n    <div style="text-align:center;width:100%">\n     <button ion-button icon-start (click)="validYM()">Valider</button>\n   </div>\n </ion-row>\n</ng-container>\n<ng-container *ngIf="currentQuestion.type.name == \'Y\'">\n  <ion-row [class]="replied ? \'qs-row valided\' : \'qs-row\'">\n    <ion-col col-12 style="height: 100px;">\n      <ion-slides #sliderYear pager="false" direction="vertical" loop="true" watchSlidesVisibility="true" slidesPerView="3" centeredSlides="true">\n        <ion-slide *ngFor="let year of years">{{year.value}}</ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row class="qs-actions">\n    <div style="text-align:center;width:100%">\n     <button ion-button icon-start (click)="validY()">Valider</button>\n   </div>\n </ion-row>\n</ng-container>\n</div>\n<div class="actions">\n  <div class="quit" (click)="quit()">Quitter</div>\n  <div class="domain">\n    <div class="domain-block">\n      <img src="{{currentQuestion.category.image}}"/>\n      <div class="text">{{currentQuestion.category.title}}</div>\n    </div>\n  </div>\n  <div class="pass" [hidden]="!replied" (click)="nextQuestion()">Suivant</div>\n  <div class="pass" [hidden]="replied" (click)="doNotReply()">Ne pas répondre</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\reply\reply.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["e" /* User */]])
    ], ReplyPage);
    return ReplyPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=reply.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyLoaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(43);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ReplyLoaderPage = /** @class */ (function (_super) {
    __extends(ReplyLoaderPage, _super);
    function ReplyLoaderPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, api, user) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.api = api;
        _this.user = user;
        _this.remaining = 3;
        _this.delai = 1000;
        _this.startTimer();
        return _this;
    }
    ReplyLoaderPage.prototype.startTimer = function () {
        var _this = this;
        this.load();
        this.timer = setInterval(function (x) {
            _this.remaining -= _this.delai / 1000;
            if (_this.remaining <= 0) {
                _this.goTo(__WEBPACK_IMPORTED_MODULE_4__pages__["i" /* ReplyPage */], 'forward', { 'questions': _this.questions });
                clearInterval(_this.timer);
            }
        }, this.delai);
    };
    ReplyLoaderPage.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resolve;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Chargement des questions");
                        return [4 /*yield*/, this.loadQuestions()];
                    case 1:
                        resolve = _a.sent();
                        if (resolve.length == 0) {
                            clearInterval(this.timer);
                            this.goToQuestions('back');
                        }
                        this.questions = resolve;
                        return [2 /*return*/];
                }
            });
        });
    };
    ReplyLoaderPage.prototype.loadQuestions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data;
            data = {};
            data.user_id = _this.user.getId();
            _this.api.post('question/get-to-play', data)
                .subscribe(function (data) {
                var body;
                body = JSON.parse(data.text());
                resolve(body);
            }, function (err) {
            }, function () {
                //this.goToHome();
            });
        });
    };
    ReplyLoaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reply-loader',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\reply\reply-loader.html"*/'<ion-content padding>\n\n  <div class="h-full align-center-center overlay-spinner">\n\n    <span class="time">{{remaining}}</span>\n\n  </div>\n\n  <div class="h-full align-center-center overlay-spinner">\n\n    <ion-spinner icon="spiral"></ion-spinner>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\reply\reply-loader.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["e" /* User */]])
    ], ReplyLoaderPage);
    return ReplyLoaderPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=reply-loader.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SettingsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsInterestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(43);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        return _this;
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.nbCategories = this.categoryProvider.getNbSelected();
    };
    SettingsPage.prototype.pushToInterest = function () {
        this.pushTo(SettingsInterestsPage, 'forward', {});
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\settings\settings.html"*/'<ion-header>\n    <ion-navbar>\n    <ion-row>\n      <ion-col col-3 (click)="goToProfile(\'back\')"><ion-icon name="people"></ion-icon></ion-col>\n      <ion-col col-3 (click)="goToQuestions(\'back\')"><ion-icon name="play"></ion-icon></ion-col>\n      <ion-col col-3><ion-icon name="search"></ion-icon></ion-col>\n      <ion-col col-3 class="active"><ion-icon name="settings"></ion-icon></ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Mes centres d\'intérêt</ion-list-header>\n    <button ion-item (click)="pushToInterest()" >\n        <ion-icon name="game-controller-a" item-start></ion-icon>{{ nbCategories }} centres d\'intérêt\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* CategoryProvider */]])
    ], SettingsPage);
    return SettingsPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

var SettingsInterestsPage = /** @class */ (function (_super) {
    __extends(SettingsInterestsPage, _super);
    function SettingsInterestsPage(viewCtrl, navCtrl, alertCtrl, storage, toastCtrl, modalCtrl, params, categoryProvider, user) {
        var _this = _super.call(this, viewCtrl, navCtrl, alertCtrl, toastCtrl, modalCtrl, params) || this;
        _this.viewCtrl = viewCtrl;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.params = params;
        _this.categoryProvider = categoryProvider;
        _this.user = user;
        _this.changed = false;
        _this.categories = _this.categoryProvider.sort();
        return _this;
    }
    SettingsInterestsPage.prototype.change = function () {
        this.changed = true;
    };
    SettingsInterestsPage.prototype.ionViewCanLeave = function () {
        if (this.categoryProvider.getNbSelected() <= 0) {
            this.toast('Choisis au moins un centre d\'intérêt');
        }
        return this.categoryProvider.getNbSelected() > 0;
    };
    SettingsInterestsPage.prototype.ionViewWillLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var update;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.changed) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.user.updateCategories()];
                    case 1:
                        update = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SettingsInterestsPage.prototype.ionViewDidLeave = function () {
        if (this.changed) {
            this.toast('Modifications prises en compte');
        }
    };
    SettingsInterestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Apps\quizzy\quizzy\src\pages\settings\settings-interests.html"*/'\n\n<ion-header>\n\n <ion-navbar>\n\n   <ion-title>Mes centres d\'intérêt</ion-title>\n\n </ion-navbar>\n\n</ion-header>\n\n<ion-content class="interests">\n\n  <ion-list>\n\n    <ng-container *ngFor="let category of categories; let i = index">\n\n      <ion-item>\n\n        <ion-label>{{category.name}}</ion-label>\n\n        <ion-checkbox [(ngModel)]="category.selected" [checked]="category.selected" (click)="change()"></ion-checkbox>\n\n        <img item-end [src]="category.picture"/>\n\n      </ion-item>\n\n    </ng-container>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Apps\quizzy\quizzy\src\pages\settings\settings-interests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* CategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["e" /* User */]])
    ], SettingsInterestsPage);
    return SettingsInterestsPage;
}(__WEBPACK_IMPORTED_MODULE_3__abstract__["a" /* AbstractPage */]));

//# sourceMappingURL=settings.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map