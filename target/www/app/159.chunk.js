(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ "./src/main/webapp/app/entities/commercial-product-info-extended/commercial-product-info-extended.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/commercial-product-info-extended/commercial-product-info-extended.module.ts ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/commercial-product-info-extended/index.ts\");\r\nvar ENTITY_STATES = _1.commercialProductInfoExtendedRoute.concat(_1.commercialProductInfoPopupExtendedRoute);\r\nvar SoptorshiCommercialProductInfoExtendedModule = /** @class */ (function () {\r\n    function SoptorshiCommercialProductInfoExtendedModule() {\r\n    }\r\n    SoptorshiCommercialProductInfoExtendedModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [\r\n                _1.CommercialProductInfoExtendedComponent,\r\n                _1.CommercialProductInfoDetailExtendedComponent,\r\n                _1.CommercialProductInfoUpdateExtendedComponent,\r\n                _1.CommercialProductInfoDeleteDialogExtendedComponent,\r\n                _1.CommercialProductInfoDeletePopupExtendedComponent\r\n            ],\r\n            entryComponents: [\r\n                _1.CommercialProductInfoExtendedComponent,\r\n                _1.CommercialProductInfoUpdateExtendedComponent,\r\n                _1.CommercialProductInfoDeleteDialogExtendedComponent,\r\n                _1.CommercialProductInfoDeletePopupExtendedComponent\r\n            ],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiCommercialProductInfoExtendedModule);\r\n    return SoptorshiCommercialProductInfoExtendedModule;\r\n}());\r\nexports.SoptorshiCommercialProductInfoExtendedModule = SoptorshiCommercialProductInfoExtendedModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvbW1lcmNpYWwtcHJvZHVjdC1pbmZvLWV4dGVuZGVkL2NvbW1lcmNpYWwtcHJvZHVjdC1pbmZvLWV4dGVuZGVkLm1vZHVsZS50cz9jNTBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9HQUFpRTtBQUNqRSw0R0FBK0M7QUFFL0MsOEZBQW1EO0FBQ25ELG1IQVFZO0FBRVosSUFBTSxhQUFhLEdBQU8scUNBQWtDLFFBQUssMENBQXVDLENBQUMsQ0FBQztBQW1CMUc7SUFBQTtJQUEyRCxDQUFDO0lBQS9DLDRDQUE0QztRQWpCeEQsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsOEJBQXFCLEVBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEUsWUFBWSxFQUFFO2dCQUNWLHlDQUFzQztnQkFDdEMsK0NBQTRDO2dCQUM1QywrQ0FBNEM7Z0JBQzVDLHFEQUFrRDtnQkFDbEQsb0RBQWlEO2FBQ3BEO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLHlDQUFzQztnQkFDdEMsK0NBQTRDO2dCQUM1QyxxREFBa0Q7Z0JBQ2xELG9EQUFpRDthQUNwRDtZQUNELE9BQU8sRUFBRSxDQUFDLDZCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyw0Q0FBNEMsQ0FBRztJQUFELG1EQUFDO0NBQUE7QUFBL0Msb0dBQTRDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9jb21tZXJjaWFsLXByb2R1Y3QtaW5mby1leHRlbmRlZC9jb21tZXJjaWFsLXByb2R1Y3QtaW5mby1leHRlbmRlZC5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU29wdG9yc2hpU2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgICBDb21tZXJjaWFsUHJvZHVjdEluZm9EZWxldGVEaWFsb2dFeHRlbmRlZENvbXBvbmVudCxcclxuICAgIENvbW1lcmNpYWxQcm9kdWN0SW5mb0RlbGV0ZVBvcHVwRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICBDb21tZXJjaWFsUHJvZHVjdEluZm9EZXRhaWxFeHRlbmRlZENvbXBvbmVudCxcclxuICAgIENvbW1lcmNpYWxQcm9kdWN0SW5mb0V4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgY29tbWVyY2lhbFByb2R1Y3RJbmZvRXh0ZW5kZWRSb3V0ZSxcclxuICAgIGNvbW1lcmNpYWxQcm9kdWN0SW5mb1BvcHVwRXh0ZW5kZWRSb3V0ZSxcclxuICAgIENvbW1lcmNpYWxQcm9kdWN0SW5mb1VwZGF0ZUV4dGVuZGVkQ29tcG9uZW50XHJcbn0gZnJvbSAnLi8nO1xyXG5cclxuY29uc3QgRU5USVRZX1NUQVRFUyA9IFsuLi5jb21tZXJjaWFsUHJvZHVjdEluZm9FeHRlbmRlZFJvdXRlLCAuLi5jb21tZXJjaWFsUHJvZHVjdEluZm9Qb3B1cEV4dGVuZGVkUm91dGVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtTb3B0b3JzaGlTaGFyZWRNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChFTlRJVFlfU1RBVEVTKV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb21tZXJjaWFsUHJvZHVjdEluZm9FeHRlbmRlZENvbXBvbmVudCxcclxuICAgICAgICBDb21tZXJjaWFsUHJvZHVjdEluZm9EZXRhaWxFeHRlbmRlZENvbXBvbmVudCxcclxuICAgICAgICBDb21tZXJjaWFsUHJvZHVjdEluZm9VcGRhdGVFeHRlbmRlZENvbXBvbmVudCxcclxuICAgICAgICBDb21tZXJjaWFsUHJvZHVjdEluZm9EZWxldGVEaWFsb2dFeHRlbmRlZENvbXBvbmVudCxcclxuICAgICAgICBDb21tZXJjaWFsUHJvZHVjdEluZm9EZWxldGVQb3B1cEV4dGVuZGVkQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgQ29tbWVyY2lhbFByb2R1Y3RJbmZvRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWVyY2lhbFByb2R1Y3RJbmZvVXBkYXRlRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWVyY2lhbFByb2R1Y3RJbmZvRGVsZXRlRGlhbG9nRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWVyY2lhbFByb2R1Y3RJbmZvRGVsZXRlUG9wdXBFeHRlbmRlZENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29wdG9yc2hpQ29tbWVyY2lhbFByb2R1Y3RJbmZvRXh0ZW5kZWRNb2R1bGUge31cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/commercial-product-info-extended/commercial-product-info-extended.module.ts\n");

/***/ })

}]);