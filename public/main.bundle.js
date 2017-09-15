webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n    margin: 20px auto;\r\n    width: 30%;\r\n    border: 2px solid red;\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"authService.user | async\">Welcome {{ (authService.user | async)?.email }}!</h1>\r\n\r\n<div *ngIf=\"!(authService.user | async)\">\r\n  <input type=\"text\"  name=\"aa\" [(ngModel)]=\"email\" placeholder=\"email\">\r\n  <input type=\"password\"  name=\"first\" [(ngModel)]=\"password\" placeholder=\"email\">\r\n\r\n  <button (click)=\"signup()\" [disabled]=\"!email || !password\">\r\n    Signup\r\n  </button>\r\n\r\n  <button (click)=\"login()\" [disabled]=\"!email || !password\">\r\n    Login\r\n  </button>\r\n</div>\r\n\r\n<button (click)=\"logout()\" *ngIf=\"authService.user | async\">\r\n  Logout\r\n</button>\r\nOur input fields two-way bind to the email and password\r\n<div class=\"wrapper\" *ngIf=\"authService.user | async\">\r\n    <span>message:</span>\r\n    <input type=\"text\" name=\"message\" [(ngModel)]=\"message\" placeholder=\"some text\"><br>\r\n    <span>phone number:</span>\r\n    <input type=\"text\" name=\"sendTo\" [(ngModel)]=\"sendTo\" placeholder=\"phone number\"><br>\r\n    <button (click)=\"updateData()\">updateData</button>\r\n    <button (click)=\"sendMessage()\">send message</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(db, afAuth, authService, http, Jsonp) {
        this.db = db;
        this.afAuth = afAuth;
        this.authService = authService;
        this.http = http;
        this.Jsonp = Jsonp;
        this.email = '';
        this.password = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.authService.user)
            this.getDB();
    };
    AppComponent.prototype.getDB = function () {
        var _this = this;
        this.pizzaData = this.db.object('/');
        this.pizzaData.subscribe(function (obj) {
            _this.message = obj.message;
            _this.sendTo = obj.sendTo;
        });
    };
    AppComponent.prototype.updateData = function () {
        this.pizzaData.update({ message: this.message, sendTo: this.sendTo })
            .then(function (res) { return console.log('data updated!'); });
    };
    AppComponent.prototype.sendMessage = function () {
        this.Jsonp.get('https://us-central1-pizzatwilio.cloudfunctions.net/sendSMS1')
            .subscribe(function (d) { return console.log(d); });
    };
    AppComponent.prototype.signup = function () {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    };
    AppComponent.prototype.login = function () {
        this.authService.login(this.email, this.password);
        this.email = this.password = '';
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Jsonp */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pizza_status_pizza_status_component__ = __webpack_require__("../../../../../src/app/pizza-status/pizza-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* JsonpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pizza_status_pizza_status_component__["a" /* PizzaStatusComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pizza-status/pizza-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pizza-status/pizza-status.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Order Status: \n  <span class=\"tag is-large\" \n        [ngClass]=\"{\n                  'is-dark'    : pizza.status == 'submitted' ,\n                  'is-warning' : pizza.status == 'cooking',\n                  'is-primary' : pizza.status == 'on its way',\n                  'is-success' : pizza.status == 'delivered'\n                  }\">\n    \n    {{ pizza.status }}\n  </span>\n</h1>\n<ul>\n  <li>Order Number: {{ pizza.$key }}</li>\n  <li>Topping: {{ pizza.topping }}</li>\n  <li>Price: {{ pizza.price }}</li>\n</ul>\n<hr>\n<h1>Get Updates via Text Message</h1>\n<form [formGroup]=\"numberForm\" (ngSubmit)=\"updatePhoneNumber()\" novalidate>\n  <input type=\"text\" formControlName=\"country\"  placeholder=\"1\">\n  <input type=\"text\" formControlName=\"area\"     placeholder=\"916\">\n  <input type=\"text\" formControlName=\"prefix\"   placeholder=\"555\">\n  <input type=\"text\" formControlName=\"line\"     placeholder=\"5555\">\n  <input type=\"submit\" value=\"Get SMS Updates\" [disabled]=\"numberForm.invalid\">\n</form>\n<p *ngIf=\"numberForm.invalid && numberForm.touched\">That's not a valid phone number</p>\n<h3> Updates will be texed to {{ pizza.phoneNumber || 'none' }}</h3>"

/***/ }),

/***/ "../../../../../src/app/pizza-status/pizza-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzaStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PizzaStatusComponent = (function () {
    function PizzaStatusComponent(db, fb) {
        this.db = db;
        this.fb = fb;
    }
    PizzaStatusComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.order = this.db.object('/orders/testPizza123');
    };
    PizzaStatusComponent.prototype.updatePhoneNumber = function () {
        this.order.update({ phoneNumber: this.e164 });
    };
    PizzaStatusComponent.prototype.buildForm = function () {
        this.numberForm = this.fb.group({
            country: this.validateMinMax(1, 2),
            area: this.validateMinMax(3, 3),
            prefix: this.validateMinMax(3, 3),
            line: this.validateMinMax(4, 4)
        });
    };
    /// helper to add validations to form based on min/max length
    PizzaStatusComponent.prototype.validateMinMax = function (min, max) {
        return ['', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(min),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(max),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('[0-9]+') // validates input is digit
            ]];
    };
    Object.defineProperty(PizzaStatusComponent.prototype, "e164", {
        /// converts the current form values to E164
        get: function () {
            var form = this.numberForm.value;
            var num = form.country + form.area + form.prefix + form.line;
            return "+" + num;
        },
        enumerable: true,
        configurable: true
    });
    return PizzaStatusComponent;
}());
PizzaStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pizza-status',
        template: __webpack_require__("../../../../../src/app/pizza-status/pizza-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pizza-status/pizza-status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], PizzaStatusComponent);

var _a, _b;
//# sourceMappingURL=pizza-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
    }
    AuthService.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDtWmHBfmDSMu8slmlMHrjdMSekwGEn9GQ",
        authDomain: "pizzatwilio.firebaseapp.com",
        databaseURL: "https://pizzatwilio.firebaseio.com",
        projectId: "pizzatwilio",
        storageBucket: "pizzatwilio.appspot.com",
        messagingSenderId: "603360306030"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map