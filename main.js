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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_prova_prova_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/prova/prova.component */ "./src/app/components/prova/prova.component.ts");
/* harmony import */ var _components_cadastro_cadastro_provas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cadastro/cadastro-provas.component */ "./src/app/components/cadastro/cadastro-provas.component.ts");
/* harmony import */ var _components_listagem_prova_listagem_prova_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/listagem-prova/listagem-prova.component */ "./src/app/components/listagem-prova/listagem-prova.component.ts");
/* harmony import */ var _components_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ranking/ranking.component */ "./src/app/components/ranking/ranking.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'prova/:id', component: _components_prova_prova_component__WEBPACK_IMPORTED_MODULE_4__["ProvaComponent"] },
    { path: 'provas', component: _components_listagem_prova_listagem_prova_component__WEBPACK_IMPORTED_MODULE_6__["ListagemProvaComponent"] },
    { path: 'manutencaoprova', component: _components_cadastro_cadastro_provas_component__WEBPACK_IMPORTED_MODULE_5__["CadastroProvaComponent"] },
    { path: 'manutencaoprova/:id', component: _components_cadastro_cadastro_provas_component__WEBPACK_IMPORTED_MODULE_5__["CadastroProvaComponent"] },
    { path: 'ranking', component: _components_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_7__["RankingComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  .example-is-mobile .example-toolbar {\n    position: fixed;\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n    z-index: 2;\n  }\n  \n  h1.example-app-name {\n    margin-left: 8px;\n  }\n  \n  .example-sidenav-container {\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n    flex: 1;\n  }\n  \n  .example-is-mobile .example-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    flex: 1 0 auto;\n  }\n  \n  .menu-item {\n    width: 100em;\n    padding-left: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsK0VBQStFO0lBQy9FLFdBQVc7R0FDWjs7RUFFRDtJQUNFLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFOzZGQUN5RjtJQUN6RixRQUFRO0dBQ1Q7O0VBRUQ7SUFDRTtrRUFDOEQ7SUFDOUQsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLGFBQWE7SUFDYixrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgXG4gIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgICBmbGV4OiAxO1xuICB9XG4gIFxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgICBmbGV4OiAxIDAgYXV0bztcbiAgfVxuXG4gIC5tZW51LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDBlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon aria-label=\"Example icon-button with a heart icon\">menu</mat-icon>\n    </button>\n    <h1 class=\"example-app-name\" style=\"margin-left: 1em;\">Sistema de Avaliação</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\">\n                          <!-- [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\"> -->\n    <mat-sidenav #snav [mode]=\"side\"  [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/login']\" (click)=\"snav.toggle()\" class=\"menu-item\" *ngIf=\"!logged\">\n          <mat-icon aria-label=\"Login\" style=\"margin-right: 10%;\">people</mat-icon> Login\n        </a>\n        <a mat-list-item [routerLink]=\"['/home']\" (click)=\"snav.toggle()\" class=\"menu-item\">\n          <mat-icon aria-label=\"Home\" style=\"margin-right: 10%;\">home</mat-icon> Home\n        </a>\n        <!-- <a mat-list-item [routerLink]=\"['/provas']\" (click)=\"snav.toggle()\" class=\"menu-item\" *ngIf=\"logged\"> -->\n        <a mat-list-item [routerLink]=\"['/provas']\" (click)=\"snav.toggle()\" class=\"menu-item\">\n          <mat-icon aria-label=\"Provas\" style=\"margin-right: 10%;\">ballot</mat-icon> Provas\n        </a>\n        <a mat-list-item [routerLink]=\"['/logout']\" (click)=\"snav.toggle()\" class=\"menu-item\" *ngIf=\"logged\">\n          <mat-icon aria-label=\"Home\" style=\"margin-right: 10%;\">logout</mat-icon> LogOut\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content style=\"padding-left: 5%; padding-right: 5%;\">\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div> "

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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
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
    function AppComponent(changeDetectorRef, media) {
        this.shouldRun = true;
        this.logged = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.logged = sessionStorage.getItem('logged') == 'true' ? true : false;
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.logged = sessionStorage.getItem('logged') == 'true' ? true : false;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_prova_prova_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/prova/prova.component */ "./src/app/components/prova/prova.component.ts");
/* harmony import */ var _components_cadastro_cadastro_provas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cadastro/cadastro-provas.component */ "./src/app/components/cadastro/cadastro-provas.component.ts");
/* harmony import */ var _components_listagem_prova_listagem_prova_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/listagem-prova/listagem-prova.component */ "./src/app/components/listagem-prova/listagem-prova.component.ts");
/* harmony import */ var _components_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ranking/ranking.component */ "./src/app/components/ranking/ranking.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_prova_prova_component__WEBPACK_IMPORTED_MODULE_9__["ProvaComponent"],
                _components_cadastro_cadastro_provas_component__WEBPACK_IMPORTED_MODULE_10__["CadastroProvaComponent"],
                _components_listagem_prova_listagem_prova_component__WEBPACK_IMPORTED_MODULE_11__["ListagemProvaComponent"],
                _components_prova_prova_component__WEBPACK_IMPORTED_MODULE_9__["MensagemComponent"],
                _components_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_12__["RankingComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["DialogOverviewExampleDialog"]
            ],
            entryComponents: [
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["DialogOverviewExampleDialog"],
                _components_prova_prova_component__WEBPACK_IMPORTED_MODULE_9__["MensagemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]
            ],
            exports: [
                _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cadastro/cadastro-prova.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/cadastro/cadastro-prova.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h2>Manutenção de provas</h2>\n    <form class=\"\">\n        <div class=\"row\">\n            <mat-form-field [floatLabel]=\"auto\" style=\"width: 20%;\">\n                <mat-label>Código</mat-label>\n                <input matInput [(ngModel)]=\"prova.id\" name=\"codigoProva\" placeholder=\"Código da prova\">\n            </mat-form-field>\n        </div>\n        <div class=\"row\">\n            <mat-form-field class=\"s6\" [floatLabel]=\"auto\" style=\"width: 50%;\">\n                <mat-label>Nome</mat-label>\n                <input matInput [(ngModel)]=\"prova.nomeDaProva\" name=\"nomeProva\" placeholder=\"Nome da prova\">\n            </mat-form-field>\n        </div>\n        <div class=\"row\">\n            <button mat-stroked-button (click)=\"finalizarProva();\" color=\"primary\">Finalizar prova</button>\n        </div>\n        <mat-divider style=\"margin-top:1em; margin-bottom:1em;\"></mat-divider>\n        <div class=\"row\">\n            <mat-accordion>\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Adicionar perguntas\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            adicione questões e resposta à prova\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>                \n                    <div class=\"row\">\n                        <h5>Questão</h5>\n                        <mat-form-field style=\"width: 100%;\">\n                            <textarea matInput [(ngModel)]=\"questao\" name=\"questao\" placeholder=\"Digite a questão\"></textarea>\n                        </mat-form-field>\n                    </div>\n                    <div>\n                        <h5>Respostas</h5>\n                        <div class=\"row\">\n                            <mat-form-field style=\"width: 40%;\">\n                                <textarea matInput [(ngModel)]=\"resposta1\" name=\"resposta1\" placeholder=\"Resposta A\"></textarea>\n                            </mat-form-field>\n                            <mat-form-field style=\"width: 40%; margin-left:20%;\">\n                                <textarea matInput [(ngModel)]=\"resposta2\" name=\"resposta2\" placeholder=\"Resposta B\"></textarea>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"row\">\n                            <mat-form-field style=\"width: 40%;\">\n                                <textarea matInput [(ngModel)]=\"resposta3\" name=\"resposta3\" placeholder=\"Resposta C\"></textarea>\n                            </mat-form-field>\n                            <mat-form-field style=\"width: 40%; margin-left:20%;\">\n                                <textarea matInput [(ngModel)]=\"resposta4\" name=\"resposta4\" placeholder=\"Resposta D\"></textarea>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"row\">\n                            <mat-form-field>\n                                <mat-select [(ngModel)]=\"respostaCorreta\" name=\"respostaCorreta\" placeholder=\"Opção correta\">\n                                    <mat-option value=\"1\">1</mat-option>\n                                    <mat-option value=\"2\">2</mat-option>\n                                    <mat-option value=\"3\">3</mat-option>\n                                    <mat-option value=\"4\">4</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <button mat-stroked-button (click)=\"adicionarQuestao();\" color=\"primary\">Adicionar questão</button>\n                    </div>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n    </form>\n    <div class=\"row\" style=\"margin-bottom: 2em;\">\n        <h5>Lista de questões</h5>\n        <mat-accordion *ngFor=\"let questao of prova.questoes\">\n        <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        Questão {{questao.id}}\n                    </mat-panel-title>\n                    <!-- <mat-panel-description>\n                        adicione questões e resposta à prova\n                    </mat-panel-description> -->\n                </mat-expansion-panel-header>\n                <div class=\"row\" *ngFor=\"let resposta of questao.respostas\">\n                    <h4>Resposta {{resposta.id}}</h4>\n                    <p>{{resposta.descricao}}</p>\n                </div>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/cadastro/cadastro-provas.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/cadastro/cadastro-provas.component.ts ***!
  \******************************************************************/
/*! exports provided: CadastroProvaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroProvaComponent", function() { return CadastroProvaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/prova.service */ "./src/app/services/prova.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroProvaComponent = /** @class */ (function () {
    function CadastroProvaComponent(activatedRoute, fb, provaService, route) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.provaService = provaService;
        this.route = route;
        this.prova = { id: Date.now(), nomeDaProva: '', questoes: Array() };
        this.question = { id: 0, descricao: '', respostas: [] };
        this.respostas = [];
        this.activatedRoute.params.subscribe(function (param) {
            _this.param = param['id'];
        });
    }
    CadastroProvaComponent.prototype.ngOnInit = function () {
    };
    CadastroProvaComponent.prototype.adicionarQuestao = function () {
        if (this.validarRespostas() &&
            (this.questao != null && this.questao != undefined && this.questao != '')) {
            this.respostas.push({ "id": (this.respostas.length + 1), "correta": (this.respostaCorreta == 1 ? true : false), "descricao": this.resposta1 }, { "id": (this.respostas.length + 2), "correta": (this.respostaCorreta == 2 ? true : false), "descricao": this.resposta2 }, { "id": (this.respostas.length + 3), "correta": (this.respostaCorreta == 3 ? true : false), "descricao": this.resposta3 }, { "id": (this.respostas.length + 4), "correta": (this.respostaCorreta == 4 ? true : false), "descricao": this.resposta4 });
            this.question.respostas = this.respostas;
            this.question.id = this.prova.questoes.length + 1;
            this.question.descricao = this.questao;
            this.prova.questoes.push(this.question);
            this.limparProva();
        }
        else {
            alert('Respostas inválidas.');
        }
    };
    CadastroProvaComponent.prototype.finalizarProva = function () {
        if (this.validarProva()) {
            // this.provaService.saveProva(this.prova).subscribe
            this.salvarProva();
        }
        else {
            alert('Prova inválida, verifique os dados.');
        }
    };
    CadastroProvaComponent.prototype.validarRespostas = function () {
        if ((this.resposta1 != '' && this.resposta1 != undefined) &&
            (this.resposta2 != '' && this.resposta2 != undefined) &&
            (this.resposta3 != '' && this.resposta3 != undefined) &&
            (this.resposta4 != '' && this.resposta4 != undefined)) {
            return true;
        }
        return false;
    };
    CadastroProvaComponent.prototype.validarProva = function () {
        if ((this.prova.id != null && this.prova.id > 0) &&
            (this.prova.nomeDaProva != null && this.prova.nomeDaProva != '') &&
            (this.prova.questoes.length > 0)) {
            return true;
        }
        return false;
    };
    CadastroProvaComponent.prototype.salvarProva = function () {
        var _this = this;
        this.provaService
            .saveProva(this.prova)
            .subscribe(function (response) {
            if (response != null) {
                _this.limparProva();
                _this.route.navigateByUrl('/home');
            }
            else {
                alert('Problemas ao salvar prova.');
            }
        }, function (error) {
            console.error(error);
            console.log('Problemas ao salvar prova.');
            alert('Problemas ao salvar prova.');
        });
        return false;
    };
    CadastroProvaComponent.prototype.limparProva = function () {
        this.questao = '';
        this.question = { id: Date.now(), descricao: '', respostas: [] };
        this.resposta = { id: 0, descricao: '', correta: false };
        this.respostas = [];
        this.respostaCorreta = 0;
        this.resposta1 = '';
        this.resposta2 = '';
        this.resposta3 = '';
        this.resposta4 = '';
    };
    CadastroProvaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cadastro-prova-component',
            template: __webpack_require__(/*! ./cadastro-prova.component.html */ "./src/app/components/cadastro/cadastro-prova.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_3__["ProvaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CadastroProvaComponent);
    return CadastroProvaComponent;
}());



