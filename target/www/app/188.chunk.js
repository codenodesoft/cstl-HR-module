(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[188],{

/***/ "./src/main/webapp/app/entities/requisition-voucher-relation-extended/requisition-voucher-relation-extended.module.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/requisition-voucher-relation-extended/requisition-voucher-relation-extended.module.ts ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/requisition-voucher-relation-extended/index.ts\");\r\nvar requisition_voucher_relation_1 = __webpack_require__(/*! app/entities/requisition-voucher-relation */ \"./src/main/webapp/app/entities/requisition-voucher-relation/index.ts\");\r\nvar ENTITY_STATES = _1.requisitionVoucherRelationExtendedRoute.concat(requisition_voucher_relation_1.requisitionVoucherRelationPopupRoute);\r\nvar SoptorshiRequisitionVoucherRelationModule = /** @class */ (function () {\r\n    function SoptorshiRequisitionVoucherRelationModule() {\r\n    }\r\n    SoptorshiRequisitionVoucherRelationModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [\r\n                requisition_voucher_relation_1.RequisitionVoucherRelationComponent,\r\n                requisition_voucher_relation_1.RequisitionVoucherRelationDetailComponent,\r\n                requisition_voucher_relation_1.RequisitionVoucherRelationUpdateComponent,\r\n                _1.RequisitionVoucherRelationExtendedComponent,\r\n                _1.RequisitionVoucherRelationExtendedDetailComponent,\r\n                _1.RequisitionVoucherRelationExtendedUpdateComponent,\r\n                requisition_voucher_relation_1.RequisitionVoucherRelationDeleteDialogComponent,\r\n                requisition_voucher_relation_1.RequisitionVoucherRelationDeletePopupComponent\r\n            ],\r\n            entryComponents: [\r\n                _1.RequisitionVoucherRelationExtendedComponent,\r\n                _1.RequisitionVoucherRelationExtendedUpdateComponent,\r\n                requisition_voucher_relation_1.RequisitionVoucherRelationDeleteDialogComponent,\r\n                requisition_voucher_relation_1.RequisitionVoucherRelationDeletePopupComponent\r\n            ],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiRequisitionVoucherRelationModule);\r\n    return SoptorshiRequisitionVoucherRelationModule;\r\n}());\r\nexports.SoptorshiRequisitionVoucherRelationModule = SoptorshiRequisitionVoucherRelationModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcXVpc2l0aW9uLXZvdWNoZXItcmVsYXRpb24tZXh0ZW5kZWQvcmVxdWlzaXRpb24tdm91Y2hlci1yZWxhdGlvbi1leHRlbmRlZC5tb2R1bGUudHM/MzYxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBaUU7QUFDakUsNEdBQStDO0FBRS9DLDhGQUFtRDtBQUNuRCx3SEFLWTtBQUNaLGtMQU9tRDtBQUVuRCxJQUFNLGFBQWEsR0FBTywwQ0FBdUMsUUFBSyxtRUFBb0MsQ0FBQyxDQUFDO0FBc0I1RztJQUFBO0lBQXdELENBQUM7SUFBNUMseUNBQXlDO1FBcEJyRCxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw4QkFBcUIsRUFBRSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RSxZQUFZLEVBQUU7Z0JBQ1Ysa0VBQW1DO2dCQUNuQyx3RUFBeUM7Z0JBQ3pDLHdFQUF5QztnQkFDekMsOENBQTJDO2dCQUMzQyxvREFBaUQ7Z0JBQ2pELG9EQUFpRDtnQkFDakQsOEVBQStDO2dCQUMvQyw2RUFBOEM7YUFDakQ7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsOENBQTJDO2dCQUMzQyxvREFBaUQ7Z0JBQ2pELDhFQUErQztnQkFDL0MsNkVBQThDO2FBQ2pEO1lBQ0QsT0FBTyxFQUFFLENBQUMsNkJBQXNCLENBQUM7U0FDcEMsQ0FBQztPQUNXLHlDQUF5QyxDQUFHO0lBQUQsZ0RBQUM7Q0FBQTtBQUE1Qyw4RkFBeUMiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcXVpc2l0aW9uLXZvdWNoZXItcmVsYXRpb24tZXh0ZW5kZWQvcmVxdWlzaXRpb24tdm91Y2hlci1yZWxhdGlvbi1leHRlbmRlZC5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU29wdG9yc2hpU2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgICBSZXF1aXNpdGlvblZvdWNoZXJSZWxhdGlvbkV4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25FeHRlbmRlZERldGFpbENvbXBvbmVudCxcclxuICAgIFJlcXVpc2l0aW9uVm91Y2hlclJlbGF0aW9uRXh0ZW5kZWRVcGRhdGVDb21wb25lbnQsXHJcbiAgICByZXF1aXNpdGlvblZvdWNoZXJSZWxhdGlvbkV4dGVuZGVkUm91dGVcclxufSBmcm9tICcuLyc7XHJcbmltcG9ydCB7XHJcbiAgICBSZXF1aXNpdGlvblZvdWNoZXJSZWxhdGlvbkNvbXBvbmVudCxcclxuICAgIFJlcXVpc2l0aW9uVm91Y2hlclJlbGF0aW9uRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25EZWxldGVQb3B1cENvbXBvbmVudCxcclxuICAgIFJlcXVpc2l0aW9uVm91Y2hlclJlbGF0aW9uRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgcmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25Qb3B1cFJvdXRlLFxyXG4gICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25VcGRhdGVDb21wb25lbnRcclxufSBmcm9tICdhcHAvZW50aXRpZXMvcmVxdWlzaXRpb24tdm91Y2hlci1yZWxhdGlvbic7XHJcblxyXG5jb25zdCBFTlRJVFlfU1RBVEVTID0gWy4uLnJlcXVpc2l0aW9uVm91Y2hlclJlbGF0aW9uRXh0ZW5kZWRSb3V0ZSwgLi4ucmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25Qb3B1cFJvdXRlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbU29wdG9yc2hpU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoRU5USVRZX1NUQVRFUyldLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25EZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25VcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25FeHRlbmRlZENvbXBvbmVudCxcclxuICAgICAgICBSZXF1aXNpdGlvblZvdWNoZXJSZWxhdGlvbkV4dGVuZGVkRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcXVpc2l0aW9uVm91Y2hlclJlbGF0aW9uRXh0ZW5kZWRVcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25EZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25EZWxldGVQb3B1cENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIFJlcXVpc2l0aW9uVm91Y2hlclJlbGF0aW9uRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25Wb3VjaGVyUmVsYXRpb25FeHRlbmRlZFVwZGF0ZUNvbXBvbmVudCxcclxuICAgICAgICBSZXF1aXNpdGlvblZvdWNoZXJSZWxhdGlvbkRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcclxuICAgICAgICBSZXF1aXNpdGlvblZvdWNoZXJSZWxhdGlvbkRlbGV0ZVBvcHVwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3B0b3JzaGlSZXF1aXNpdGlvblZvdWNoZXJSZWxhdGlvbk1vZHVsZSB7fVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/requisition-voucher-relation-extended/requisition-voucher-relation-extended.module.ts\n");

/***/ })

}]);