(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[169],{

/***/ "./src/main/webapp/app/entities/leave-attachment-extended/leave-attachment-extended.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/leave-attachment-extended/leave-attachment-extended.module.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/leave-attachment-extended/index.ts\");\r\nvar others_leave_attachment_component_1 = __webpack_require__(/*! app/entities/leave-attachment-extended/others-leave-attachment.component */ \"./src/main/webapp/app/entities/leave-attachment-extended/others-leave-attachment.component.ts\");\r\nvar ENTITY_STATES = _1.leaveAttachmentExtendedRoute.concat(_1.leaveAttachmentPopupExtendedRoute);\r\nvar SoptorshiLeaveAttachmentExtendedModule = /** @class */ (function () {\r\n    function SoptorshiLeaveAttachmentExtendedModule() {\r\n    }\r\n    SoptorshiLeaveAttachmentExtendedModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [shared_1.SoptorshiSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n            declarations: [\r\n                _1.LeaveAttachmentExtendedComponent,\r\n                _1.LeaveAttachmentDetailExtendedComponent,\r\n                _1.LeaveAttachmentUpdateExtendedComponent,\r\n                _1.LeaveAttachmentDeleteDialogExtendedComponent,\r\n                _1.LeaveAttachmentDeletePopupExtendedComponent,\r\n                others_leave_attachment_component_1.OthersLeaveAttachmentComponent,\r\n                _1.OthersLeaveAttachmentUpdateComponent\r\n            ],\r\n            entryComponents: [\r\n                _1.LeaveAttachmentExtendedComponent,\r\n                _1.LeaveAttachmentUpdateExtendedComponent,\r\n                _1.LeaveAttachmentDeleteDialogExtendedComponent,\r\n                _1.LeaveAttachmentDeletePopupExtendedComponent\r\n            ],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], SoptorshiLeaveAttachmentExtendedModule);\r\n    return SoptorshiLeaveAttachmentExtendedModule;\r\n}());\r\nexports.SoptorshiLeaveAttachmentExtendedModule = SoptorshiLeaveAttachmentExtendedModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2xlYXZlLWF0dGFjaG1lbnQtZXh0ZW5kZWQvbGVhdmUtYXR0YWNobWVudC1leHRlbmRlZC5tb2R1bGUudHM/Njg0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBaUU7QUFDakUsNEdBQStDO0FBRS9DLDhGQUFtRDtBQUNuRCw0R0FTWTtBQUNaLCtPQUEwSDtBQUUxSCxJQUFNLGFBQWEsR0FBTywrQkFBNEIsUUFBSyxvQ0FBaUMsQ0FBQyxDQUFDO0FBcUI5RjtJQUFBO0lBQXFELENBQUM7SUFBekMsc0NBQXNDO1FBbkJsRCxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw4QkFBcUIsRUFBRSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RSxZQUFZLEVBQUU7Z0JBQ1YsbUNBQWdDO2dCQUNoQyx5Q0FBc0M7Z0JBQ3RDLHlDQUFzQztnQkFDdEMsK0NBQTRDO2dCQUM1Qyw4Q0FBMkM7Z0JBQzNDLGtFQUE4QjtnQkFDOUIsdUNBQW9DO2FBQ3ZDO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLG1DQUFnQztnQkFDaEMseUNBQXNDO2dCQUN0QywrQ0FBNEM7Z0JBQzVDLDhDQUEyQzthQUM5QztZQUNELE9BQU8sRUFBRSxDQUFDLDZCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyxzQ0FBc0MsQ0FBRztJQUFELDZDQUFDO0NBQUE7QUFBekMsd0ZBQXNDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9sZWF2ZS1hdHRhY2htZW50LWV4dGVuZGVkL2xlYXZlLWF0dGFjaG1lbnQtZXh0ZW5kZWQubW9kdWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNvcHRvcnNoaVNoYXJlZE1vZHVsZSB9IGZyb20gJ2FwcC9zaGFyZWQnO1xyXG5pbXBvcnQge1xyXG4gICAgTGVhdmVBdHRhY2htZW50RGVsZXRlRGlhbG9nRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICBMZWF2ZUF0dGFjaG1lbnREZWxldGVQb3B1cEV4dGVuZGVkQ29tcG9uZW50LFxyXG4gICAgTGVhdmVBdHRhY2htZW50RGV0YWlsRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICBMZWF2ZUF0dGFjaG1lbnRFeHRlbmRlZENvbXBvbmVudCxcclxuICAgIGxlYXZlQXR0YWNobWVudEV4dGVuZGVkUm91dGUsXHJcbiAgICBsZWF2ZUF0dGFjaG1lbnRQb3B1cEV4dGVuZGVkUm91dGUsXHJcbiAgICBMZWF2ZUF0dGFjaG1lbnRVcGRhdGVFeHRlbmRlZENvbXBvbmVudCxcclxuICAgIE90aGVyc0xlYXZlQXR0YWNobWVudFVwZGF0ZUNvbXBvbmVudFxyXG59IGZyb20gJy4vJztcclxuaW1wb3J0IHsgT3RoZXJzTGVhdmVBdHRhY2htZW50Q29tcG9uZW50IH0gZnJvbSAnYXBwL2VudGl0aWVzL2xlYXZlLWF0dGFjaG1lbnQtZXh0ZW5kZWQvb3RoZXJzLWxlYXZlLWF0dGFjaG1lbnQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IEVOVElUWV9TVEFURVMgPSBbLi4ubGVhdmVBdHRhY2htZW50RXh0ZW5kZWRSb3V0ZSwgLi4ubGVhdmVBdHRhY2htZW50UG9wdXBFeHRlbmRlZFJvdXRlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbU29wdG9yc2hpU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoRU5USVRZX1NUQVRFUyldLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50RXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50RGV0YWlsRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50VXBkYXRlRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50RGVsZXRlRGlhbG9nRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50RGVsZXRlUG9wdXBFeHRlbmRlZENvbXBvbmVudCxcclxuICAgICAgICBPdGhlcnNMZWF2ZUF0dGFjaG1lbnRDb21wb25lbnQsXHJcbiAgICAgICAgT3RoZXJzTGVhdmVBdHRhY2htZW50VXBkYXRlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50RXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50VXBkYXRlRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50RGVsZXRlRGlhbG9nRXh0ZW5kZWRDb21wb25lbnQsXHJcbiAgICAgICAgTGVhdmVBdHRhY2htZW50RGVsZXRlUG9wdXBFeHRlbmRlZENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29wdG9yc2hpTGVhdmVBdHRhY2htZW50RXh0ZW5kZWRNb2R1bGUge31cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/leave-attachment-extended/leave-attachment-extended.module.ts\n");

/***/ })

}]);