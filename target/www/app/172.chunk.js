(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[172],{

/***/ "./src/main/webapp/app/entities/mst-account-extended/mst-account-extended.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/mst-account-extended/mst-account-extended.module.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/mst-account-extended/index.ts\");\r\nvar mst_account_1 = __webpack_require__(/*! app/entities/mst-account */ \"./src/main/webapp/app/entities/mst-account/index.ts\");\r\nvar ENTITY_STATES = _1.mstAccountExtendedRoute.concat(_1.mstAccountExtendedPopupRoute);\r\nvar SoptorshiMstAccountModule = /** @class */ (function () {\r\n    function SoptorshiMstAccountModule() {\r\n    }\r\n    SoptorshiMstAccountModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [\r\n                mst_account_1.MstAccountComponent,\r\n                mst_account_1.MstAccountDetailComponent,\r\n                mst_account_1.MstAccountUpdateComponent,\r\n                _1.MstAccountExtendedComponent,\r\n                _1.MstAccountExtendedDetailComponent,\r\n                _1.MstAccountExtendedUpdateComponent,\r\n                mst_account_1.MstAccountDeleteDialogComponent,\r\n                mst_account_1.MstAccountDeletePopupComponent\r\n            ],\r\n            entryComponents: [\r\n                _1.MstAccountExtendedComponent,\r\n                _1.MstAccountExtendedUpdateComponent,\r\n                mst_account_1.MstAccountDeleteDialogComponent,\r\n                mst_account_1.MstAccountDeletePopupComponent\r\n            ],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiMstAccountModule);\r\n    return SoptorshiMstAccountModule;\r\n}());\r\nexports.SoptorshiMstAccountModule = SoptorshiMstAccountModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL21zdC1hY2NvdW50LWV4dGVuZGVkL21zdC1hY2NvdW50LWV4dGVuZGVkLm1vZHVsZS50cz83MGE4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9HQUFpRTtBQUNqRSw0R0FBK0M7QUFFL0MsOEZBQW1EO0FBQ25ELHVHQU1ZO0FBQ1osK0hBTWtDO0FBRWxDLElBQU0sYUFBYSxHQUFPLDBCQUF1QixRQUFLLCtCQUE0QixDQUFDLENBQUM7QUFzQnBGO0lBQUE7SUFBd0MsQ0FBQztJQUE1Qix5QkFBeUI7UUFwQnJDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDhCQUFxQixFQUFFLHFCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RFLFlBQVksRUFBRTtnQkFDVixpQ0FBbUI7Z0JBQ25CLHVDQUF5QjtnQkFDekIsdUNBQXlCO2dCQUN6Qiw4QkFBMkI7Z0JBQzNCLG9DQUFpQztnQkFDakMsb0NBQWlDO2dCQUNqQyw2Q0FBK0I7Z0JBQy9CLDRDQUE4QjthQUNqQztZQUNELGVBQWUsRUFBRTtnQkFDYiw4QkFBMkI7Z0JBQzNCLG9DQUFpQztnQkFDakMsNkNBQStCO2dCQUMvQiw0Q0FBOEI7YUFDakM7WUFDRCxPQUFPLEVBQUUsQ0FBQyw2QkFBc0IsQ0FBQztTQUNwQyxDQUFDO09BQ1cseUJBQXlCLENBQUc7SUFBRCxnQ0FBQztDQUFBO0FBQTVCLDhEQUF5QiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbXN0LWFjY291bnQtZXh0ZW5kZWQvbXN0LWFjY291bnQtZXh0ZW5kZWQubW9kdWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNvcHRvcnNoaVNoYXJlZE1vZHVsZSB9IGZyb20gJ2FwcC9zaGFyZWQnO1xyXG5pbXBvcnQge1xyXG4gICAgTXN0QWNjb3VudEV4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgTXN0QWNjb3VudEV4dGVuZGVkRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgbXN0QWNjb3VudEV4dGVuZGVkUG9wdXBSb3V0ZSxcclxuICAgIG1zdEFjY291bnRFeHRlbmRlZFJvdXRlLFxyXG4gICAgTXN0QWNjb3VudEV4dGVuZGVkVXBkYXRlQ29tcG9uZW50XHJcbn0gZnJvbSAnLi8nO1xyXG5pbXBvcnQge1xyXG4gICAgTXN0QWNjb3VudENvbXBvbmVudCxcclxuICAgIE1zdEFjY291bnREZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICBNc3RBY2NvdW50RGVsZXRlUG9wdXBDb21wb25lbnQsXHJcbiAgICBNc3RBY2NvdW50RGV0YWlsQ29tcG9uZW50LFxyXG4gICAgTXN0QWNjb3VudFVwZGF0ZUNvbXBvbmVudFxyXG59IGZyb20gJ2FwcC9lbnRpdGllcy9tc3QtYWNjb3VudCc7XHJcblxyXG5jb25zdCBFTlRJVFlfU1RBVEVTID0gWy4uLm1zdEFjY291bnRFeHRlbmRlZFJvdXRlLCAuLi5tc3RBY2NvdW50RXh0ZW5kZWRQb3B1cFJvdXRlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbU29wdG9yc2hpU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoRU5USVRZX1NUQVRFUyldLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTXN0QWNjb3VudENvbXBvbmVudCxcclxuICAgICAgICBNc3RBY2NvdW50RGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIE1zdEFjY291bnRVcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgTXN0QWNjb3VudEV4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgICAgIE1zdEFjY291bnRFeHRlbmRlZERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBNc3RBY2NvdW50RXh0ZW5kZWRVcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgTXN0QWNjb3VudERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgICAgICBNc3RBY2NvdW50RGVsZXRlUG9wdXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBNc3RBY2NvdW50RXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgTXN0QWNjb3VudEV4dGVuZGVkVXBkYXRlQ29tcG9uZW50LFxyXG4gICAgICAgIE1zdEFjY291bnREZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICAgICAgTXN0QWNjb3VudERlbGV0ZVBvcHVwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3B0b3JzaGlNc3RBY2NvdW50TW9kdWxlIHt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/mst-account-extended/mst-account-extended.module.ts\n");

/***/ })

}]);