/***/ }),

/***/ "./src/app/components/home/dialog-component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/home/dialog-component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Olá,</h1>\n<div mat-dialog-content>\n  <p>Qual o seu nome ?</p>\n  <mat-form-field>\n    <!-- <input matInput> -->\n    <input matInput [(ngModel)]=\"aluno.nick\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancelar</button>\n  <button mat-button [mat-dialog-close]=\"aluno.nick\" cdkFocusInitial>Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Provas</h1>\n<div class=\"row\">\n    <mat-list>\n        <mat-list-item *ngFor=\"let prova of provas\">\n            <mat-icon mat-list-icon>task</mat-icon>\n            <h4 mat-line>{{prova.nomeDaProva}}</h4>\n            <p mat-line> Questões: {{prova.questoes.length}} </p>\n            <button mat-fab color=\"primary\" (click)=\"openDialog(prova.id);\"><i class=\"material-icons\">play_arrow</i></button>\n            <mat-divider></mat-divider>\n        </mat-list-item>\n    </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/prova.service */ "./src/app/services/prova.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import { MatDialogRef } from '@angular/material';



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, provaService, router) {
        this.dialog = dialog;
        this.provaService = provaService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.provaService
            .getProvas()
            .subscribe(function (response) {
            if (response.length) {
                _this.provas = response;
            }
        }, function (error) {
            console.log(error);
            alert('problemas ao buscar provas.');
        });
    };
    HomeComponent.prototype.openDialog = function (idProva) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { nick: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            sessionStorage.setItem('nickName', result);
            sessionStorage.setItem('prova', JSON.stringify(_this.provas.filter(function (prova) {
                return prova.id.toString() == idProva;
            })[0]));
            _this.router.navigate(['/prova', idProva]);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-component',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_2__["ProvaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, aluno) {
        this.dialogRef = dialogRef;
        this.aluno = aluno;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-component.html */ "./src/app/components/home/dialog-component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/components/listagem-prova/listagem-prova.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/listagem-prova/listagem-prova.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#itemProva :hover {\n    background-color: dimgrey;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0YWdlbS1wcm92YS9saXN0YWdlbS1wcm92YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGFnZW0tcHJvdmEvbGlzdGFnZW0tcHJvdmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpdGVtUHJvdmEgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/listagem-prova/listagem-prova.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/listagem-prova/listagem-prova.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h2>Listagem de Provas</h2>\n    <button mat-icon-button color=\"primary\" layout-align=\"rigth\" (click)=\"novaProva();\">\n        <mat-icon aria-label=\"Trash\">add</mat-icon>\n    </button>\n    <mat-list id=\"itemProva\">\n        <mat-list-item *ngFor=\"let prova of provas\" (click)=\"alterarProva(prova.id);\">\n            <h4 mat-line>{{prova.nomeDaProva}}</h4>\n            <p mat-line> Questões: {{prova.questoes.length}} </p>\n            <mat-divider></mat-divider>\n        </mat-list-item>\n    </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/components/listagem-prova/listagem-prova.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/listagem-prova/listagem-prova.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListagemProvaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemProvaComponent", function() { return ListagemProvaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/prova.service */ "./src/app/services/prova.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListagemProvaComponent = /** @class */ (function () {
    function ListagemProvaComponent(provaService, router) {
        this.provaService = provaService;
        this.router = router;
    }
    ListagemProvaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.provaService
            .getProvas()
            .subscribe(function (response) {
            if (response.length) {
                _this.provas = response;
            }
        }, function (error) {
            console.log(error);
            alert('problemas ao buscar provas.');
        });
    };
    ListagemProvaComponent.prototype.alterarProva = function (id) {
        if (id) {
            // window.location.href = `/prova/${id}`
            this.router.navigate(['/manutencaoprova', id]);
        }
        else {
            alert('Código de prova inválido.');
        }
    };
    ListagemProvaComponent.prototype.novaProva = function () {
        this.router.navigateByUrl('/manutencaoprova');
    };
    ListagemProvaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'listagem-prova',
            template: __webpack_require__(/*! ./listagem-prova.component.html */ "./src/app/components/listagem-prova/listagem-prova.component.html"),
            providers: [src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_1__["ProvaService"]],
            styles: [__webpack_require__(/*! ./listagem-prova.component.css */ "./src/app/components/listagem-prova/listagem-prova.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_1__["ProvaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListagemProvaComponent);
    return ListagemProvaComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 400px;\n}\n\n.example-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.example-container > * {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuICBcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin-top:5em;\" layout=\"row\" layout-align=\"center center\">\n    <mat-card class=\"example-card center\" style=\"width: 100%; margin-left:30%;\">\n        <mat-card-header>\n            <mat-card-title style=\"text-align:center\">Login</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"example-container\">\n                <mat-form-field>\n                    <input matInput placeholder=\"CPF\" [(ngModel)]=\"cpf\">\n                    <!-- <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error> -->\n                </mat-form-field>\n            </div>\n            <div class=\"example-container\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Senha\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"passwordUser\">\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                </mat-form-field>\n            </div>\n            <div class=\"example-container\">\n                <button mat-stroked-button color=\"primary\" (click)=\"doLogin();\">Logar <mat-icon aria-label=\"Logar\" style=\"margin-left: 2%;\">send</mat-icon></button>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    // constructor() {}
    function LoginComponent(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.hide = true;
        // email = new FormControl('', [Validators.required, Validators.email]);
        this.cpf = '';
        this.passwordUser = '';
    }
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        if ((this.cpf.length > 0) && this.passwordUser.length > 3) {
            this.usuarioService
                .realizarLogin(this.cpf, this.passwordUser)
                .subscribe(function (response) {
                sessionStorage.setItem('logged', 'true');
                _this.router.navigateByUrl('/home');
            }, function (error) {
                console.log(error);
                alert('Problemas ao realizar login');
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-component',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]]
        }),
        __metadata("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/prova/mensagem.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/prova/mensagem.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.titulo}}</h1>\n<div mat-dialog-content>\n  <p>{{data.mensagem}}</p>\n  <!-- <mat-form-field>\n    <input matInput [(ngModel)]=\"response\">\n  </mat-form-field> -->\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"finalizar();\" cdkFocusInitial>Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/components/prova/prova.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/prova/prova.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Prova</h1>\n<mat-divider style=\"margin-top:1em; margin-bottom:1em;\"></mat-divider>\n<div class=\"row\">\n    <div>\n        <h4>Questão</h4>\n        <p>{{questao.descricao}}</p>\n    </div>\n    <mat-divider style=\"padding-left:1em; padding-right:1em;\"></mat-divider>\n    <div>\n        <h4>Respostas</h4>\n        <mat-selection-list #tabela>\n            <mat-list-option *ngFor=\"let resp of questao.respostas\" value=\"{{resp.id}}\">\n                {{resp.descricao}}\n            </mat-list-option>\n        </mat-selection-list>\n    </div>\n    <mat-divider style=\"margin-top:1em; margin-bottom:1em;\"></mat-divider>\n    <div>\n        <button mat-stroked-button (click)=\"proximaQuestao();\" color=\"primary\">{{buttonName}}</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/prova/prova.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/prova/prova.component.ts ***!
  \*****************************************************/
/*! exports provided: ProvaComponent, MensagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvaComponent", function() { return ProvaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemComponent", function() { return MensagemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/prova.service */ "./src/app/services/prova.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProvaComponent = /** @class */ (function () {
    function ProvaComponent(dialog, provaService, router) {
        this.dialog = dialog;
        this.provaService = provaService;
        this.router = router;
        // public tabela: MatSelectionList;
        this.nickName = '';
        this.buttonName = 'Próxima questão';
        this.questaoAtual = 0;
        this.respostaSelecionada = 0;
        this.qtAcerto = 0;
        this.qtErros = 0;
    }
    ProvaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recuperarProva();
        this.popularQuestao();
        this.tabela.selectionChange.subscribe(function (s) {
            s.source.deselectAll();
            s.option.selected = true;
            _this.respostaSelecionada = s.option.value;
        });
        this.provaResposta = this.prova;
    };
    ProvaComponent.prototype.recuperarProva = function () {
        this.prova = JSON.parse(sessionStorage.getItem('prova'));
        this.nickName = sessionStorage.getItem('nickName');
    };
    ProvaComponent.prototype.recuperarQuestao = function () {
        return this.prova.questoes[this.questaoAtual];
    };
    ProvaComponent.prototype.popularQuestao = function () {
        this.questao = this.recuperarQuestao();
    };
    ProvaComponent.prototype.proximaQuestao = function () {
        // pular para a próxima questão e verificar se o usuário acertou ou não
        this.responderQuestao();
        this.limparQuestoes();
        this.questaoAtual++;
        if (this.questaoAtual <= this.prova.questoes.length - 1) {
            // mostrar se acertou ou não e ir para a próxima questão
            this.popularQuestao();
            if (this.questaoAtual == this.prova.questoes.length - 1)
                this.buttonName = 'Finalizar prova';
        }
        else {
            // não existem mais perguntas
            // exibir a totalização de acertos e depois exibir o ranking.
            this.finalizarProva();
        }
    };
    ProvaComponent.prototype.responderQuestao = function () {
        var _this = this;
        var arr = this.provaResposta
            .questoes[this.questaoAtual]
            .respostas.filter(function (resp) {
            return resp.id == _this.respostaSelecionada;
        });
        this.provaResposta.questoes[this.questaoAtual].respostas = arr;
    };
    ProvaComponent.prototype.corrigirQuestao = function (resposta, callback) {
        var resp = false;
        this.prova
            .questoes[this.questaoAtual]
            .respostas
            .forEach(function (el, index) {
            if (resposta == el.id && el.correta) {
                resp = true;
            }
        });
        (resp) ? this.qtAcerto++ : this.qtErros++;
        this.openDialog('Correção', this.montarMensagem(resp), resp, callback());
    };
    ProvaComponent.prototype.montarMensagem = function (acerto) {
        if (acerto) {
            return 'Parabéns, você acertou a questão.';
        }
        else {
            return 'Que pena, você errou a questão.';
        }
    };
    ProvaComponent.prototype.openDialog = function (titulo, mensagem, response, after) {
        var dialogRef = this.dialog.open(MensagemComponent, {
            width: '250px',
            data: {
                titulo: titulo,
                mensagem: mensagem,
                response: response
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ProvaComponent.prototype.totalizarRespostas = function () {
        this.openDialog('Totalização', this.montarMensagemTotaliacao(), false, function () { return; });
    };
    ProvaComponent.prototype.montarMensagemTotaliacao = function () {
        return "Voc\u00EA finalizou a prova, acertou " + this.qtAcerto + " quest\u00F5es e errou " + this.qtErros + ".";
    };
    ProvaComponent.prototype.limparQuestoes = function () {
        this.tabela.deselectAll();
        this.respostaSelecionada = 0;
    };
    ProvaComponent.prototype.finalizarProva = function () {
        var _this = this;
        this.provaResposta.nick = this.nickName;
        this.provaResposta._id = {};
        this
            .provaService
            .saveUserTest(this.provaResposta).subscribe(function (result) {
            // redirecionar para ranking
            _this.router.navigateByUrl('/ranking');
        }, function (error) {
            _this.openDialog('Erros', 'Problemas ao finalizar a avaliação.', false, function () { });
            console.log(error.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectionList"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectionList"])
    ], ProvaComponent.prototype, "tabela", void 0);
    ProvaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prova-component',
            template: __webpack_require__(/*! ./prova.component.html */ "./src/app/components/prova/prova.component.html")
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            src_app_services_prova_service__WEBPACK_IMPORTED_MODULE_2__["ProvaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProvaComponent);
    return ProvaComponent;
}());

var MensagemComponent = /** @class */ (function () {
    function MensagemComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MensagemComponent.prototype.finalizar = function () {
        this.dialogRef.close();
    };
    MensagemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mensagem-component',
            template: __webpack_require__(/*! ./mensagem.component.html */ "./src/app/components/prova/mensagem.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], MensagemComponent);
    return MensagemComponent;
}());



/***/ }),

/***/ "./src/app/components/ranking/ranking.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/ranking/ranking.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Ranking</h1>\n<mat-divider style=\"margin-top:1em; margin-bottom:1em;\"></mat-divider>\n<div class=\"row\">\n    <div *ngFor=\"let comp of competidores\">\n        <p>{{comp.aluno}} - {{comp.acertos}} acertos</p>\n    </div>\n    <mat-divider style=\"margin-top:1em; margin-bottom:1em;\"></mat-divider>\n    <div>\n        <button mat-stroked-button (click)=\"goHome();\" color=\"primary\">Página inicial</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ranking/ranking.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/ranking/ranking.component.ts ***!
  \*********************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ranking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ranking.service */ "./src/app/services/ranking.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RankingComponent = /** @class */ (function () {
    function RankingComponent(rankingService, router) {
        this.rankingService = rankingService;
        this.router = router;
    }
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rankingService
            .getRanking()
            .subscribe(function (result) {
            _this.competidores = result;
            console.log(_this.competidores);
        }, function (error) {
            console.log(error.message);
            alert('Problemas ao buscar Ranking.');
        });
    };
    RankingComponent.prototype.goHome = function () {
        this.router.navigateByUrl('/home');
    };
    RankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ranking-component',
            template: __webpack_require__(/*! ./ranking.component.html */ "./src/app/components/ranking/ranking.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_services_ranking_service__WEBPACK_IMPORTED_MODULE_1__["RankingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/prova.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/prova.service.ts ***!
  \*******************************************/
/*! exports provided: ProvaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvaService", function() { return ProvaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProvaService = /** @class */ (function () {
    function ProvaService(_http) {
        this._http = _http;
        this._url = "https://cloud-gasapi.herokuapp.com/listarProvasCadastradas";
        this.header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.header.append('Content-Type', 'application/json');
        this.header.append('Accept', 'application/json');
        this.header.append('Access-Control-Allow-Origin', '*');
    }
    ProvaService.prototype.getProvas = function () {
        return this._http
            .get(this._url, { headers: this.header })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    ProvaService.prototype.saveProva = function (prova) {
        return this
            ._http
            .post('https://cloud-gasapi.herokuapp.com/cadastrarProva', prova, { headers: this.header });
    };
    ProvaService.prototype.saveUserTest = function (prova) {
        console.log(JSON.stringify(prova));
        return this
            ._http
            .post('https://cloud-gasapi.herokuapp.com/responderProva', prova, { headers: this.header });
    };
    ProvaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProvaService);
    return ProvaService;
}());



/***/ }),

/***/ "./src/app/services/ranking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ranking.service.ts ***!
  \*********************************************/
/*! exports provided: RankingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingService", function() { return RankingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RankingService = /** @class */ (function () {
    function RankingService(_http) {
        this._http = _http;
        this._url = "https://cloud-gasapi.herokuapp.com/listarPorScore";
        this.header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.header.append('Content-Type', 'application/json');
        this.header.append('Accept', 'application/json');
        this.header.append('Access-Control-Allow-Origin', '*');
    }
    RankingService.prototype.getRanking = function () {
        return this._http
            .get(this._url, { headers: this.header })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    RankingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RankingService);
    return RankingService;
}());



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = /** @class */ (function () {
    // private _url : string = "http://localhost:3000/login";
    function UsuarioService(_http) {
        this._http = _http;
    }
    UsuarioService.prototype.realizarLogin = function (cpf, password) {
        return this._http
            .get("https://cloud-gasapi.herokuapp.com/validarUsuario?cpf=" + cpf + "&senha=" + password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UsuarioService);
    return UsuarioService;
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

module.exports = __webpack_require__(/*! /home/iago/Documents/fiap/Cloud_Development/ava/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map