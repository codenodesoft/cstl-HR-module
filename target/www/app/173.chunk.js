(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[173],{

/***/ "./src/main/webapp/app/entities/office/office.module.ts":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/entities/office/office.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/office/index.ts\");\r\nvar ENTITY_STATES = _1.officeRoute.concat(_1.officePopupRoute);\r\nvar SoptorshiOfficeModule = /** @class */ (function () {\r\n    function SoptorshiOfficeModule() {\r\n    }\r\n    SoptorshiOfficeModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [_1.OfficeComponent, _1.OfficeDetailComponent, _1.OfficeUpdateComponent, _1.OfficeDeleteDialogComponent, _1.OfficeDeletePopupComponent],\r\n            entryComponents: [_1.OfficeComponent, _1.OfficeUpdateComponent, _1.OfficeDeleteDialogComponent, _1.OfficeDeletePopupComponent],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiOfficeModule);\r\n    return SoptorshiOfficeModule;\r\n}());\r\nexports.SoptorshiOfficeModule = SoptorshiOfficeModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL29mZmljZS9vZmZpY2UubW9kdWxlLnRzPzdmOTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0dBQWlFO0FBQ2pFLDRHQUErQztBQUUvQyw4RkFBbUQ7QUFDbkQseUZBUVk7QUFFWixJQUFNLGFBQWEsR0FBTyxjQUFXLFFBQUssbUJBQWdCLENBQUMsQ0FBQztBQVE1RDtJQUFBO0lBQW9DLENBQUM7SUFBeEIscUJBQXFCO1FBTmpDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDhCQUFxQixFQUFFLHFCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RFLFlBQVksRUFBRSxDQUFDLGtCQUFlLEVBQUUsd0JBQXFCLEVBQUUsd0JBQXFCLEVBQUUsOEJBQTJCLEVBQUUsNkJBQTBCLENBQUM7WUFDdEksZUFBZSxFQUFFLENBQUMsa0JBQWUsRUFBRSx3QkFBcUIsRUFBRSw4QkFBMkIsRUFBRSw2QkFBMEIsQ0FBQztZQUNsSCxPQUFPLEVBQUUsQ0FBQyw2QkFBc0IsQ0FBQztTQUNwQyxDQUFDO09BQ1cscUJBQXFCLENBQUc7SUFBRCw0QkFBQztDQUFBO0FBQXhCLHNEQUFxQiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvb2ZmaWNlL29mZmljZS5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU29wdG9yc2hpU2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgICBPZmZpY2VDb21wb25lbnQsXHJcbiAgICBPZmZpY2VEZXRhaWxDb21wb25lbnQsXHJcbiAgICBPZmZpY2VVcGRhdGVDb21wb25lbnQsXHJcbiAgICBPZmZpY2VEZWxldGVQb3B1cENvbXBvbmVudCxcclxuICAgIE9mZmljZURlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgIG9mZmljZVJvdXRlLFxyXG4gICAgb2ZmaWNlUG9wdXBSb3V0ZVxyXG59IGZyb20gJy4vJztcclxuXHJcbmNvbnN0IEVOVElUWV9TVEFURVMgPSBbLi4ub2ZmaWNlUm91dGUsIC4uLm9mZmljZVBvcHVwUm91dGVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtTb3B0b3JzaGlTaGFyZWRNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChFTlRJVFlfU1RBVEVTKV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtPZmZpY2VDb21wb25lbnQsIE9mZmljZURldGFpbENvbXBvbmVudCwgT2ZmaWNlVXBkYXRlQ29tcG9uZW50LCBPZmZpY2VEZWxldGVEaWFsb2dDb21wb25lbnQsIE9mZmljZURlbGV0ZVBvcHVwQ29tcG9uZW50XSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW09mZmljZUNvbXBvbmVudCwgT2ZmaWNlVXBkYXRlQ29tcG9uZW50LCBPZmZpY2VEZWxldGVEaWFsb2dDb21wb25lbnQsIE9mZmljZURlbGV0ZVBvcHVwQ29tcG9uZW50XSxcclxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29wdG9yc2hpT2ZmaWNlTW9kdWxlIHt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/office/office.module.ts\n");

/***/ })

}]);