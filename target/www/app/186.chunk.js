(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[186],{

/***/ "./src/main/webapp/app/entities/requisition-extended/requisition-extended.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/requisition-extended/requisition-extended.module.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar requisition_extended_route_1 = __webpack_require__(/*! app/entities/requisition-extended/requisition-extended.route */ \"./src/main/webapp/app/entities/requisition-extended/requisition-extended.route.ts\");\r\nvar requisition_extended_component_1 = __webpack_require__(/*! app/entities/requisition-extended/requisition-extended.component */ \"./src/main/webapp/app/entities/requisition-extended/requisition-extended.component.ts\");\r\nvar requisition_extended_detail_component_1 = __webpack_require__(/*! app/entities/requisition-extended/requisition-extended-detail.component */ \"./src/main/webapp/app/entities/requisition-extended/requisition-extended-detail.component.ts\");\r\nvar requisition_extended_update_component_1 = __webpack_require__(/*! app/entities/requisition-extended/requisition-extended-update.component */ \"./src/main/webapp/app/entities/requisition-extended/requisition-extended-update.component.ts\");\r\nvar requisition_1 = __webpack_require__(/*! app/entities/requisition */ \"./src/main/webapp/app/entities/requisition/index.ts\");\r\nvar requisition_details_extended_directive_component_1 = __webpack_require__(/*! app/entities/requisition-extended/requisition-details-extended-directive.component */ \"./src/main/webapp/app/entities/requisition-extended/requisition-details-extended-directive.component.ts\");\r\nvar quotation_for_requisition_component_1 = __webpack_require__(/*! app/entities/requisition-extended/quotation-for-requisition.component */ \"./src/main/webapp/app/entities/requisition-extended/quotation-for-requisition.component.ts\");\r\nvar ENTITY_STATES = requisition_extended_route_1.requisitionExtendedRoute.concat(requisition_extended_route_1.requisitionExtendedPopupRoute);\r\nvar SoptorshiRequisitionExtendedModule = /** @class */ (function () {\r\n    function SoptorshiRequisitionExtendedModule() {\r\n    }\r\n    SoptorshiRequisitionExtendedModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [\r\n                /*     RequisitionComponent,\r\n                RequisitionDetailComponent,\r\n                RequisitionUpdateComponent,\r\n                RequisitionExtendedComponent,\r\n                RequisitionExtendedUpdateComponent,\r\n                RequisitionExtendedDetailComponent,*/\r\n                requisition_1.RequisitionDeleteDialogComponent,\r\n                requisition_1.RequisitionDeletePopupComponent /*,\r\n                RequisitionDetailsExtendedDirectiveComponent,\r\n                QuotationForRequisitionComponent,\r\n                RequisitionMessagesDirectiveComponent,\r\n                CommercialInfoDirComponent,\r\n                RequisitionInfoCommercialDirComponent*/\r\n            ],\r\n            entryComponents: [\r\n                requisition_extended_component_1.RequisitionExtendedComponent,\r\n                requisition_extended_update_component_1.RequisitionExtendedUpdateComponent,\r\n                requisition_1.RequisitionDeleteDialogComponent,\r\n                requisition_extended_detail_component_1.RequisitionExtendedDetailComponent,\r\n                requisition_1.RequisitionDeletePopupComponent,\r\n                requisition_details_extended_directive_component_1.RequisitionDetailsExtendedDirectiveComponent,\r\n                quotation_for_requisition_component_1.QuotationForRequisitionComponent\r\n            ],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiRequisitionExtendedModule);\r\n    return SoptorshiRequisitionExtendedModule;\r\n}());\r\nexports.SoptorshiRequisitionExtendedModule = SoptorshiRequisitionExtendedModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcXVpc2l0aW9uLWV4dGVuZGVkL3JlcXVpc2l0aW9uLWV4dGVuZGVkLm1vZHVsZS50cz9lYmUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9HQUFpRTtBQUNqRSw0R0FBK0M7QUFFL0MsOEZBQW1EO0FBQ25ELGdOQUF1STtBQUN2SSw0TkFBZ0g7QUFDaEgsaVBBQTZIO0FBQzdILGlQQUE2SDtBQUM3SCwrSEFNa0M7QUFDbEMsa1JBQWtKO0FBQ2xKLDJPQUF5SDtBQUt6SCxJQUFNLGFBQWEsR0FBTyxxREFBd0IsUUFBSywwREFBNkIsQ0FBQyxDQUFDO0FBOEJ0RjtJQUFBO0lBQWlELENBQUM7SUFBckMsa0NBQWtDO1FBNUI5QyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw4QkFBcUIsRUFBRSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RSxZQUFZLEVBQUU7Z0JBQ1Y7Ozs7O3FEQUtxQztnQkFDckMsOENBQWdDO2dCQUNoQyw2Q0FBK0IsQ0FBQzs7Ozs7dURBS087YUFDMUM7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsNkRBQTRCO2dCQUM1QiwwRUFBa0M7Z0JBQ2xDLDhDQUFnQztnQkFDaEMsMEVBQWtDO2dCQUNsQyw2Q0FBK0I7Z0JBQy9CLCtGQUE0QztnQkFDNUMsc0VBQWdDO2FBQ25DO1lBQ0QsT0FBTyxFQUFFLENBQUMsNkJBQXNCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGtDQUFrQyxDQUFHO0lBQUQseUNBQUM7Q0FBQTtBQUFyQyxnRkFBa0MiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcXVpc2l0aW9uLWV4dGVuZGVkL3JlcXVpc2l0aW9uLWV4dGVuZGVkLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBTb3B0b3JzaGlTaGFyZWRNb2R1bGUgfSBmcm9tICdhcHAvc2hhcmVkJztcclxuaW1wb3J0IHsgcmVxdWlzaXRpb25FeHRlbmRlZFBvcHVwUm91dGUsIHJlcXVpc2l0aW9uRXh0ZW5kZWRSb3V0ZSB9IGZyb20gJ2FwcC9lbnRpdGllcy9yZXF1aXNpdGlvbi1leHRlbmRlZC9yZXF1aXNpdGlvbi1leHRlbmRlZC5yb3V0ZSc7XHJcbmltcG9ydCB7IFJlcXVpc2l0aW9uRXh0ZW5kZWRDb21wb25lbnQgfSBmcm9tICdhcHAvZW50aXRpZXMvcmVxdWlzaXRpb24tZXh0ZW5kZWQvcmVxdWlzaXRpb24tZXh0ZW5kZWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVxdWlzaXRpb25FeHRlbmRlZERldGFpbENvbXBvbmVudCB9IGZyb20gJ2FwcC9lbnRpdGllcy9yZXF1aXNpdGlvbi1leHRlbmRlZC9yZXF1aXNpdGlvbi1leHRlbmRlZC1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVxdWlzaXRpb25FeHRlbmRlZFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJ2FwcC9lbnRpdGllcy9yZXF1aXNpdGlvbi1leHRlbmRlZC9yZXF1aXNpdGlvbi1leHRlbmRlZC11cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICAgIFJlcXVpc2l0aW9uQ29tcG9uZW50LFxyXG4gICAgUmVxdWlzaXRpb25EZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICBSZXF1aXNpdGlvbkRlbGV0ZVBvcHVwQ29tcG9uZW50LFxyXG4gICAgUmVxdWlzaXRpb25EZXRhaWxDb21wb25lbnQsXHJcbiAgICBSZXF1aXNpdGlvblVwZGF0ZUNvbXBvbmVudFxyXG59IGZyb20gJ2FwcC9lbnRpdGllcy9yZXF1aXNpdGlvbic7XHJcbmltcG9ydCB7IFJlcXVpc2l0aW9uRGV0YWlsc0V4dGVuZGVkRGlyZWN0aXZlQ29tcG9uZW50IH0gZnJvbSAnYXBwL2VudGl0aWVzL3JlcXVpc2l0aW9uLWV4dGVuZGVkL3JlcXVpc2l0aW9uLWRldGFpbHMtZXh0ZW5kZWQtZGlyZWN0aXZlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1b3RhdGlvbkZvclJlcXVpc2l0aW9uQ29tcG9uZW50IH0gZnJvbSAnYXBwL2VudGl0aWVzL3JlcXVpc2l0aW9uLWV4dGVuZGVkL3F1b3RhdGlvbi1mb3ItcmVxdWlzaXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVxdWlzaXRpb25NZXNzYWdlc0RpcmVjdGl2ZUNvbXBvbmVudCB9IGZyb20gJ2FwcC9lbnRpdGllcy9yZXF1aXNpdGlvbi1leHRlbmRlZC9yZXF1aXNpdGlvbi1tZXNzYWdlcy1kaXJlY3RpdmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbWVyY2lhbEluZm9EaXJDb21wb25lbnQgfSBmcm9tICcuL2NvbW1lcmNpYWwtaW5mby1kaXIvY29tbWVyY2lhbC1pbmZvLWRpci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXF1aXNpdGlvbkluZm9Db21tZXJjaWFsRGlyQ29tcG9uZW50IH0gZnJvbSAnLi9yZXF1aXNpdGlvbi1pbmZvLWNvbW1lcmNpYWwtZGlyL3JlcXVpc2l0aW9uLWluZm8tY29tbWVyY2lhbC1kaXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IEVOVElUWV9TVEFURVMgPSBbLi4ucmVxdWlzaXRpb25FeHRlbmRlZFJvdXRlLCAuLi5yZXF1aXNpdGlvbkV4dGVuZGVkUG9wdXBSb3V0ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1NvcHRvcnNoaVNoYXJlZE1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKEVOVElUWV9TVEFURVMpXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIC8qICAgICBSZXF1aXNpdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBSZXF1aXNpdGlvbkRldGFpbENvbXBvbmVudCxcclxuICAgICAgICBSZXF1aXNpdGlvblVwZGF0ZUNvbXBvbmVudCxcclxuICAgICAgICBSZXF1aXNpdGlvbkV4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcXVpc2l0aW9uRXh0ZW5kZWRVcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25FeHRlbmRlZERldGFpbENvbXBvbmVudCwqL1xyXG4gICAgICAgIFJlcXVpc2l0aW9uRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcXVpc2l0aW9uRGVsZXRlUG9wdXBDb21wb25lbnQgLyosXHJcbiAgICAgICAgUmVxdWlzaXRpb25EZXRhaWxzRXh0ZW5kZWREaXJlY3RpdmVDb21wb25lbnQsXHJcbiAgICAgICAgUXVvdGF0aW9uRm9yUmVxdWlzaXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25NZXNzYWdlc0RpcmVjdGl2ZUNvbXBvbmVudCxcclxuICAgICAgICBDb21tZXJjaWFsSW5mb0RpckNvbXBvbmVudCxcclxuICAgICAgICBSZXF1aXNpdGlvbkluZm9Db21tZXJjaWFsRGlyQ29tcG9uZW50Ki9cclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBSZXF1aXNpdGlvbkV4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcXVpc2l0aW9uRXh0ZW5kZWRVcGRhdGVDb21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25EZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgICAgICAgUmVxdWlzaXRpb25FeHRlbmRlZERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBSZXF1aXNpdGlvbkRlbGV0ZVBvcHVwQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcXVpc2l0aW9uRGV0YWlsc0V4dGVuZGVkRGlyZWN0aXZlQ29tcG9uZW50LFxyXG4gICAgICAgIFF1b3RhdGlvbkZvclJlcXVpc2l0aW9uQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3B0b3JzaGlSZXF1aXNpdGlvbkV4dGVuZGVkTW9kdWxlIHt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/requisition-extended/requisition-extended.module.ts\n");

/***/ })

}]);