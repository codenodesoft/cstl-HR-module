(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[178],{

/***/ "./src/main/webapp/app/entities/production/production.module.ts":
/*!**********************************************************************!*\
  !*** ./src/main/webapp/app/entities/production/production.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/production/index.ts\");\r\nvar ENTITY_STATES = _1.productionRoute.concat(_1.productionPopupRoute);\r\nvar SoptorshiProductionModule = /** @class */ (function () {\r\n    function SoptorshiProductionModule() {\r\n    }\r\n    SoptorshiProductionModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [\r\n                _1.ProductionComponent,\r\n                _1.ProductionDetailComponent,\r\n                _1.ProductionUpdateComponent,\r\n                _1.ProductionDeleteDialogComponent,\r\n                _1.ProductionDeletePopupComponent\r\n            ],\r\n            entryComponents: [_1.ProductionComponent, _1.ProductionUpdateComponent, _1.ProductionDeleteDialogComponent, _1.ProductionDeletePopupComponent],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiProductionModule);\r\n    return SoptorshiProductionModule;\r\n}());\r\nexports.SoptorshiProductionModule = SoptorshiProductionModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbi5tb2R1bGUudHM/NDgwYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBaUU7QUFDakUsNEdBQStDO0FBRS9DLDhGQUFtRDtBQUNuRCw2RkFRWTtBQUVaLElBQU0sYUFBYSxHQUFPLGtCQUFlLFFBQUssdUJBQW9CLENBQUMsQ0FBQztBQWNwRTtJQUFBO0lBQXdDLENBQUM7SUFBNUIseUJBQXlCO1FBWnJDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDhCQUFxQixFQUFFLHFCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RFLFlBQVksRUFBRTtnQkFDVixzQkFBbUI7Z0JBQ25CLDRCQUF5QjtnQkFDekIsNEJBQXlCO2dCQUN6QixrQ0FBK0I7Z0JBQy9CLGlDQUE4QjthQUNqQztZQUNELGVBQWUsRUFBRSxDQUFDLHNCQUFtQixFQUFFLDRCQUF5QixFQUFFLGtDQUErQixFQUFFLGlDQUE4QixDQUFDO1lBQ2xJLE9BQU8sRUFBRSxDQUFDLDZCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyx5QkFBeUIsQ0FBRztJQUFELGdDQUFDO0NBQUE7QUFBNUIsOERBQXlCIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24ubW9kdWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNvcHRvcnNoaVNoYXJlZE1vZHVsZSB9IGZyb20gJ2FwcC9zaGFyZWQnO1xyXG5pbXBvcnQge1xyXG4gICAgUHJvZHVjdGlvbkNvbXBvbmVudCxcclxuICAgIFByb2R1Y3Rpb25EZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICBQcm9kdWN0aW9uRGVsZXRlUG9wdXBDb21wb25lbnQsXHJcbiAgICBQcm9kdWN0aW9uRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgcHJvZHVjdGlvblBvcHVwUm91dGUsXHJcbiAgICBwcm9kdWN0aW9uUm91dGUsXHJcbiAgICBQcm9kdWN0aW9uVXBkYXRlQ29tcG9uZW50XHJcbn0gZnJvbSAnLi8nO1xyXG5cclxuY29uc3QgRU5USVRZX1NUQVRFUyA9IFsuLi5wcm9kdWN0aW9uUm91dGUsIC4uLnByb2R1Y3Rpb25Qb3B1cFJvdXRlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbU29wdG9yc2hpU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoRU5USVRZX1NUQVRFUyldLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUHJvZHVjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBQcm9kdWN0aW9uRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIFByb2R1Y3Rpb25VcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgUHJvZHVjdGlvbkRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgICAgICBQcm9kdWN0aW9uRGVsZXRlUG9wdXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0aW9uQ29tcG9uZW50LCBQcm9kdWN0aW9uVXBkYXRlQ29tcG9uZW50LCBQcm9kdWN0aW9uRGVsZXRlRGlhbG9nQ29tcG9uZW50LCBQcm9kdWN0aW9uRGVsZXRlUG9wdXBDb21wb25lbnRdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3B0b3JzaGlQcm9kdWN0aW9uTW9kdWxlIHt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/production/production.module.ts\n");

/***/ })

}]);