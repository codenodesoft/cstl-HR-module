(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[166],{

/***/ "./src/main/webapp/app/entities/financial-account-year/financial-account-year.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/financial-account-year/financial-account-year.module.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/financial-account-year/index.ts\");\r\nvar ENTITY_STATES = _1.financialAccountYearRoute.concat(_1.financialAccountYearPopupRoute);\r\nvar SoptorshiFinancialAccountYearModule = /** @class */ (function () {\r\n    function SoptorshiFinancialAccountYearModule() {\r\n    }\r\n    SoptorshiFinancialAccountYearModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            /*    declarations: [\r\n                FinancialAccountYearComponent,\r\n                FinancialAccountYearDetailComponent,\r\n                FinancialAccountYearUpdateComponent,\r\n                FinancialAccountYearDeleteDialogComponent,\r\n                FinancialAccountYearDeletePopupComponent\r\n            ],\r\n            entryComponents: [\r\n                FinancialAccountYearComponent,\r\n                FinancialAccountYearUpdateComponent,\r\n                FinancialAccountYearDeleteDialogComponent,\r\n                FinancialAccountYearDeletePopupComponent\r\n            ],*/\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiFinancialAccountYearModule);\r\n    return SoptorshiFinancialAccountYearModule;\r\n}());\r\nexports.SoptorshiFinancialAccountYearModule = SoptorshiFinancialAccountYearModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2ZpbmFuY2lhbC1hY2NvdW50LXllYXIvZmluYW5jaWFsLWFjY291bnQteWVhci5tb2R1bGUudHM/NWIzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBaUU7QUFDakUsNEdBQStDO0FBRS9DLDhGQUFtRDtBQUNuRCx5R0FRWTtBQUVaLElBQU0sYUFBYSxHQUFPLDRCQUF5QixRQUFLLGlDQUE4QixDQUFDLENBQUM7QUFtQnhGO0lBQUE7SUFBa0QsQ0FBQztJQUF0QyxtQ0FBbUM7UUFqQi9DLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDhCQUFxQixFQUFFLHFCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RFOzs7Ozs7Ozs7Ozs7Z0JBWUk7WUFDSixPQUFPLEVBQUUsQ0FBQyw2QkFBc0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csbUNBQW1DLENBQUc7SUFBRCwwQ0FBQztDQUFBO0FBQXRDLGtGQUFtQyIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZmluYW5jaWFsLWFjY291bnQteWVhci9maW5hbmNpYWwtYWNjb3VudC15ZWFyLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBTb3B0b3JzaGlTaGFyZWRNb2R1bGUgfSBmcm9tICdhcHAvc2hhcmVkJztcclxuaW1wb3J0IHtcclxuICAgIEZpbmFuY2lhbEFjY291bnRZZWFyQ29tcG9uZW50LFxyXG4gICAgRmluYW5jaWFsQWNjb3VudFllYXJEZXRhaWxDb21wb25lbnQsXHJcbiAgICBGaW5hbmNpYWxBY2NvdW50WWVhclVwZGF0ZUNvbXBvbmVudCxcclxuICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRGVsZXRlUG9wdXBDb21wb25lbnQsXHJcbiAgICBGaW5hbmNpYWxBY2NvdW50WWVhckRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgIGZpbmFuY2lhbEFjY291bnRZZWFyUm91dGUsXHJcbiAgICBmaW5hbmNpYWxBY2NvdW50WWVhclBvcHVwUm91dGVcclxufSBmcm9tICcuLyc7XHJcblxyXG5jb25zdCBFTlRJVFlfU1RBVEVTID0gWy4uLmZpbmFuY2lhbEFjY291bnRZZWFyUm91dGUsIC4uLmZpbmFuY2lhbEFjY291bnRZZWFyUG9wdXBSb3V0ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1NvcHRvcnNoaVNoYXJlZE1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKEVOVElUWV9TVEFURVMpXSxcclxuICAgIC8qICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyVXBkYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgICAgIEZpbmFuY2lhbEFjY291bnRZZWFyRGVsZXRlUG9wdXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBGaW5hbmNpYWxBY2NvdW50WWVhckNvbXBvbmVudCxcclxuICAgICAgICBGaW5hbmNpYWxBY2NvdW50WWVhclVwZGF0ZUNvbXBvbmVudCxcclxuICAgICAgICBGaW5hbmNpYWxBY2NvdW50WWVhckRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgICAgICBGaW5hbmNpYWxBY2NvdW50WWVhckRlbGV0ZVBvcHVwQ29tcG9uZW50XHJcbiAgICBdLCovXHJcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcHRvcnNoaUZpbmFuY2lhbEFjY291bnRZZWFyTW9kdWxlIHt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/financial-account-year/financial-account-year.module.ts\n");

/***/ })

}]);