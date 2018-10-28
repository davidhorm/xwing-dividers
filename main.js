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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    width: 40em;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIHdpZHRoOiA0MGVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\">\n\n<h1>About X-Wing Dividers</h1>\n\n<div>\n  This site was created to support the players <a href=\"http://x-wing.com/\">X-Wing Second Edition</a> miniature game by \n  <a href=\"http://fantasyflightgames.com/\">Fantasy Flight Games</a>. This site is unofficial and is not affiliated with Fantasy Flight Games, \n  Lucasfilm Ltd., or Disney. You may log issues or suggestion regarding this site at <a href=\"https://github.com/davidhorm/xwing-dividers/issues\">GitHub</a>.\n</div>\n\n<div>\n  The game comes with a lot of cards. I store all the upgrade and pilot cards in a couple\n  <a href=\"https://smile.amazon.com/gp/product/B00H5HC9G4/ref=oh_aui_search_detailpage?ie=UTF8&psc=1\">400 Card Storage Boxes</a>. It was difficult to take cards \n  out from the box. This site is generates divider/caddy pattern you can print out and put together. I print the pattern on  \n  <a href=\"https://smile.amazon.com/gp/product/B001QG0K48/ref=oh_aui_search_detailpage?ie=UTF8&psc=1\">heavyweight cardstock 140 lb index paper</a> and put it together with \n  <a href=\"https://smile.amazon.com/gp/product/B0025W9AWA/ref=oh_aui_search_detailpage?ie=UTF8&psc=1\">Double Sided Tape</a>. Cut on the solid lines, and fold on the dashed lines.\n  You can print directly from the browser and the non-essential elements on the page will be removed.\n</div>\n\n<div>\n  When you select a card type from the drop down, it'll automatically enter a number for the caddy length. This default length is based on the number of cards that \n  comes with the core box, and the first three Conversion Kits (Rebels, Empire, and Scum). You can enter your own length in millimeters. Or I recommend 1mm for \n  every 3 cards unsleeved. The maximum caddy length that will print on a standard A4 sized sheet is 101mm when you set the printer margins to narrow.\n</div>\n\n<div>This site uses <a href=\"//github.com/geordanr/xwing-miniatures-font\">xwing-miniatures-font</a>.</div>\n\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Divider\">\n    <app-divider></app-divider>\n  </mat-tab>\n  <mat-tab label=\"About\">\n    <app-about></app-about>\n  </mat-tab>\n</mat-tab-group>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'X-Wing Dividers';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _divider_divider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./divider/divider.component */ "./src/app/divider/divider.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _divider_divider_component__WEBPACK_IMPORTED_MODULE_10__["DividerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/divider/divider.component.css":
/*!***********************************************!*\
  !*** ./src/app/divider/divider.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    margin-top: 1.5em;\r\n}\r\n\r\n.mat-form-field {\r\n    margin-left: 1.5em;\r\n    width: 7em;\r\n}\r\n\r\n/* Table heights, widths, and borders */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    font-family: 'Jura', sans-serif;\r\n    margin-top: 1.5em;\r\n}\r\n\r\ntd {\r\n    border-width: 2px;\r\n}\r\n\r\ntd.top-border {\r\n    border-style: solid solid dashed solid;\r\n}\r\n\r\ntd.bottom-border {\r\n    border-style: dashed solid solid solid;\r\n}\r\n\r\ntd.side {\r\n    width: 44mm;\r\n}\r\n\r\ntd.middle {\r\n    width: 92mm;\r\n}\r\n\r\n/* labels have the icon and title */\r\n\r\ntd.top-label {\r\n    height: 67mm; /* td.top-label.height = td.tab.height + td.no-tab-top.height */\r\n    text-align: center;\r\n    vertical-align: top;\r\n    font-size: 4mm;\r\n}\r\n\r\ntd.no-tab-top {\r\n    height: 35mm; /* td.top-label.height = td.tab.height + td.no-tab-top.height */\r\n}\r\n\r\ni.xwing-miniatures-font {\r\n    font-size: 4mm;\r\n}\r\n\r\ntd.bottom-label {\r\n    height: 45mm; /* td.bottom-label.height = td.tab.height + td.no-tab-bottom.height */\r\n}\r\n\r\ntd.no-tab-bottom {\r\n    height: 13mm; /* td.bottom-label.height = td.tab.height + td.no-tab-bottom.height */\r\n}\r\n\r\n/* The tab that is used to glue */\r\n\r\ntd.tab {\r\n    height: 32mm; /* td.*-label.height = td.tab.height + td.no-tab-*.height */\r\n    text-align: center;\r\n}\r\n\r\ntd.no-tab-top, td.no-tab-bottom {\r\n    border-width: 0px;\r\n}\r\n\r\ntd.flex {\r\n    border-style: dashed;\r\n}\r\n\r\ntd.left-flex {\r\n    border-left-style: solid;\r\n}\r\n\r\ntd.right-flex {\r\n    border-right-style: solid;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGl2aWRlci9kaXZpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkOztBQUVELHdDQUF3Qzs7QUFDeEM7SUFDSSwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHVDQUF1QztDQUMxQzs7QUFFRDtJQUNJLHVDQUF1QztDQUMxQzs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0lBQ0ksYUFBYSxDQUFDLGdFQUFnRTtJQUM5RSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhLENBQUMsZ0VBQWdFO0NBQ2pGOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGFBQWEsQ0FBQyxzRUFBc0U7Q0FDdkY7O0FBRUQ7SUFDSSxhQUFhLENBQUMsc0VBQXNFO0NBQ3ZGOztBQUVELGtDQUFrQzs7QUFDbEM7SUFDSSxhQUFhLENBQUMsNERBQTREO0lBQzFFLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2RpdmlkZXIvZGl2aWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDdlbTtcclxufVxyXG5cclxuLyogVGFibGUgaGVpZ2h0cywgd2lkdGhzLCBhbmQgYm9yZGVycyAqL1xyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxudGQudG9wLWJvcmRlciB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIHNvbGlkIGRhc2hlZCBzb2xpZDtcclxufVxyXG5cclxudGQuYm90dG9tLWJvcmRlciB7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZCBzb2xpZCBzb2xpZCBzb2xpZDtcclxufVxyXG5cclxudGQuc2lkZSB7XHJcbiAgICB3aWR0aDogNDRtbTtcclxufVxyXG5cclxudGQubWlkZGxlIHtcclxuICAgIHdpZHRoOiA5Mm1tO1xyXG59XHJcblxyXG4vKiBsYWJlbHMgaGF2ZSB0aGUgaWNvbiBhbmQgdGl0bGUgKi9cclxudGQudG9wLWxhYmVsIHtcclxuICAgIGhlaWdodDogNjdtbTsgLyogdGQudG9wLWxhYmVsLmhlaWdodCA9IHRkLnRhYi5oZWlnaHQgKyB0ZC5uby10YWItdG9wLmhlaWdodCAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogNG1tO1xyXG59XHJcblxyXG50ZC5uby10YWItdG9wIHtcclxuICAgIGhlaWdodDogMzVtbTsgLyogdGQudG9wLWxhYmVsLmhlaWdodCA9IHRkLnRhYi5oZWlnaHQgKyB0ZC5uby10YWItdG9wLmhlaWdodCAqL1xyXG59XHJcblxyXG5pLnh3aW5nLW1pbmlhdHVyZXMtZm9udCB7XHJcbiAgICBmb250LXNpemU6IDRtbTtcclxufVxyXG5cclxudGQuYm90dG9tLWxhYmVsIHtcclxuICAgIGhlaWdodDogNDVtbTsgLyogdGQuYm90dG9tLWxhYmVsLmhlaWdodCA9IHRkLnRhYi5oZWlnaHQgKyB0ZC5uby10YWItYm90dG9tLmhlaWdodCAqL1xyXG59XHJcblxyXG50ZC5uby10YWItYm90dG9tIHtcclxuICAgIGhlaWdodDogMTNtbTsgLyogdGQuYm90dG9tLWxhYmVsLmhlaWdodCA9IHRkLnRhYi5oZWlnaHQgKyB0ZC5uby10YWItYm90dG9tLmhlaWdodCAqL1xyXG59XHJcblxyXG4vKiBUaGUgdGFiIHRoYXQgaXMgdXNlZCB0byBnbHVlICovXHJcbnRkLnRhYiB7XHJcbiAgICBoZWlnaHQ6IDMybW07IC8qIHRkLiotbGFiZWwuaGVpZ2h0ID0gdGQudGFiLmhlaWdodCArIHRkLm5vLXRhYi0qLmhlaWdodCAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZC5uby10YWItdG9wLCB0ZC5uby10YWItYm90dG9tIHtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG50ZC5mbGV4IHtcclxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG59XHJcblxyXG50ZC5sZWZ0LWZsZXgge1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG50ZC5yaWdodC1mbGV4IHtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/divider/divider.component.html":
/*!************************************************!*\
  !*** ./src/app/divider/divider.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"non-print\">\n\n<h1>X-Wing Dividers</h1>\n<div>\n  Select a Card Type. Enter a caddy length in millimeters. Print at Scale 100% (instead of \"Shrink to fit\") and Narrow margins. Cut on solid lines and fold on dashed lines.\n</div>\n\n<div>\n  <mat-form-field>\n    <mat-select placeholder=\"Card Type\" [(ngModel)]=\"selectedCardType\" (selectionChange)=\"caddyLength = selectedCardType.defaultLength\">\n      <mat-option *ngFor=\"let cardType of cardTypes\" [value]=\"cardType\">\n        {{cardType.title}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Caddy Length (mm)\" [(ngModel)]=\"caddyLength\" />\n  </mat-form-field>\n</div>\n  \n\n\n</div>\n\n<table>\n  <tbody>\n    <tr>\n      <td class=\"side no-tab-top\"><!-- empty space in corner--></td>\n      <td class=\"middle top-label top-border\" rowspan=\"2\"><i class=\"xwing-miniatures-font {{selectedCardType?.iconClassName}}\"></i> {{selectedCardType?.title}}</td>\n      <td class=\"side no-tab-top\"><!-- empty space in corner--></td>\n    </tr>\n    <tr>\n      <td class=\"side tab top-border\">glue</td>\n      <td class=\"side tab top-border\">glue</td>\n    </tr>\n    <tr [style.height.mm]=\"caddyLength\">\n      <td class=\"side flex left-flex\"><!-- middle flexible row --></td>\n      <td class=\"middle flex\"><!-- middle flexible row --></td>\n      <td class=\"side flex right-flex\"><!-- middle flexible row --></td>\n    </tr>\n    <tr>\n      <td class=\"side tab bottom-border\">glue</td>\n      <td class=\"middle bottom-label bottom-border\" rowspan=\"2\"></td>\n      <td class=\"side tab bottom-border\">glue</td>\n    </tr>\n    <tr>\n      <td class=\"side no-tab-bottom\"><!-- empty space in corner--></td>\n      <td class=\"side no-tab-bottom\"><!-- empty space in corner--></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/divider/divider.component.ts":
/*!**********************************************!*\
  !*** ./src/app/divider/divider.component.ts ***!
  \**********************************************/
/*! exports provided: DividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_card_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/card-type.service */ "./src/app/shared/card-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DividerComponent = /** @class */ (function () {
    function DividerComponent() {
        /**
         * The list of card types in the dropdown.
         */
        this.cardTypes = _shared_card_type_service__WEBPACK_IMPORTED_MODULE_1__["CARD_TYPES"];
        /**
         * The selected card type. Default to the first item in the dropdown.
         */
        this.selectedCardType = this.cardTypes[0];
        /**
         * The caddy length in millimeters. Default to the first item in the dropdown.
         */
        this.caddyLength = this.cardTypes[0].defaultLength;
    }
    DividerComponent.prototype.ngOnInit = function () {
    };
    DividerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-divider',
            template: __webpack_require__(/*! ./divider.component.html */ "./src/app/divider/divider.component.html"),
            styles: [__webpack_require__(/*! ./divider.component.css */ "./src/app/divider/divider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DividerComponent);
    return DividerComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-type.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/card-type.service.ts ***!
  \*********************************************/
/*! exports provided: CARD_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_TYPES", function() { return CARD_TYPES; });
var CARD_TYPES = [
    { title: 'Astromech', iconClassName: 'xwing-miniatures-font-astromech', defaultLength: 8 },
    { title: 'Cannon', iconClassName: 'xwing-miniatures-font-cannon', defaultLength: 8 },
    { title: 'Configuration', iconClassName: 'xwing-miniatures-font-config', defaultLength: 4 },
    { title: 'Crew', iconClassName: 'xwing-miniatures-font-crew', defaultLength: 27 },
    { title: 'Device', iconClassName: 'xwing-miniatures-font-device', defaultLength: 10 },
    { title: 'Force Power', iconClassName: 'xwing-miniatures-font-forcepower', defaultLength: 3 },
    { title: 'Gunner', iconClassName: 'xwing-miniatures-font-gunner', defaultLength: 11 },
    { title: 'Illicit', iconClassName: 'xwing-miniatures-font-illicit', defaultLength: 8 },
    { title: 'Missile', iconClassName: 'xwing-miniatures-font-missile', defaultLength: 13 },
    { title: 'Modification', iconClassName: 'xwing-miniatures-font-modification', defaultLength: 19 },
    { title: 'Sensor', iconClassName: 'xwing-miniatures-font-sensor', defaultLength: 7 },
    { title: 'Talent', iconClassName: 'xwing-miniatures-font-talent', defaultLength: 33 },
    { title: 'Tech', iconClassName: 'xwing-miniatures-font-tech', defaultLength: 5 },
    { title: 'Title', iconClassName: 'xwing-miniatures-font-title', defaultLength: 7 },
    { title: 'Torpedo', iconClassName: 'xwing-miniatures-font-torpedo', defaultLength: 9 },
    { title: 'Turret', iconClassName: 'xwing-miniatures-font-turret', defaultLength: 5 },
    { title: 'Galactic Empire', iconClassName: 'xwing-miniatures-font-empire', defaultLength: 40 },
    { title: 'Rebel Alliance', iconClassName: 'xwing-miniatures-font-rebel', defaultLength: 40 },
    { title: 'Scum & Villainy', iconClassName: 'xwing-miniatures-font-scum', defaultLength: 40 },
    { title: 'First Order', iconClassName: 'xwing-miniatures-font-firstorder', defaultLength: 20 },
    { title: 'Resistance', iconClassName: 'xwing-miniatures-font-rebel-outline', defaultLength: 20 }
];


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git\xwing-dividers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map