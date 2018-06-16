(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\t\n\t<h3 class=\"text-center\"> Filters </h3>\n\t<div class=\"filters-containers\">\n\t\t<div class=\"fullname-filter mr-15px mt-10px\">\n\t\t\t<input type=\"text\" class=\"w-100\" [(ngModel)]=\"input.fullname\" (ngModelChange)=\"generateSuggestions('fullname')\" placeholder=\"Select Full Name\">\n\t\t\t<div *ngIf=\"displaySuggestions && selectedInput == 'fullname'\" class=\"suggestions-container\">\n\t\t\t\t<div *ngFor=\"let fullname of splittedArray\" class=\"suggestion-box\" (click)=\"selectSuggestion(fullname.value)\">\n\t\t\t\t\t<ng-container *ngFor=\"let element of fullname.splitted\"><span [ngClass]=\"{'bold': element.toLowerCase() == input.fullname.toLowerCase()}\">{{ element }}</span></ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"email-filter mr-15px mt-10px\">\n\t\t\t<input type=\"text\" class=\"w-100\" [(ngModel)]=\"input.email\" (ngModelChange)=\"generateSuggestions('email')\" placeholder=\"Select Email\">\n\t\t\t<div *ngIf=\"displaySuggestions && selectedInput == 'email'\" class=\"suggestions-container\">\n\t\t\t\t<div *ngFor=\"let email of splittedArray\" class=\"suggestion-box\" (click)=\"selectSuggestion(email.value)\">\n\t\t\t\t\t<ng-container *ngFor=\"let element of email.splitted\"><span [ngClass]=\"{'bold': element.toLowerCase() == input.email.toLowerCase()}\">{{ element }}</span></ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"mr-15px mt-10px\">\n\t\t\t<select [(ngModel)]=\"input.status\" (ngModelChange)=\"filter()\">\n\t\t\t\t<option [value]=\"'default'\"> Select Status </option>\n\t\t\t\t<option [value]=\"'active'\"> Active </option>\n\t\t\t\t<option [value]=\"'inactive'\"> Inactive </option>\n\t\t\t\t<option [value]=\"'premium'\"> Premium </option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<button class=\"search-btn mr-15px mt-10px\" (click)=\"search()\"> Search </button>\n\t\t\n\t\t<button class=\"reset-btn mt-10px\" (click)=\"resetFilters()\"> Reset Filters </button>\n\t</div>\n\n\t\n\t<h3 class=\"mt-40px text-center\"> Table </h3>\n\t<div class=\"mt-10px table-container\">\n\t\t<table>\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th> ID </th>\n\t\t\t\t\t<th> Full Name </th>\n\t\t\t\t\t<th> Email </th>\n\t\t\t\t\t<th> Status </th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let row of tableData; trackBy: trackByFn\">\n\t\t\t\t\t<td> {{ row.id }} </td>\n\t\t\t\t\t<td> {{ row.fullname }} </td>\n\t\t\t\t\t<td> {{ row.email }} </td>\n\t\t\t\t\t<td [ngClass]=\"{'green-letters': row.status == 'active', 'red-letters': row.status == 'inactive', 'golden-letters': row.status == 'premium'}\"> {{ row.status }} </td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<tr *ngIf=\"noData\" class=\"red-letters\">\n\t\t\t\t\t<td colspan=\"4\"> No data </td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n\n<button *ngIf=\"displayScrollToTop\" class=\"scroll-top-btn\" (click)=\"scrollToTop()\"> ⇧ </button>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.input = {
            fullname: null,
            email: null,
            status: 'default'
        };
        this.validFilters = {
            fullname: false,
            email: false
        };
    }
    AppComponent.prototype.onClickAnywhere = function () {
        if (this.displaySuggestions == true) {
            this.displaySuggestions = false; //hide suggestions
        }
    };
    AppComponent.prototype.onScroll = function (event) {
        if (document.documentElement.scrollTop >= 200) {
            this.displayScrollToTop = true; //display scroll to top button
        }
        else {
            this.displayScrollToTop = false; //hide scroll to top button
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.splittedArray = []; //initialize variables
        this.displaySuggestions = false;
        this.selectedInput = null;
        this.getData(); //call function getData
    };
    AppComponent.prototype.getData = function () {
        var _this = this;
        var url = 'assets/data.json'; //this is the url from where site gets data
        this.sub = this.http.get(url).subscribe(function (data) {
            _this.savedData = data; //assign server's response to a variable
            _this.tableData = _this.savedData; //display server's response
            _this.noData = (_this.tableData.length > 0) ? false : true; //update variable if server returned nothing or not
        }, function (error) {
            _this.connectionErrorHandler(); //call function connectionErrorHandler
        });
    };
    AppComponent.prototype.generateSuggestions = function (inputName) {
        var tempArray, regex, existsInSuggestions;
        this.splittedArray = []; //initialize variables
        this.displaySuggestions = false;
        this.selectedInput = inputName;
        this.validFilters[this.selectedInput] = false;
        if (!this.input[this.selectedInput]) {
            this.filter(); //call function filter
            return; //stop function's execution
        }
        else if (this.input[this.selectedInput].length < 3) {
            return; //stop function's execution
        }
        existsInSuggestions = false;
        for (var _i = 0, _a = this.savedData; _i < _a.length; _i++) {
            var row = _a[_i];
            if (this.selectedInput == 'fullname') {
                for (var _b = 0, _c = this.splittedArray; _b < _c.length; _b++) {
                    var element = _c[_b];
                    if (element.value == row[this.selectedInput]) {
                        existsInSuggestions = true;
                    }
                }
            }
            if (existsInSuggestions == false) {
                regex = new RegExp('(' + this.input[this.selectedInput] + ')', 'i');
                //this regular expression will search given server record for input
                tempArray = row[this.selectedInput].split(regex); //split string by regular expression and store the result into array
                if (tempArray.length > 1) {
                    this.splittedArray.push({ value: row[this.selectedInput], splitted: tempArray });
                    //push value and splitted array into array
                }
            }
        }
        if (this.splittedArray.length > 0) {
            this.displaySuggestions = true; //display suggestions
        }
    };
    AppComponent.prototype.selectSuggestion = function (value) {
        this.input[this.selectedInput] = value; //set input to selected suggestion
        this.validFilters[this.selectedInput] = true; //filter is valid
        this.filter(); //call function filter
    };
    AppComponent.prototype.search = function () {
        if (this.input.fullname) {
            this.validFilters.fullname = true; //fullname filter is valid
        }
        if (this.input.email) {
            this.validFilters.email = true; //email filter is valid
        }
        this.filter(); //call function filter
    };
    AppComponent.prototype.filter = function () {
        var tempData = this.savedData; //set server data to a variable
        if (this.validFilters.fullname == true) {
            tempData = this.matchData(tempData, 'fullname'); //call function matchData that filters data by fullname
        }
        if (this.validFilters.email == true) {
            tempData = this.matchData(tempData, 'email'); //call function matchData that filters data by email
        }
        if (this.input.status != 'default') {
            tempData = this.matchData(tempData, 'status'); //call function matchData that filters data by status
        }
        this.tableData = tempData; //display data after filters are applied
        this.noData = (this.tableData.length > 0) ? false : true; //update variable if there are data in table or not
    };
    AppComponent.prototype.resetFilters = function () {
        this.input = {
            fullname: null,
            email: null,
            status: 'default'
        };
        this.validFilters = {
            fullname: false,
            email: false
        };
        this.displaySuggestions = false;
        this.tableData = this.savedData;
        this.noData = (this.tableData.length > 0) ? false : true;
    };
    AppComponent.prototype.scrollToTop = function () {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    AppComponent.prototype.trackByFn = function (index, row) {
        return row.id;
    };
    AppComponent.prototype.matchData = function (data, property) {
        var matchedRows = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var row = data_1[_i];
            if (row[property] == this.input[property]) {
                matchedRows.push(row); //push server record into array
                if (property == 'email') {
                    break; //stop loop
                }
            }
        }
        return matchedRows; //return matched server records
    };
    AppComponent.prototype.connectionErrorHandler = function () {
        this.savedData = []; //no server data
        this.tableData = [];
        this.noData = true;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe(); //delete subscription to server
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onClickAnywhere", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aggelos/Angular/filters/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map