function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"text-align:center\">\n    <h1>\n      Welcome Admin!\n    </h1>\n    <p>\n      <button (click)=\"logout()\">\n        Logout\n      </button>\n    </p>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-bg\">\n\t<!-- content -->\n\t<div class=\"sub-main-w3\">\n        \n\t\t<div class=\"bg-content-w3pvt\">\n          \n\n\t\t\t<div class=\" top-content-style\">\n                <div *ngIf=\"success\" > A link has been sent to your mail to reset password</div>\n\t\t\t\t<img src=\"../../assets/logo.png\" style=\"width: 150px;height: 50px;\">\n                <h3 style=\"color:#ffffff\">Welcome Back</h3>\n\t\t\t</div>\n            \n            <form [formGroup]=\"forgotPasswordForm\"  (ngSubmit)=\"logIn()\">\n                \n              <p class=\"legend\">Please Enter your Email</p>\n                    <input  type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n                    <div *ngIf=\"isSubmitted && forgotPasswordForm.controls.email.errors\" class=\"error\">\n                        <div *ngIf=\"forgotPasswordForm.controls.email.errors.required\">Email is required</div>\n                        <div *ngIf=\"forgotPasswordForm.controls.email.errors.pattern\">Valid Email is required</div>\n              </div>\n                    <!-- <div *ngIf=\"!forgotPasswordFormErrors.email.required && forgotPasswordFormErrors.email.email\">\n                        Please enter a valid email address\n                    </div> -->\n              \n                    <div class=\"button-group\" >\n                        <button type=\"submit\" class=\"reset\">Send reset link</button>\n                      </div>\n                      \n                     \n                        <a class=\"link\" [routerLink]=\"'/login'\">Go back to login</a>\n                    \n            </form>\n\n\n        </div>\n\n    </div>\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/apply-leave/apply-leave.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/apply-leave/apply-leave.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarkAttendanceApplyLeaveApplyLeaveComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Main starts -->\n<div class=\"main\">\n   <!-- Top Navigation -->\n     <div class=\" top-content-style\"> \n       <div class=\"pull-left\">\n         <span ><a routerLink='/mark-attendance' routerLinkActive=\"Active\"  class=\"fa fa-arrow-left\" style=\"color: white;text-decoration: none;\"></a></span>\n        </div>\n           <span id=\"home\" style=\"text-align: center;\">Apply Leave</span>\n           <div class=\"pull-right\">\n           <span class=\"fa fa-search\"></span>\n           </div>     \n        </div>  <!-- Top Navigation ends--> \n\n        <div>  <!-- Form Division-->\n         <form action=\"/action_page.php\">\n         <p style=\"color:red;font-size:10px;text-align: center;\">*Please write proper description about your concern</p>\n         <input type=\"text\"  name=\"name\" placeholder=\"Name\">\n         <input type=\"text\" id=\"lname\" name=\"reason\" placeholder=\"Reason for leave\">\n         <textarea type=\"text\" id=\"lname\" name=\"description\" placeholder=\"Description\"></textarea>\n         <input type=\"submit\" value=\"Submit\">\n         </form>\n      </div>   <!-- Form Division ends-->    \n</div>  <!--  Main ends -->\n\n   ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/log-info/log-info.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/log-info/log-info.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarkAttendanceLogInfoLogInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Main Div -->\n<div class=\"main\">\n    <!-- Top Navigation -->\n    <div class=\" top-content-style\"> \n      <div class=\"pull-left\">\n        <span ><a routerLink='/mark-attendance' routerLinkActive=\"Active\"  class=\"fa fa-arrow-left\" style=\"color: white;text-decoration: none;\"></a></span>\n       </div>\n          <span id=\"home\" style=\"text-align: center;\">Log Info</span>\n          <div class=\"pull-right\">\n          <span class=\"fa fa-search\"></span>\n          </div>     \n     </div>    <!--Top Navigation Ends   -->\n      \n        <!-- card -->\n        <div class=\"card\">\n            <div class=\"card-body\" >\n           <div class=\"group\">\n            <span>Login Time</span>\n            <span style=\"right:0px;font-size:8px;position: absolute;color: #000000;padding:0;margin:0 15px;\">Filter By</span>\n           \n            <!-- <span style=\"right:0px;position: absolute;margin:0 15px;\"> -->\n            <!-- <span style=\"right:0px;position: absolute;margin:0 15px;\"> -->\n                <div class=\"box\" style=\"right:0px;position: absolute;margin:0 15px;\" >\n                    <select>\n                      <option>This week</option>\n                      <option>Option 2</option>\n                      <option>Option 3</option>\n                      <option>Option 4</option>\n                      <option>Option 5</option>\n                    </select>\n                  </div>\n             <!-- </span> -->\n             <p style=\"font-size:20px;padding:0;margin-top: 4px;\">45.5<span style=\"font-size:10px;padding-left:5px\">hrs</span></p>\n          \n           </div>\n              <div class=\"graph\" style=\"padding: 0 30px 30px;\n              margin: 0 15px;\">\n                  <div class=\"graph-bg\" style=\"background: #09ca889e; height: 150px;border-radius: 10px;\">\n\n                  </div>\n              </div>  \n           \n            <!-- Table Division -->\n             <table>\n                <thead style=\"background: #7e7a7a;;color:#ffffff;\">\n                    <tr>\n                        <th>Date</th>\n                        <th>Punch In</th>\n                        <th>Punch Out</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of log\">\n                        <td>{{ item.Date }}</td>\n                        <td>{{ item.punchIn }}</td>\n                        <td>{{ item.punchOut }}</td>\n                    </tr>\n                </tbody>\n            </table>\n   \n            </div>\n                </div>\n           \n           \n            \n        </div>\n \n  <!-- Main Div Ends -->  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/mark-attendance.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/mark-attendance.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarkAttendanceMarkAttendanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Main Starts -->\n<div class=\"main-bg\" >\n <div class=\"sub-main\">\n   <!-- Top Navigation starts -->\n   <div class=\"bg-content-w3pvt\" style=\"margin-bottom: 50px;\">    \n  <div class=\" top-content-style\" >\n    <div class=\"pull-left\">\n       <span class=\"fa fa-bars\"></span>\n        </div>\n        <span id=\"home\">Home</span>\n        <div class=\"pull-right\">\n        <span class=\"fa fa-search\"></span>\n        </div>     \n      </div>    <!-- Top Navigation ends -->\n    \n       \n        <div class=\"card\" (click)=onClick()>\n        <div class=\"card-body\" style=\"padding: 15px;\">\n        <h4> Meeting Schedule</h4>\n         <p>Need to attend the meeting on Friday @3pm to discuss about the work performnce.</p>\n         <img src=\"../../assets/oie_transparent (1).png\" style=\"width: 110px;\n         height: 80px;right:-5px;bottom:-8px;position: absolute;\">\n            </div>\n        </div>\n               <div class=\"attendance container\" style=\"position: relative;\" >\n                <h5 style=\"font-size:12px;font-weight: 600;\">Mark attendance</h5>\n               \n                  <div class=\"col-md-12-1\" style=\"margin-top: 20px;\"> \n                  <label class=\"switch\">\n                    <input type=\"checkbox\" checked>\n                   <span class=\"slider round\"></span>\n                   <span class=\"punch-in isActive\" (click)=\"punchIn()\">Punch In<span class=\"fa fa-unlock\" ></span></span>\n                   <span class=\"punch-out isActive\" (click)=\"punchOut()\" >Punch Out<span class=\"fa fa-lock\"></span></span>\n                   </label> \n                 \n                   <span *ngIf=\"hide\" #pI class=\"logIn-text\" style=\"font-size: 10px;position: absolute;color:blueviolet;display: flex;left:0px\">Last LogIn {{todaysDataTime}}</span> \n                   <span *ngIf=\"!hide\"#pO class=\"logOut-text\" style=\"font-size: 10px;right:0;position: absolute;color:blueviolet;display: flex;right: 0px;\">Last Logout {{todaysDataTime}}</span>\n                \n                </div>\n              </div>\n                <div class=\"card-container\" style=\" margin:4em -1.5em 0em -1.5em\">\n                  <h5 style=\"font-size:12px;font-weight: 600;margin-left: 20px;\">More</h5>\n                    <div class=\"row\">\n                      <div class=\"col-sm-4\">\n                       \n                        <div class=\"cards\">\n                          \n                          <div class=\"cards-body\">\n                            <a routerLink='/log' routerLinkActive=\"Active\">\n                            <img src=\"../../assets/Icon_1.png\" style=\"background: #1fcc92;\n                            box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\n                            border-radius: 10px;\n                            padding: 0.5em;\"></a>\n                            <p>Log Info</p>\n                              </div>\n                              </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"cards\">\n                          <div class=\"cards-body\">\n                            <a routerLink='/leave' routerLinkActive=\"Active\">\n                            <img src=\"../../assets/Icon_2.png\" style=\"background: #7fe2ff;;\n                              box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\n                              border-radius: 10px;\n                              padding:0.5em;\"></a>\n                            <p>Apply Leave</p>\n                              </div>\n                              </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"cards\" >\n                          <div class=\"cards-body\">\n                            <a routerLink='/expense' routerLinkActive=\"Active\">\n                            <img src=\"../../assets/Icon_3.png\"  style=\"background: #fd8383;;\n                              box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\n                              border-radius: 10px;\n                              padding: 0.5em;\"></a>\n                           <p>File Expense</p>\n                              </div>\n                              </div>\n                      </div>\n                    </div>\n\n                    <!-- <button (click)=onclick()>find me</button> -->\n        </div>\n        \n        \n        \n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/schedule/schedule.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/schedule/schedule.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarkAttendanceScheduleScheduleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Top Navigation startss-->\n<div class=\"topnav\">\n  <a routerLink='/mark-attendance' routerLinkActive=\"Active\" style=\"color: #ffffff; float:left\"><i class=\"fa fa-arrow-left\" style=\"color:#ffffff\"></i></a>\n    <a style=\"left: 45%;position: absolute;\">Events</a>\n    <a href=\"#about\" style=\"float: right;\"><i class=\"fa fa-search\" style=\"color:#ffffff\"></i></a>\n  </div>  <!-- Top Navigation ends-->\n  \n\n  <!-- List -->\n  <div class=\"group-list\">\n    <ul class=\"main-list\" style=\"color:#D16AF7;font-weight: 600;letter-spacing: 1px;\">\n        <li>\n            <span>Meeting schedule</span>\n            <span style=\"right: 21px;font-size:10px;position: absolute;\">5min ago</span>\n            <p>Here to inform all splenta employess to attend meeting on Monday at @3pm</p>\n       \n              <span style=\"font-weight: 100;\">Reports</span>\n                <span style=\"right: 21px;font-size:10px;position: absolute;\">5min ago</span>\n            <p>Here to inform all splenta employess to attend meeting on Monday at @3pm</p>\n            </li>     \n    </ul>\n    <ul class=\"main-list\" style=\"color:#D16AF7;font-weight: 600;letter-spacing: 1px;\">\n        <li>\n            <span>Safety Guidelines</span>\n            <span style=\"right: 21px;font-size:10px;position: absolute;\">5min ago</span>\n            <p>Here to inform all splenta employess to attend meeting on Monday at @3pm</p>\n       \n               <span style=\"font-weight: 100;\">Brief Notes to work</span>\n               <span style=\"right: 21px;font-size:10px;position: absolute;\">5min ago</span>\n            <p>Here to inform all splenta employess to attend meeting on Monday at @3pm</p>\n            </li>     \n    </ul>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSharedLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-bg\">\n\t<!-- content -->\n\t<div class=\"sub-main-w3\">\n\t\t<div class=\"bg-content-w3pvt\">\n\t\t\t<div class=\" top-content-style\">\n\t\t\t\t<img src=\"https://gayathrisachin.github.io/Squad/assets/logo.png\" style=\"width: 150px;height: 50px;\">\n\t\t\t\t<h3 style=\"color:#ffffff\">Welcome Back</h3>\n\t\t\t</div>\n\t\t\t<form [formGroup]=\"authForm\" (ngSubmit)=\"logIn()\" >\n\t\t\t\t\t<p class=\"legend\">Please Login here to mark your attendance<span class=\"fa fa-hand-o-down\"></span></p>\n\t\t\t\t<div class=\"input\">\n\t\t\t\t\t\t<input type=\"email\" placeholder=\"Phone Number or Email\" name=\"email\" formControlName=\"email\" >\n\t\t\t\t\t\t<span class=\"fa fa-envelope\"></span>\n\t\t\t\t\t\t\n            \t\t\t <div *ngIf=\"isSubmitted && authForm.controls.email.errors\" class=\"error\">\n\t\t\t\t\t\t   <div *ngIf=\"authForm.controls.email.errors.required\">Email is required</div>\n\t\t\t\t\t\t   <div *ngIf=\"authForm.controls.email.errors.pattern\">Valid Email is required</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"input\">\n\t\t\t\t\t\t<input type=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\" required>\n\t\t\t\t\t\t<span class=\"fa fa-unlock\"></span>\n             \t\t\t<div *ngIf=\"isSubmitted && authForm.controls.password.errors\" class=\"error\">\n          \t\t\t\t<div *ngIf=\"authForm.controls.password.errors.required\">Password is required</div>\n        \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"bottom-text \">\n\t\t\t\t  <a routerLink=\"/forgot-password\">Forgot Password?</a>\n\t\t\t\t</div>\n\t\t\t\t\t\n            \t<div class=\"button-group\" >\n\t\t\t\t  <button type=\"submit\" class=\"login-button\">Login</button>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"invalidLogin\" class=\"error\">\n\t\t\t\t\tInvalid credentials\n\t\t\t\t</div>\n                  <div class=\"otp-text \">\n\t\t\t\t\t  <a href=\"#\" >Login With OTP</a>\n\t\t\t\t </div> \n\t\t\t</form>\t\n\t\t</div>\n\t</div>\n\t\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>User Registration</h3>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onFormSubmit()\">\n<div class=\"form-group\">\n<label for=\"firstName\">First Name</label>\n<input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.firstName.errors }\" placeholder=\"Enter First Name here\"/>\n<div *ngIf=\"submitted && fval.firstName.errors\" class=\"invalid-feedback\">\n<div *ngIf=\"fval.firstName.errors.required\">First Name is required</div>\n</div>\n</div>\n \n<div class=\"form-group\">\n<label for=\"lastName\">Last Name</label>\n<input type=\"text\" formControlName=\"lastName\" class=\"form-control\" placeholder=\"Enter Last Name here\"/>\n</div>\n<div class=\"form-group\">\n<label for=\"email\">Email</label>\n<input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.email.errors }\" placeholder=\"Enter email here\"/>\n<div *ngIf=\"submitted && fval.email.errors\" class=\"invalid-feedback\">\n<div *ngIf=\"fval.email.errors.required\">Email is required</div>\n<div *ngIf=\"fval.email.errors.email\">Enter valid email address</div>\n</div>\n</div>\n<div class=\"form-group\">\n<label for=\"email\">Phone</label>\n<input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.phone.errors }\" placeholder=\"Enter Phone here\"/>\n<div *ngIf=\"submitted && fval.phone.errors\" class=\"invalid-feedback\">\n<div *ngIf=\"fval.phone.errors.required\">Phone is required</div>\n</div>\n</div>\n \n<div class=\"form-group\">\n<label for=\"email\">Password</label>\n<input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.password.errors }\" placeholder=\"Enter Password here\"/>\n<div *ngIf=\"submitted && fval.password.errors\" class=\"invalid-feedback\">\n<div *ngIf=\"fval.password.errors.required\">Password is required</div>\n<div *ngIf=\"fval.password.errors.minlength\">Password must be at least 6 characters</div>\n</div>\n \n</div>\n \n<div class=\"form-group\">\n<button [disabled]=\"loading\" class=\"btn btn-primary\">\n<span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\nRegister\n</button>\n<a routerLink=\"/login\" class=\"btn btn-link\">Login to continue</a>\n</div>\n</form>\n ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/admin.component.css":
  /*!*******************************************!*\
    !*** ./src/app/admin/admin.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(authService, router) {
        _classCallCheck(this, AdminComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigateByUrl('/login');
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/admin/admin.component.css"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _mark_attendance_mark_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mark-attendance/mark-attendance.component */
    "./src/app/mark-attendance/mark-attendance.component.ts");
    /* harmony import */


    var _mark_attendance_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mark-attendance/schedule/schedule.component */
    "./src/app/mark-attendance/schedule/schedule.component.ts");
    /* harmony import */


    var _mark_attendance_apply_leave_apply_leave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mark-attendance/apply-leave/apply-leave.component */
    "./src/app/mark-attendance/apply-leave/apply-leave.component.ts");
    /* harmony import */


    var _mark_attendance_log_info_log_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mark-attendance/log-info/log-info.component */
    "./src/app/mark-attendance/log-info/log-info.component.ts");
    /* harmony import */


    var _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/forgot-password/forgot-password.component */
    "./src/app/auth/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _modules_shared_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modules/shared/login/login.component */
    "./src/app/modules/shared/login/login.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    }, {
      path: 'login',
      component: _modules_shared_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: 'mark-attendance',
      component: _mark_attendance_mark_attendance_component__WEBPACK_IMPORTED_MODULE_3__["MarkAttendanceComponent"]
    }, {
      path: 'schedule',
      component: _mark_attendance_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleComponent"]
    }, {
      path: 'leave',
      component: _mark_attendance_apply_leave_apply_leave_component__WEBPACK_IMPORTED_MODULE_5__["ApplyLeaveComponent"]
    }, {
      path: 'log',
      component: _mark_attendance_log_info_log_info_component__WEBPACK_IMPORTED_MODULE_6__["LogInfoComponent"]
    }, {
      path: 'forgot-password',
      component: _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'SquadMobileUI';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _mark_attendance_mark_attendance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./mark-attendance/mark-attendance.component */
    "./src/app/mark-attendance/mark-attendance.component.ts");
    /* harmony import */


    var _mark_attendance_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./mark-attendance/schedule/schedule.component */
    "./src/app/mark-attendance/schedule/schedule.component.ts");
    /* harmony import */


    var _mark_attendance_apply_leave_apply_leave_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./mark-attendance/apply-leave/apply-leave.component */
    "./src/app/mark-attendance/apply-leave/apply-leave.component.ts");
    /* harmony import */


    var _mark_attendance_log_info_log_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./mark-attendance/log-info/log-info.component */
    "./src/app/mark-attendance/log-info/log-info.component.ts");
    /* harmony import */


    var _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/forgot-password/forgot-password.component */
    "./src/app/auth/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _modules_shared_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modules/shared/login/login.component */
    "./src/app/modules/shared/login/login.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _modules_shared_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], _mark_attendance_mark_attendance_component__WEBPACK_IMPORTED_MODULE_9__["MarkAttendanceComponent"], _mark_attendance_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"], _mark_attendance_apply_leave_apply_leave_component__WEBPACK_IMPORTED_MODULE_11__["ApplyLeaveComponent"], _mark_attendance_log_info_log_info_component__WEBPACK_IMPORTED_MODULE_12__["LogInfoComponent"], _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/forgot-password/forgot-password.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/auth/forgot-password/forgot-password.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-content-w3pvt {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    /* background: #fff; */\r\n    text-align: center;\r\n}\r\n\r\n.top-content-style {\r\n    padding: 4vw 4vw 4vw;\r\n    background-image:url('/../assets/tmp_1590038719584.jpg');\r\n    width: -webkit-fill-available;\r\n    padding: 8em 4em 5em;\r\n    border-bottom-left-radius: 70px 25px;\r\n    border-bottom-right-radius: 70px 25px;\r\n       \r\n  }\r\n\r\n.top-content-style p  {\r\n  \r\n    margin-bottom:50px;\r\n}\r\n\r\n.top-content-style h3{\r\n     margin-bottom:90px;\r\n     font-weight: 600;\r\n}\r\n\r\n.sub-main-w3 form {\r\n    background: #ffff;\r\n    padding: 1em;\r\n    box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\r\n     margin: -5.5em 1em 2em;\r\n    border-radius: 10px;\r\n}\r\n\r\np.legend {\r\n    color: #4e4d4d;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin-bottom: 1.2em;\r\n}\r\n\r\np.legend span {\r\n    color: #000;\r\n    margin-left: 10px;\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    margin: 20px auto;\r\n    width: 100%\r\n}\r\n\r\n.input span {\r\n    position: absolute;\r\n    display: block;\r\n    color: #ff5545;\r\n    right: 10px;\r\n    top: 12px;\r\n    font-size: 16px;\r\n    border-bottom-right-radius:20px\r\n}\r\n\r\ninput[type=email], input[type=password]  {\r\n    width: 100%;\r\n    padding: 15px 10px 13px 12px;\r\n    display: block;\r\n    border: none;\r\n    border: 0.5px solid #000000;\r\n    color: #000;\r\n    box-sizing: border-box;\r\n    font-size: 11px;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n   \r\n}\r\n\r\n.reset {\r\n    margin-top: 20px;\r\n    padding: 10px 0;\r\n    background-image:  linear-gradient(-90deg, #ff5545 , #fc6926);\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    /* border: 1px solid #5F47B6; */\r\n    font-weight: 400;\r\n    width: 100%;\r\n    border: none;\r\n    position: relative;\r\n    margin-bottom: 2em;\r\n    cursor: pointer;\r\n}\r\n\r\n.error{\r\n    font-size: 11px;\r\n    color:red;\r\n    text-align: left;\r\n    font-weight: 600;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsd0RBQXdEO0lBQ3hELDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHFDQUFxQzs7RUFFdkM7O0FBRUY7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUNBO0tBQ0ssa0JBQWtCO0tBQ2xCLGdCQUFnQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbURBQW1EO0tBQ2xELHNCQUFzQjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZEQUE2RDtJQUM3RCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb250ZW50LXczcHZ0IHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3AtY29udGVudC1zdHlsZSB7XHJcbiAgICBwYWRkaW5nOiA0dncgNHZ3IDR2dztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvLi4vYXNzZXRzL3RtcF8xNTkwMDM4NzE5NTg0LmpwZycpO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBwYWRkaW5nOiA4ZW0gNGVtIDVlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHggMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4IDI1cHg7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG4udG9wLWNvbnRlbnQtc3R5bGUgcCAge1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG59XHJcbi50b3AtY29udGVudC1zdHlsZSBoM3tcclxuICAgICBtYXJnaW4tYm90dG9tOjkwcHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc3ViLW1haW4tdzMgZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTZweCAycHggcmdiYSgxNiwgMTYsIDE2LCAwLjE4KTtcclxuICAgICBtYXJnaW46IC01LjVlbSAxZW0gMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxucC5sZWdlbmQge1xyXG4gICAgY29sb3I6ICM0ZTRkNGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxufVxyXG5cclxucC5sZWdlbmQgc3BhbiB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4uaW5wdXQgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmY1NTQ1O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyMHB4XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTNweCAxMnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgXHJcbn1cclxuXHJcbi5yZXNldCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICNmZjU1NDUgLCAjZmM2OTI2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzVGNDdCNjsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppAuthForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(fb, router) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.fb = fb;
        this.router = router;
        this.isSubmitted = false;
        this.invalidLogin = false;
        this.success = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
          }); //   this.forgotPasswordFormErrors = {
          //     email: 'gayatri@gmail.com'
          // }
        }
      }, {
        key: "logIn",
        value: function logIn() {
          this.isSubmitted = true;

          if (this.forgotPasswordForm.invalid) {
            return;
          }

          if (this.forgotPasswordForm.controls.email.value == 'gayatri@gmail.com') {
            // this.authService.logIn(this.authForm.value);
            this.success = true; // this.router.navigate(['mark-attendance']);
          } else {
            this.invalidLogin = true;
          }
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/auth/forgot-password/forgot-password.component.css"))["default"]]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService() {
        _classCallCheck(this, AuthenticationService);
      }

      _createClass(AuthenticationService, [{
        key: "signIn",
        value: function signIn(userData) {
          localStorage.setItem('ACCESS_TOKEN', "access_token");
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return localStorage.getItem('ACCESS_TOKEN') !== null;
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('ACCESS_TOKEN');
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/mark-attendance/apply-leave/apply-leave.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/mark-attendance/apply-leave/apply-leave.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMarkAttendanceApplyLeaveApplyLeaveComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-content-w3pvt {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    /* background: #fff; */\r\n    text-align: center;\r\n}\r\n\r\n.main {\r\n   background: #7bc7f3;\r\n     width: -webkit-fill-available;\r\n     position: relative;\r\n     color: #ffffff;\r\n    \r\n}\r\n\r\nform {\r\n    background: #ffff;\r\n    padding: 1em;\r\n   height: 350px;\r\n    box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\r\n    border-radius: 10px;\r\n    margin:-5em -1em auto;\r\n}\r\n\r\ninput[type=text],textarea{\r\n    background:#f1efefcc;\r\n}\r\n\r\n.top-content-style .pull-left>span  {\r\n  display: inline;\r\n   position:absolute;\r\n   top:30px;\r\n   left:5px;\r\n}\r\n\r\n.top-content-style #home  {\r\n     position:absolute;\r\n     top:30px;\r\n     left: 45%;\r\n  }\r\n\r\n.top-content-style .pull-right>span  {\r\n    display: inline;\r\n     position:absolute;\r\n     top:30px;\r\n     right:5px;\r\n  }\r\n\r\n.main {\r\n        padding: 12em 2em 0em;\r\n        height: 5vh;\r\n        border-bottom-left-radius: 70px 25px;\r\n        border-bottom-right-radius: 70px 25px;\r\n    }\r\n\r\n.main-w3 form {\r\n    background: #ffff;\r\n    padding: 1em;\r\n    box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\r\n     margin: -8.5em 1em 2em;\r\n    border-radius: 10px;\r\n}\r\n\r\ninput[type=text],textarea{\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #f1efefcc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n   \r\n}\r\n\r\ninput[type=submit] {\r\n    background-color:#7bc7f3;\r\n    color: white;\r\n    padding: 12px 28px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    float: right;\r\n  }\r\n\r\ntextarea {\r\n   height:120px;\r\n   \r\n}\r\n\r\n/* media screens */\r\n\r\n@media(min-width:800px){\r\n  form {\r\nwidth: 500px;\r\nmargin: 0 auto;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyay1hdHRlbmRhbmNlL2FwcGx5LWxlYXZlL2FwcGx5LWxlYXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7R0FDRyxtQkFBbUI7S0FDakIsNkJBQTZCO0tBQzdCLGtCQUFrQjtLQUNsQixjQUFjOztBQUVuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0dBQ2IsYUFBYTtJQUNaLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVDO0VBQ0MsZUFBZTtHQUNkLGlCQUFpQjtHQUNqQixRQUFRO0dBQ1IsUUFBUTtBQUNYOztBQUNBO0tBQ0ssaUJBQWlCO0tBQ2pCLFFBQVE7S0FDUixTQUFTO0VBQ1o7O0FBQ0E7SUFDRSxlQUFlO0tBQ2QsaUJBQWlCO0tBQ2pCLFFBQVE7S0FDUixTQUFTO0VBQ1o7O0FBRUU7UUFDSSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLG9DQUFvQztRQUNwQyxxQ0FBcUM7SUFDekM7O0FBQ0Y7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1EQUFtRDtLQUNsRCxzQkFBc0I7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsc0JBQXNCOztBQUUxQjs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0FBRUY7R0FDRyxZQUFZOztBQUVmOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtBQUNGLFlBQVk7QUFDWixjQUFjO0FBQ2Q7QUFDQSIsImZpbGUiOiJzcmMvYXBwL21hcmstYXR0ZW5kYW5jZS9hcHBseS1sZWF2ZS9hcHBseS1sZWF2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbnRlbnQtdzNwdnQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLyogYmFja2dyb3VuZDogI2ZmZjsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICBiYWNrZ3JvdW5kOiAjN2JjN2YzO1xyXG4gICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIFxyXG59XHJcbiAgIFxyXG5mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDVweCAxNnB4IDJweCByZ2JhKDE2LCAxNiwgMTYsIDAuMTgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjotNWVtIC0xZW0gYXV0bztcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLHRleHRhcmVhe1xyXG4gICAgYmFja2dyb3VuZDojZjFlZmVmY2M7XHJcbn1cclxuXHJcbiAudG9wLWNvbnRlbnQtc3R5bGUgLnB1bGwtbGVmdD5zcGFuICB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgdG9wOjMwcHg7XHJcbiAgIGxlZnQ6NXB4O1xyXG59XHJcbi50b3AtY29udGVudC1zdHlsZSAjaG9tZSAge1xyXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgIHRvcDozMHB4O1xyXG4gICAgIGxlZnQ6IDQ1JTtcclxuICB9XHJcbiAgLnRvcC1jb250ZW50LXN0eWxlIC5wdWxsLXJpZ2h0PnNwYW4gIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICB0b3A6MzBweDtcclxuICAgICByaWdodDo1cHg7XHJcbiAgfSBcclxuXHJcbiAgICAubWFpbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTJlbSAyZW0gMGVtO1xyXG4gICAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHggMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzBweCAyNXB4O1xyXG4gICAgfVxyXG4gIC5tYWluLXczIGZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDE2cHggMnB4IHJnYmEoMTYsIDE2LCAxNiwgMC4xOCk7XHJcbiAgICAgbWFyZ2luOiAtOC41ZW0gMWVtIDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFlZmVmY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBcclxufVxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojN2JjN2YzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTJweCAyOHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbnRleHRhcmVhIHtcclxuICAgaGVpZ2h0OjEyMHB4O1xyXG4gICBcclxufVxyXG5cclxuLyogbWVkaWEgc2NyZWVucyAqL1xyXG5AbWVkaWEobWluLXdpZHRoOjgwMHB4KXtcclxuICBmb3JtIHtcclxud2lkdGg6IDUwMHB4O1xyXG5tYXJnaW46IDAgYXV0bztcclxufVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/mark-attendance/apply-leave/apply-leave.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/mark-attendance/apply-leave/apply-leave.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ApplyLeaveComponent */

  /***/
  function srcAppMarkAttendanceApplyLeaveApplyLeaveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyLeaveComponent", function () {
      return ApplyLeaveComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApplyLeaveComponent = /*#__PURE__*/function () {
      function ApplyLeaveComponent() {
        _classCallCheck(this, ApplyLeaveComponent);
      }

      _createClass(ApplyLeaveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplyLeaveComponent;
    }();

    ApplyLeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apply-leave',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./apply-leave.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/apply-leave/apply-leave.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./apply-leave.component.css */
      "./src/app/mark-attendance/apply-leave/apply-leave.component.css"))["default"]]
    })], ApplyLeaveComponent);
    /***/
  },

  /***/
  "./src/app/mark-attendance/log-info/log-info.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/mark-attendance/log-info/log-info.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMarkAttendanceLogInfoLogInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\r\n   background: #7bc7f3;\r\n     width: -webkit-fill-available;\r\n     position: relative;\r\n     color: #ffffff;\r\n    \r\n}\r\n\r\n .top-content-style .pull-left>span  {\r\n  display: inline;\r\n   position:absolute;\r\n   top:30px;\r\n   left:5px;\r\n}\r\n\r\n .top-content-style #home  {\r\n     position:absolute;\r\n     top:30px;\r\n     left: 40%;\r\n  }\r\n\r\n .top-content-style .pull-right>span  {\r\n    display: inline;\r\n     position:absolute;\r\n     top:30px;\r\n     right:5px;\r\n  }\r\n\r\n .main {\r\n        padding: 12em 2em 0em;\r\n        height: 5vh;\r\n        border-bottom-left-radius: 70px 25px;\r\n        border-bottom-right-radius: 70px 25px;\r\n    }\r\n\r\n /* table responsive */\r\n\r\n table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n\r\n  }\r\n\r\n th, td {\r\n    text-align:center;\r\n    padding: 8px;\r\n    color:#ffffff;\r\n    font-size:12px;\r\n    font-weight:100\r\n  }\r\n\r\n td{\r\n      color:black;\r\n  }\r\n\r\n /*   \r\n  tr:nth-child(even){background-color: #f2f2f2} */\r\n\r\n .main {\r\n    /* padding: 18vw 4vw 18vw; */\r\n   background:#09ca889e;\r\n     width: -webkit-fill-available;\r\n     position: relative;\r\n     color: #ffffff;\r\n    \r\n}\r\n\r\n .main .card {\r\n    background: #ffff;\r\n    box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\r\n    margin: -4em -1em 0em;\r\n    border-radius: 10px;\r\n    position: relative;\r\n}\r\n\r\n .card-body span,p{\r\n    text-align: left;\r\n    font-weight: 600;\r\n    color: #a018a9;;\r\n    font-size:10px;\r\n    padding: 18px 0px;\r\n    font-weight: 800;\r\n}\r\n\r\n /* .card-body p{\r\n    text-align: center;\r\n    font-size: 10px;\r\n    display: block;\r\n    line-height: 15px;\r\n} */\r\n\r\n /* .box {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n} */\r\n\r\n .box select {\r\n background: none;\r\n  color: #a018a9;\r\n  padding: 2px;\r\n  width: 100px;\r\n  border-radius: 3px;\r\n  font-size: 11px;\r\n  /* box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);\r\n  -webkit-appearance: button; */\r\n  -webkit-appearance: button;\r\n     -moz-appearance: button;\r\n          appearance: button;\r\n  border:1px solid #a018a9;\r\n}\r\n\r\n .box:hover::before {\r\n  color: rgba(255, 255, 255, 0.6);\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n .box select option {\r\n  padding: 30px;\r\n}\r\n\r\n .group{\r\n  padding: 15px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyay1hdHRlbmRhbmNlL2xvZy1pbmZvL2xvZy1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxtQkFBbUI7S0FDakIsNkJBQTZCO0tBQzdCLGtCQUFrQjtLQUNsQixjQUFjOztBQUVuQjs7Q0FFQztFQUNDLGVBQWU7R0FDZCxpQkFBaUI7R0FDakIsUUFBUTtHQUNSLFFBQVE7QUFDWDs7Q0FDQTtLQUNLLGlCQUFpQjtLQUNqQixRQUFRO0tBQ1IsU0FBUztFQUNaOztDQUNBO0lBQ0UsZUFBZTtLQUNkLGlCQUFpQjtLQUNqQixRQUFRO0tBQ1IsU0FBUztFQUNaOztDQUVFO1FBQ0kscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxvQ0FBb0M7UUFDcEMscUNBQXFDO0lBQ3pDOztDQUVKLHFCQUFxQjs7Q0FDckI7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7O0VBRWI7O0NBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Q7RUFDRjs7Q0FDQTtNQUNJLFdBQVc7RUFDZjs7Q0FDRjtpREFDaUQ7O0NBQy9DO0lBQ0UsNEJBQTRCO0dBQzdCLG9CQUFvQjtLQUNsQiw2QkFBNkI7S0FDN0Isa0JBQWtCO0tBQ2xCLGNBQWM7O0FBRW5COztDQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7Q0FDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztDQUNBOzs7OztHQUtHOztDQUtIOzs7OztHQUtHOztDQUVIO0NBQ0MsZ0JBQWdCO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZjsrQkFDNkI7RUFDN0IsMEJBQWtCO0tBQWxCLHVCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztDQUdBO0VBQ0UsK0JBQStCO0VBQy9CLDBDQUEwQztBQUM1Qzs7Q0FFQTtFQUNFLGFBQWE7QUFDZjs7Q0FDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tYXJrLWF0dGVuZGFuY2UvbG9nLWluZm8vbG9nLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgYmFja2dyb3VuZDogIzdiYzdmMztcclxuICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBcclxufVxyXG5cclxuIC50b3AtY29udGVudC1zdHlsZSAucHVsbC1sZWZ0PnNwYW4gIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICB0b3A6MzBweDtcclxuICAgbGVmdDo1cHg7XHJcbn1cclxuLnRvcC1jb250ZW50LXN0eWxlICNob21lICB7XHJcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgdG9wOjMwcHg7XHJcbiAgICAgbGVmdDogNDAlO1xyXG4gIH1cclxuICAudG9wLWNvbnRlbnQtc3R5bGUgLnB1bGwtcmlnaHQ+c3BhbiAge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgIHRvcDozMHB4O1xyXG4gICAgIHJpZ2h0OjVweDtcclxuICB9IFxyXG5cclxuICAgIC5tYWluIHtcclxuICAgICAgICBwYWRkaW5nOiAxMmVtIDJlbSAwZW07XHJcbiAgICAgICAgaGVpZ2h0OiA1dmg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweCAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4IDI1cHg7XHJcbiAgICB9XHJcbiBcclxuLyogdGFibGUgcmVzcG9uc2l2ZSAqL1xyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OjEwMFxyXG4gIH1cclxuICB0ZHtcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4vKiAgIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyfSAqL1xyXG4gIC5tYWluIHtcclxuICAgIC8qIHBhZGRpbmc6IDE4dncgNHZ3IDE4dnc7ICovXHJcbiAgIGJhY2tncm91bmQ6IzA5Y2E4ODllO1xyXG4gICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIFxyXG59XHJcblxyXG4ubWFpbiAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTZweCAycHggcmdiYSgxNiwgMTYsIDE2LCAwLjE4KTtcclxuICAgIG1hcmdpbjogLTRlbSAtMWVtIDBlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQtYm9keSBzcGFuLHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjYTAxOGE5OztcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgcGFkZGluZzogMThweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi8qIC5jYXJkLWJvZHkgcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcbi8qIC5ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn0gKi9cclxuXHJcbi5ib3ggc2VsZWN0IHtcclxuIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6ICNhMDE4YTk7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAqL1xyXG4gIGFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICBib3JkZXI6MXB4IHNvbGlkICNhMDE4YTk7XHJcbn1cclxuXHJcblxyXG4uYm94OmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4uYm94IHNlbGVjdCBvcHRpb24ge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmdyb3Vwe1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/mark-attendance/log-info/log-info.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/mark-attendance/log-info/log-info.component.ts ***!
    \****************************************************************/

  /*! exports provided: LogInfoComponent */

  /***/
  function srcAppMarkAttendanceLogInfoLogInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInfoComponent", function () {
      return LogInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LogInfoComponent = /*#__PURE__*/function () {
      function LogInfoComponent() {
        _classCallCheck(this, LogInfoComponent);

        this.log = [{
          Date: '15-4-2020',
          punchIn: '9.15 am',
          punchOut: '6.15 pm'
        }, {
          Date: '16-4-2020',
          punchIn: '9.30 am',
          punchOut: '7.15 pm'
        }, {
          Date: '17-4-2020',
          punchIn: '9.30 am',
          punchOut: '6.30 pm'
        }, {
          Date: '15-4-2020',
          punchIn: '9.15 am',
          punchOut: '6.15 pm'
        }, {
          Date: '16-4-2020',
          punchIn: '9.30 am',
          punchOut: '7.15 pm'
        }, {
          Date: '17-4-2020',
          punchIn: '9.30 am',
          punchOut: '6.30 pm'
        }];
      }

      _createClass(LogInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.log;
        }
      }]);

      return LogInfoComponent;
    }();

    LogInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-log-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./log-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/log-info/log-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./log-info.component.css */
      "./src/app/mark-attendance/log-info/log-info.component.css"))["default"]]
    })], LogInfoComponent);
    /***/
  },

  /***/
  "./src/app/mark-attendance/mark-attendance.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/mark-attendance/mark-attendance.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMarkAttendanceMarkAttendanceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.bg-content-w3pvt {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    /* background: #fff; */\r\n    text-align: center;\r\n}\r\n\r\n.sub-main {\r\n    /* padding: 18vw 4vw 18vw; */\r\n   background: linear-gradient(#D16AF7, #f765f9);\r\n     width: -webkit-fill-available;\r\n     position: relative;\r\n     color: #ffffff;\r\n    \r\n}\r\n\r\n.top-content-style p  {\r\n  \r\n    margin-bottom:50px;\r\n}\r\n\r\n.top-content-style h3{\r\n     margin-bottom:90px;\r\n     font-weight: 600;\r\n}\r\n\r\n.sub-main .card {\r\n    background: #ffff;\r\n    box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\r\n    margin: -5.5em -2em 0em;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    padding: 15px 0;\r\n}\r\n\r\n.top-content-style .pull-left>span  {\r\n   display: inline;\r\n   position:absolute;\r\n   top:30px;\r\n   left:5px;\r\n}\r\n\r\n.top-content-style #home  {\r\n     position:absolute;\r\n     top:30px;\r\n     left: 45%;\r\n  }\r\n\r\n.top-content-style .pull-right>span  {\r\n    display: inline;\r\n     position:absolute;\r\n     top:30px;\r\n     right:5px;\r\n  }\r\n\r\n.card-body h4{\r\n    text-align: left;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    \r\n}\r\n\r\n.card-body{\r\n    cursor: pointer;\r\n}\r\n\r\n.card-body p{\r\n    text-align:left;\r\n    font-size: 11px;\r\n    max-width: 160px;\r\n    line-height: 18px;\r\n  \r\n}\r\n\r\np,h4,h5{\r\n    color: #eb14c7d0;\r\n}\r\n\r\na{\r\n    color:#ffffff;\r\n}\r\n\r\n.sub-main {\r\n    padding: 12em 3em 0em;\r\n    height: 5vh;\r\n    border-bottom-left-radius: 100px 50px;\r\n    border-bottom-right-radius: 100px 50px;\r\n}\r\n\r\n.attendance{\r\n    font-size: 10px;\r\n    margin: 2em -2em 2em;\r\n    letter-spacing: 1px;\r\n    font-weight: 600;\r\n}\r\n\r\n.attendance h5{\r\n    display: flex;\r\n  \r\n}\r\n\r\n.card-container h5{\r\n    display: flex;\r\n    margin-bottom: 0;\r\n    font-size:12px;\r\n    font-weight: 600;\r\n}\r\n\r\n/* Media screens*/\r\n\r\n@media(min-width:1280px) {\r\n   .sub-main{\r\n       width: 300px;\r\n       margin: 0 auto;\r\n   }\r\n}\r\n\r\n@media(max-width:991px) {\r\n    h1 {\r\n        font-size: 4vw;\r\n    }\r\n\r\n}\r\n\r\n@media(max-width:800px) {\r\n    h1 {\r\n        font-size: 5vw;\r\n        padding: 2.5vw 1vw 3vw;  \r\n    }\r\n .main-bg{\r\n     width:100%;\r\n    border-bottom-left-radius: 65px;\r\n    border-bottom-right-radius: 65px;\r\n}\r\n\r\n    \r\n}\r\n\r\n@media(max-width:340px) {\r\n    h1 {\r\n        font-size: 6vw;\r\n        padding: 3vw 1vw 4vw;\r\n    }\r\n    .main-bg{\r\n        width: 100%;\r\n        border-bottom-left-radius: 65px;\r\n        border-bottom-right-radius: 65px;\r\n    }\r\n    .switch{\r\n        width:200px;\r\n    }\r\n}\r\n\r\n@media(max-width:312px) {\r\n    h1 {\r\n        font-size: 2em;\r\n        letter-spacing: 1px;\r\n    }\r\n    .main-bg{\r\n        border-bottom-left-radius: 65px;\r\n        border-bottom-right-radius: 65px;\r\n      width: 100%;\r\n      position: absolute;\r\n    }\r\n    .bg-content-w3pvt{\r\n        max-width: 300px;\r\n    }\r\n    p.legend {\r\n        font-size: 12px;\r\n    }\r\n\r\n    a.bottom-text-w3ls {\r\n        font-size: 15px;\r\n    }\r\n    .switch{\r\n        width:100px;\r\n    }\r\n}\r\n\r\n@media(min-width:480px) {\r\n    h1 {\r\n        font-size: 2em;\r\n        letter-spacing:1px;\r\n    }\r\n    .main-bg{\r\n        border-bottom-left-radius: 65px;\r\n        border-bottom-right-radius: 65px;\r\n      width: 100%;\r\n      position: absolute;\r\n    }\r\n  \r\n    p.legend {\r\n        font-size: 12px;\r\n    }\r\n\r\n    a.bottom-text-w3ls {\r\n        font-size: 15px;\r\n    }\r\n   \r\n}\r\n\r\n/* Punch container */\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 34px;\r\n  }\r\n\r\n.switch input {display:none;}\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    top: 0;\r\n    left: 0px;\r\n    right: 0px;\r\n    height: 4em;\r\n    bottom: 0;\r\n    background-color: #cac3c3;\r\n    transition: .4s;\r\n  }\r\n\r\n.slider:after {\r\n    position: absolute;\r\n    left: -25px;\r\n    z-index: 1;\r\n    content: \"\";\r\n    font-size: 15px;\r\n    text-align: left !important;\r\n    border: 1px solid #ffffff;\r\n    line-height: 50px;\r\n    width: 240px;\r\n    color: #fff;\r\n    height: 2.7em;\r\n    border-radius: 100px;\r\n    background: linear-gradient(to left,#D16AF7, #f765f9);\r\n    transform: translateX(225px);\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\ninput:checked + .slider:after {\r\n    transform: translateX(23px);\r\n  }\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n\r\n.slider.round:before {\r\n    border-radius: 34px;\r\n  }\r\n\r\n.punch-out {\r\n     \r\n      position: absolute;\r\n      left: 0;\r\n      color: #ffffff;\r\n      text-align: right !important;\r\n      font-size: 15px;\r\n      width: calc(100% - 20px);\r\n      height: 45px;\r\n      line-height: 45px;\r\n      cursor: pointer;\r\n      z-index: 5;\r\n      font-weight: 100;\r\n  }\r\n\r\n.punch-in {\r\n     \r\n    position: absolute;\r\n    left: 0;\r\n    color: #ffffff;\r\n    text-align: right !important;\r\n    font-size: 15px;\r\n    width: calc(30% - -20px);\r\n    height: 45px;\r\n    line-height: 45px;\r\n    cursor: pointer;\r\n    z-index: 5;\r\n    font-weight: 100;\r\n}\r\n\r\n.punch-in>.fa{\r\n    margin-left: 15px;\r\n}\r\n\r\n.punch-out>.fa{\r\n    margin-left: 15px;\r\n}\r\n\r\n.logIn-text,.logOut-text{\r\n    margin-top: 15px;\r\n}\r\n\r\n/* extra small devices */\r\n\r\n@media only screen and (max-width: 300px){\r\n    .attendance{\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    }\r\n    .switch {\r\n        height: 4em;\r\n          }\r\n    .slider:after {\r\n   \r\n    z-index: 1;\r\n    content: \"\";\r\n    font-size: 10px;\r\n    text-align: left !important;\r\n    border: 1px solid #ffffff;\r\n    line-height: 50px;\r\n    color: #ffffff;\r\n    width: 100px;\r\n    height: 4em;\r\n    border-radius: 100px;\r\n    transform: translateX(120px);\r\n    transition: all 0.4s ease-in-out;\r\n    }\r\n    .punch-out {  \r\n    color: #ffffff;\r\n    text-align: right !important;\r\n    font-size: 11px;\r\n    margin-left: 10px;\r\n    width: calc(100% - 13px);\r\n    line-height: 47px;\r\n    cursor: pointer;\r\n    z-index: 5;\r\n    font-weight: 100;\r\n    }\r\n    .punch-in {\r\n      \r\n      left: 10px;\r\n      top:0px;\r\n      color: #ffffff;\r\n      font-size: 11px;\r\n      width: calc(30% - -20px);\r\n      line-height: 47px;\r\n      cursor: pointer;\r\n      z-index: 5;\r\n      font-weight: 100;\r\n  }\r\n  .punch-in>.fa{\r\n      margin-left: 15px;\r\n  }\r\n  .punch-out>.fa{\r\n      margin-left: 15px;\r\n  }\r\n  \r\n}\r\n\r\n.cards {\r\n    background: #ffff;\r\n    margin:10px 5px;\r\n    box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\r\n    border-radius:5px;\r\n  }\r\n\r\n.cards-body{\r\n    padding: 11px 0px;\r\n    font-size: 12px;\r\n}\r\n\r\n/* For small Devices */\r\n\r\n@media only screen and (max-width: 480px) and (min-width:320px) {\r\n    .switch {\r\n    width: 100%;\r\n    height: 4em;\r\n      }\r\n      \r\n      .switch input {display:none;}\r\n      \r\n      .slider {\r\n        position: absolute;\r\n        cursor: pointer;\r\n        overflow: hidden;\r\n        top: 0;\r\n        left: 0px;\r\n        right: 0px;\r\n        height:4em;\r\n        bottom: 0;\r\n        background-color: #cac3c3;\r\n        transition: .4s;\r\n      }\r\n      \r\n   \r\n      .slider:after {\r\n        position: absolute;\r\n        left: -25px;\r\n        z-index: 1;\r\n        content: \"\";\r\n          text-align: left !important;\r\n          border: 1px solid #ffffff;\r\n          line-height: 50px;\r\n          width: 150px;\r\n          color: #fff;\r\n          height: 2.7em;\r\n          border-radius: 100px;\r\n          transform: translateX(175px);\r\n          transition: all 0.4s ease-in-out;\r\n      }\r\n      \r\n     \r\n    input:checked + .slider:after {\r\n        transform: translateX(23px);\r\n      }\r\n      \r\n      /* Rounded sliders */\r\n      .slider.round {\r\n        border-radius: 34px;\r\n      }\r\n      \r\n      .slider.round:before {\r\n        border-radius: 34px;\r\n      }\r\n      .punch-out {\r\n         \r\n          position: absolute;\r\n          left: 0;\r\n          color: #ffffff;\r\n          text-align: right !important;\r\n          font-size: 14px;\r\n          width: calc(100% - 13px);\r\n          height: 3em;\r\n          line-height: 45px;\r\n          cursor: pointer;\r\n          z-index: 5;\r\n          font-weight: 100;\r\n      }\r\n      .punch-in {\r\n         \r\n        position: absolute;\r\n        left: 0;\r\n        color: #ffffff;\r\n        text-align: right !important;\r\n        font-size: 14px;\r\n        width: calc(30% - -32px);\r\n        height: 4em;\r\n        line-height: 45px;\r\n        cursor: pointer;\r\n        z-index: 5;\r\n        font-weight: 100;\r\n    }\r\n    .punch-in>.fa{\r\n        margin-left: 15px;\r\n    }\r\n    .punch-out>.fa{\r\n        margin-left: 15px;\r\n    }\r\n   }\r\n\r\n@media only screen and (max-width: 600px){\r\n    .switch {\r\n    width:100%;\r\n    height: 4em;\r\n      }\r\n      \r\n      .switch input {display:none;}\r\n      \r\n      .slider {\r\n        position: absolute;\r\n        cursor: pointer;\r\n        overflow: hidden;\r\n        top: 0;\r\n        left: 0px;\r\n        right: 0px;\r\n        height:4em;\r\n        bottom: 0;\r\n        background-color: #cac3c3;\r\n        transition: .4s;\r\n      }\r\n      .slider:after {\r\n        position: absolute;\r\n        left: -25px;\r\n        z-index: 1;\r\n        content: \"\";\r\n          text-align: left !important;\r\n          border: 1px solid #ffffff;\r\n          line-height: 50px;\r\n          width: 180px;\r\n          color: #fff;\r\n          height: 2.6em;\r\n          border-radius: 100px;\r\n          transform: translateX(180px);\r\n          transition: all 0.4s ease-in-out;\r\n      }\r\n      \r\n     \r\n    input:checked + .slider:after {\r\n        transform: translateX(23px);\r\n      }\r\n      \r\n      /* Rounded sliders */\r\n      .slider.round {\r\n        border-radius: 34px;\r\n      }\r\n      \r\n      .slider.round:before {\r\n        border-radius: 34px;\r\n      }\r\n      .punch-out {\r\n         \r\n          position: absolute;\r\n          left: 0;\r\n          color: #ffffff;\r\n          text-align: right !important;\r\n          font-size: 16px;\r\n          width: calc(100% - 20px);\r\n          height: 3em;\r\n          line-height: 45px;\r\n          cursor: pointer;\r\n          z-index: 5;\r\n          font-weight: 100;\r\n      }\r\n      .punch-in {\r\n         \r\n        position: absolute;\r\n        left: 0;\r\n        color: #ffffff;\r\n        text-align: right !important;\r\n        font-size: 16px;\r\n        width: calc(30% - -32px);\r\n        height: 4em;\r\n        line-height: 45px;\r\n        cursor: pointer;\r\n        z-index: 5;\r\n        font-weight: 100;\r\n    }\r\n    .punch-in>.fa{\r\n        margin-left: 15px;\r\n    }\r\n    .punch-out>.fa{\r\n        margin-left: 15px;\r\n    }\r\n    .cards {\r\n        background: #ffff;\r\n        margin:10px 5px;\r\n        box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\r\n        border-radius:5px;\r\n      }\r\n     .card-body i{\r\n    padding: 1em;\r\n    margin: 1em;\r\n     }\r\n     \r\n   }\r\n\r\n/* \r\n .card-body i{\r\npadding: 1em;\r\nmargin: 1em;\r\n } */\r\n\r\n.row {\r\n    flex-wrap:nowrap;\r\n    display: flex;\r\n    /* margin-right: -15px;\r\n    margin-left: -15px; */\r\n  }\r\n\r\n.col-sm-4{\r\n    position: relative;\r\n    width: 100%;\r\n    /* padding-left: 15px; */\r\n    /* padding-left:0px; */\r\n  }\r\n\r\n.col-md-12{\r\n    position: relative;\r\n    width: 100%;\r\n    /* padding-right: 15px; */\r\n    padding-left: 15px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyay1hdHRlbmRhbmNlL21hcmstYXR0ZW5kYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtHQUM3Qiw2Q0FBNkM7S0FDM0MsNkJBQTZCO0tBQzdCLGtCQUFrQjtLQUNsQixjQUFjOztBQUVuQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBQ0E7S0FDSyxrQkFBa0I7S0FDbEIsZ0JBQWdCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1EQUFtRDtJQUNuRCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVDO0dBQ0UsZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixRQUFRO0dBQ1IsUUFBUTtBQUNYOztBQUNBO0tBQ0ssaUJBQWlCO0tBQ2pCLFFBQVE7S0FDUixTQUFTO0VBQ1o7O0FBQ0E7SUFDRSxlQUFlO0tBQ2QsaUJBQWlCO0tBQ2pCLFFBQVE7S0FDUixTQUFTO0VBQ1o7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsc0NBQXNDO0FBQzFDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksYUFBYTs7QUFFakI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBR0EsaUJBQWlCOztBQUVqQjtHQUNHO09BQ0ksWUFBWTtPQUNaLGNBQWM7R0FDbEI7QUFDSDs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLHNCQUFzQjtJQUMxQjtDQUNIO0tBQ0ksVUFBVTtJQUNYLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7OztBQUdBOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2Qsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsK0JBQStCO1FBQy9CLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLCtCQUErQjtRQUMvQixnQ0FBZ0M7TUFDbEMsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLCtCQUErQjtRQUMvQixnQ0FBZ0M7TUFDbEMsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUlBLG9CQUFvQjs7QUFFcEI7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUEsZUFBZSxZQUFZLENBQUM7O0FBRTVCO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCx5QkFBeUI7SUFFekIsZUFBZTtFQUNqQjs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHFEQUFxRDtJQUNyRCw0QkFBNEI7SUFDNUIsZ0NBQWdDO0VBQ2xDOztBQUdGO0lBR0ksMkJBQTJCO0VBQzdCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBQ0E7O01BRUksa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxjQUFjO01BQ2QsNEJBQTRCO01BQzVCLGVBQWU7TUFDZix3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjs7QUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLHdCQUF3Qjs7QUFDeEI7SUFDSTtJQUNBLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO1VBQ1Q7SUFDTjs7SUFFQSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQztJQUNBO0lBQ0EsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7SUFDQTs7TUFFRSxVQUFVO01BQ1YsT0FBTztNQUNQLGNBQWM7TUFDZCxlQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCO0VBQ0E7TUFDSSxpQkFBaUI7RUFDckI7O0FBRUY7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1EQUFtRDtJQUNuRCxpQkFBaUI7RUFDbkI7O0FBQ0Q7SUFDRyxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFHQSxzQkFBc0I7O0FBQ3RCO0lBQ0k7SUFDQSxXQUFXO0lBQ1gsV0FBVztNQUNUOztNQUVBLGVBQWUsWUFBWSxDQUFDOztNQUU1QjtRQUNFLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLE1BQU07UUFDTixTQUFTO1FBQ1QsVUFBVTtRQUNWLFVBQVU7UUFDVixTQUFTO1FBQ1QseUJBQXlCO1FBRXpCLGVBQWU7TUFDakI7OztNQUdBO1FBQ0Usa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztVQUNULDJCQUEyQjtVQUMzQix5QkFBeUI7VUFDekIsaUJBQWlCO1VBQ2pCLFlBQVk7VUFDWixXQUFXO1VBQ1gsYUFBYTtVQUNiLG9CQUFvQjtVQUNwQiw0QkFBNEI7VUFDNUIsZ0NBQWdDO01BQ3BDOzs7SUFHRjtRQUdJLDJCQUEyQjtNQUM3Qjs7TUFFQSxvQkFBb0I7TUFDcEI7UUFDRSxtQkFBbUI7TUFDckI7O01BRUE7UUFDRSxtQkFBbUI7TUFDckI7TUFDQTs7VUFFSSxrQkFBa0I7VUFDbEIsT0FBTztVQUNQLGNBQWM7VUFDZCw0QkFBNEI7VUFDNUIsZUFBZTtVQUNmLHdCQUF3QjtVQUN4QixXQUFXO1VBQ1gsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixVQUFVO1VBQ1YsZ0JBQWdCO01BQ3BCO01BQ0E7O1FBRUUsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7R0FDRDs7QUFDQTtJQUNDO0lBQ0EsVUFBVTtJQUNWLFdBQVc7TUFDVDs7TUFFQSxlQUFlLFlBQVksQ0FBQzs7TUFFNUI7UUFDRSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixVQUFVO1FBQ1YsU0FBUztRQUNULHlCQUF5QjtRQUV6QixlQUFlO01BQ2pCO01BQ0E7UUFDRSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFVBQVU7UUFDVixXQUFXO1VBQ1QsMkJBQTJCO1VBQzNCLHlCQUF5QjtVQUN6QixpQkFBaUI7VUFDakIsWUFBWTtVQUNaLFdBQVc7VUFDWCxhQUFhO1VBQ2Isb0JBQW9CO1VBQ3BCLDRCQUE0QjtVQUM1QixnQ0FBZ0M7TUFDcEM7OztJQUdGO1FBR0ksMkJBQTJCO01BQzdCOztNQUVBLG9CQUFvQjtNQUNwQjtRQUNFLG1CQUFtQjtNQUNyQjs7TUFFQTtRQUNFLG1CQUFtQjtNQUNyQjtNQUNBOztVQUVJLGtCQUFrQjtVQUNsQixPQUFPO1VBQ1AsY0FBYztVQUNkLDRCQUE0QjtVQUM1QixlQUFlO1VBQ2Ysd0JBQXdCO1VBQ3hCLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsZUFBZTtVQUNmLFVBQVU7VUFDVixnQkFBZ0I7TUFDcEI7TUFDQTs7UUFFRSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIsZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixtREFBbUQ7UUFDbkQsaUJBQWlCO01BQ25CO0tBQ0Q7SUFDRCxZQUFZO0lBQ1osV0FBVztLQUNWOztHQUVGOztBQUNBOzs7O0lBSUM7O0FBQ0Y7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiO3lCQUNxQjtFQUN2Qjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21hcmstYXR0ZW5kYW5jZS9tYXJrLWF0dGVuZGFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmctY29udGVudC13M3B2dCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLW1haW4ge1xyXG4gICAgLyogcGFkZGluZzogMTh2dyA0dncgMTh2dzsgKi9cclxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNEMTZBRjcsICNmNzY1ZjkpO1xyXG4gICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIFxyXG59XHJcblxyXG4udG9wLWNvbnRlbnQtc3R5bGUgcCAge1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG59XHJcbi50b3AtY29udGVudC1zdHlsZSBoM3tcclxuICAgICBtYXJnaW4tYm90dG9tOjkwcHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnN1Yi1tYWluIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDVweCAxNnB4IDJweCByZ2JhKDE2LCAxNiwgMTYsIDAuMTgpO1xyXG4gICAgbWFyZ2luOiAtNS41ZW0gLTJlbSAwZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG4gLnRvcC1jb250ZW50LXN0eWxlIC5wdWxsLWxlZnQ+c3BhbiAge1xyXG4gICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICB0b3A6MzBweDtcclxuICAgbGVmdDo1cHg7XHJcbn1cclxuLnRvcC1jb250ZW50LXN0eWxlICNob21lICB7XHJcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgdG9wOjMwcHg7XHJcbiAgICAgbGVmdDogNDUlO1xyXG4gIH1cclxuICAudG9wLWNvbnRlbnQtc3R5bGUgLnB1bGwtcmlnaHQ+c3BhbiAge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgIHRvcDozMHB4O1xyXG4gICAgIHJpZ2h0OjVweDtcclxuICB9IFxyXG5cclxuLmNhcmQtYm9keSBoNHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZC1ib2R5IHB7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgXHJcbn1cclxucCxoNCxoNXtcclxuICAgIGNvbG9yOiAjZWIxNGM3ZDA7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcbi5zdWItbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxMmVtIDNlbSAwZW07XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHggNTBweDtcclxufVxyXG4uYXR0ZW5kYW5jZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbjogMmVtIC0yZW0gMmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmF0dGVuZGFuY2UgaDV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG59XHJcbi5jYXJkLWNvbnRhaW5lciBoNXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLyogTWVkaWEgc2NyZWVucyovXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEyODBweCkge1xyXG4gICAuc3ViLW1haW57XHJcbiAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk5MXB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjgwMHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMi41dncgMXZ3IDN2dzsgIFxyXG4gICAgfVxyXG4gLm1haW4tYmd7XHJcbiAgICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDY1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNjVweDtcclxufVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjM0MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICAgICAgcGFkZGluZzogM3Z3IDF2dyA0dnc7XHJcbiAgICB9XHJcbiAgICAubWFpbi1iZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2NXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2NXB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXRjaHtcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozMTJweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbi1iZ3tcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2NXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2NXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmJnLWNvbnRlbnQtdzNwdnR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIHAubGVnZW5kIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgYS5ib3R0b20tdGV4dC13M2xzIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc3dpdGNoe1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjQ4MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xyXG4gICAgfVxyXG4gICAgLm1haW4tYmd7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNjVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICBcclxuICAgIHAubGVnZW5kIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgYS5ib3R0b20tdGV4dC13M2xzIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcbi8qIFB1bmNoIGNvbnRhaW5lciAqL1xyXG5cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cclxuICBcclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjM2MzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgLnNsaWRlcjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMjVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDIuN2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwjRDE2QUY3LCAjZjc2NWY5KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMjVweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiBcclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzcHgpO1xyXG4gIH1cclxuICBcclxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIC5wdW5jaC1vdXQge1xyXG4gICAgIFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuICAucHVuY2gtaW4ge1xyXG4gICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiBjYWxjKDMwJSAtIC0yMHB4KTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuLnB1bmNoLWluPi5mYXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5wdW5jaC1vdXQ+LmZhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmxvZ0luLXRleHQsLmxvZ091dC10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLyogZXh0cmEgc21hbGwgZGV2aWNlcyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcclxuICAgIC5hdHRlbmRhbmNle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXRjaCB7XHJcbiAgICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAuc2xpZGVyOmFmdGVyIHtcclxuICAgXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIC5wdW5jaC1vdXQgeyAgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxM3B4KTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcbiAgICAucHVuY2gtaW4ge1xyXG4gICAgICBcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgdG9wOjBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgd2lkdGg6IGNhbGMoMzAlIC0gLTIwcHgpO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuICAucHVuY2gtaW4+LmZhe1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgLnB1bmNoLW91dD4uZmF7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICBcclxufVxyXG4uY2FyZHMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBtYXJnaW46MTBweCA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDE2cHggMnB4IHJnYmEoMTYsIDE2LCAxNiwgMC4xOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICB9XHJcbiAuY2FyZHMtYm9keXtcclxuICAgIHBhZGRpbmc6IDExcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4gXHJcbi8qIEZvciBzbWFsbCBEZXZpY2VzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIGFuZCAobWluLXdpZHRoOjMyMHB4KSB7XHJcbiAgICAuc3dpdGNoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XHJcbiAgICAgIFxyXG4gICAgICAuc2xpZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGhlaWdodDo0ZW07XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWMzYzM7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICBcclxuICAgICAgLnNsaWRlcjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0yNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyLjdlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3NXB4KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YWZ0ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzcHgpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuICAgICAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnB1bmNoLW91dCB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxM3B4KTtcclxuICAgICAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgfVxyXG4gICAgICAucHVuY2gtaW4ge1xyXG4gICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB3aWR0aDogY2FsYygzMCUgLSAtMzJweCk7XHJcbiAgICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICAgIC5wdW5jaC1pbj4uZmF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucHVuY2gtb3V0Pi5mYXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgfVxyXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5zd2l0Y2gge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxyXG4gICAgICBcclxuICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6NGVtO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjM2MzO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgfVxyXG4gICAgICAuc2xpZGVyOmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIuNmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTgwcHgpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgXHJcbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjphZnRlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjNweCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4gICAgICAuc2xpZGVyLnJvdW5kIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgICAgfVxyXG4gICAgICAucHVuY2gtb3V0IHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5wdW5jaC1pbiB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDMwJSAtIC0zMnB4KTtcclxuICAgICAgICBoZWlnaHQ6IDRlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgLnB1bmNoLWluPi5mYXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIC5wdW5jaC1vdXQ+LmZhe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmRzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgICAgICBtYXJnaW46MTBweCA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDVweCAxNnB4IDJweCByZ2JhKDE2LCAxNiwgMTYsIDAuMTgpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICB9XHJcbiAgICAgLmNhcmQtYm9keSBpe1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICB9XHJcbiAgIC8qIFxyXG4gLmNhcmQtYm9keSBpe1xyXG5wYWRkaW5nOiAxZW07XHJcbm1hcmdpbjogMWVtO1xyXG4gfSAqL1xyXG4gIC5yb3cge1xyXG4gICAgZmxleC13cmFwOm5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4OyAqL1xyXG4gIH1cclxuICAuY29sLXNtLTR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMTVweDsgKi9cclxuICAgIC8qIHBhZGRpbmctbGVmdDowcHg7ICovXHJcbiAgfVxyXG4gIC5jb2wtbWQtMTJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDE1cHg7ICovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mark-attendance/mark-attendance.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/mark-attendance/mark-attendance.component.ts ***!
    \**************************************************************/

  /*! exports provided: MarkAttendanceComponent */

  /***/
  function srcAppMarkAttendanceMarkAttendanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkAttendanceComponent", function () {
      return MarkAttendanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_fake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/fake.service */
    "./src/app/services/fake.service.ts");

    var MarkAttendanceComponent = /*#__PURE__*/function () {
      function MarkAttendanceComponent(router, fakeService) {
        _classCallCheck(this, MarkAttendanceComponent);

        this.router = router;
        this.fakeService = fakeService;
        this.today = new Date();
        this.todaysDataTime = '';
        this.show = false;
        this.hide = false;
        this.buttonName = 'Show';
        this.todaysDataTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.today, 'hh:mm a', 'en-US', '+0530');
      }

      _createClass(MarkAttendanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigateByUrl('/schedule');
        }
      }, {
        key: "punchIn",
        value: function punchIn() {
          this.show = !this.show;
        }
      }, {
        key: "punchOut",
        value: function punchOut() {
          this.hide = !this.hide;
        }
      }, {
        key: "onclick",
        value: function onclick() {
          this.router.navigate(['/location']);
        }
      }]);

      return MarkAttendanceComponent;
    }();

    MarkAttendanceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_fake_service__WEBPACK_IMPORTED_MODULE_4__["FakeService"]
      }];
    };

    MarkAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mark-attendance',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mark-attendance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/mark-attendance.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mark-attendance.component.css */
      "./src/app/mark-attendance/mark-attendance.component.css"))["default"]]
    })], MarkAttendanceComponent);
    /***/
  },

  /***/
  "./src/app/mark-attendance/schedule/schedule.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/mark-attendance/schedule/schedule.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMarkAttendanceScheduleScheduleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.topnav {\r\n    overflow: hidden;\r\n    background-color:#D16AF7;\r\n  }\r\n  \r\n  .topnav a {\r\n    padding: 25px 16px;\r\n    text-decoration: none;\r\n    font-size: 14px;\r\n    display: inline;\r\n    color: #ffffff;\r\n    letter-spacing: 1px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n  \r\n  /* style lists */\r\n  \r\n  ul{\r\n      list-style: none;\r\n      font-size: 14px;\r\n      \r\n  }\r\n  \r\n  ul li::before {\r\n    content: \"\\2022\";\r\n    color: red;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n    width: 1em;\r\n    margin-left: -1em;\r\n  }\r\n  \r\n  li p{\r\n      font-size: 12px;\r\n      color: black;\r\n      letter-spacing: 1px;\r\n      font-weight: normal;\r\n  }\r\n  \r\n  .main-list p{\r\n      border-bottom: 1px solid #cccccc;\r\n      margin:15px 15px 10px 0px;\r\n      padding-bottom: 15px;\r\n      line-height: 15px;\r\n  }\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyay1hdHRlbmRhbmNlL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0VBRUEsZ0JBQWdCOztFQUNoQjtNQUNJLGdCQUFnQjtNQUNoQixlQUFlOztFQUVuQjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtNQUNJLGVBQWU7TUFDZixZQUFZO01BQ1osbUJBQW1CO01BQ25CLG1CQUFtQjtFQUN2Qjs7RUFFQztNQUNHLGdDQUFnQztNQUNoQyx5QkFBeUI7TUFDekIsb0JBQW9CO01BQ3BCLGlCQUFpQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hcmstYXR0ZW5kYW5jZS9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0QxNkFGNztcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC8qIHN0eWxlIGxpc3RzICovXHJcbiAgdWx7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgXHJcbiAgfVxyXG4gIHVsIGxpOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwMjJcIjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTFlbTtcclxuICB9XHJcblxyXG4gIGxpIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuIFxyXG4gICAubWFpbi1saXN0IHB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgICBtYXJnaW46MTVweCAxNXB4IDEwcHggMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/mark-attendance/schedule/schedule.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/mark-attendance/schedule/schedule.component.ts ***!
    \****************************************************************/

  /*! exports provided: ScheduleComponent */

  /***/
  function srcAppMarkAttendanceScheduleScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function () {
      return ScheduleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScheduleComponent = /*#__PURE__*/function () {
      function ScheduleComponent() {
        _classCallCheck(this, ScheduleComponent);
      }

      _createClass(ScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScheduleComponent;
    }();

    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mark-attendance/schedule/schedule.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.component.css */
      "./src/app/mark-attendance/schedule/schedule.component.css"))["default"]]
    })], ScheduleComponent);
    /***/
  },

  /***/
  "./src/app/modules/shared/login/login.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/modules/shared/login/login.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSharedLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-content-w3pvt {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    /* background: #fff; */\r\n    text-align: center;\r\n}\r\n\r\n.top-content-style {\r\n    padding: 4vw 4vw 4vw;\r\n    background-image:url('/../assets/tmp_1590038719584.jpg');\r\n    width: -webkit-fill-available;\r\n    padding: 8em 4em 5em;\r\n    border-bottom-left-radius: 70px 25px;\r\n    border-bottom-right-radius: 70px 25px;\r\n       \r\n  }\r\n\r\n.top-content-style p  {\r\n  \r\n    margin-bottom:50px;\r\n}\r\n\r\n.top-content-style h3{\r\n     margin-bottom:90px;\r\n     font-weight: 600;\r\n}\r\n\r\n.sub-main-w3 form {\r\n    background: #ffff;\r\n    padding: 1em;\r\n    box-shadow: 2px 5px 16px 2px rgba(16, 16, 16, 0.18);\r\n     margin: -8.5em 1em 2em;\r\n    border-radius: 10px;\r\n}\r\n\r\np.legend {\r\n    color: #4e4d4d;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin-bottom: 1.2em;\r\n}\r\n\r\np.legend span {\r\n    color: #000;\r\n    margin-left: 10px;\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    margin: 20px auto;\r\n    width: 100%\r\n}\r\n\r\n.input span {\r\n    position: absolute;\r\n    display: block;\r\n    color: #ff5545;\r\n    right: 10px;\r\n    top: 12px;\r\n    font-size: 16px;\r\n    border-bottom-right-radius:20px\r\n}\r\n\r\ninput[type=email], input[type=password]  {\r\n    width: 100%;\r\n    padding: 15px 10px 13px 12px;\r\n    display: block;\r\n    border: none;\r\n    border: 0.5px solid #000000;\r\n    color: #000;\r\n    box-sizing: border-box;\r\n    font-size: 11px;\r\n    outline: none;\r\n    letter-spacing: 1px;\r\n   \r\n}\r\n\r\n.login-button {\r\n    margin-top: 20px;\r\n    padding: 10px 0;\r\n    background-image:  linear-gradient(-90deg, #ff5545 , #fc6926);\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    width: 100%;\r\n    border: none;\r\n    position: relative;\r\n    margin-bottom: 2em;\r\n    cursor: pointer;\r\n}\r\n\r\n.submit:hover {\r\n    opacity: .8;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.bottom-text a{\r\n    color: #000000;\r\n    font-size: 14px;\r\n    /* display: inline-block; */\r\n    /* margin: 0em 1em 2em; */\r\n    float: right;\r\n    letter-spacing: 1px;\r\n    text-decoration:none;\r\n\r\n}\r\n\r\n.otp-text a{\r\n    color: #000000;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    font-weight:600;\r\n    text-decoration:none;\r\n}\r\n\r\n.error{\r\n    font-size: 11px;\r\n    color:red;\r\n    text-align: left;\r\n    font-weight: 600;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3REFBd0Q7SUFDeEQsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMscUNBQXFDOztFQUV2Qzs7QUFFRjs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBQ0E7S0FDSyxrQkFBa0I7S0FDbEIsZ0JBQWdCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtREFBbUQ7S0FDbEQsc0JBQXNCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNkRBQTZEO0lBQzdELGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUtYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjs7QUFFeEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb250ZW50LXczcHZ0IHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3AtY29udGVudC1zdHlsZSB7XHJcbiAgICBwYWRkaW5nOiA0dncgNHZ3IDR2dztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvLi4vYXNzZXRzL3RtcF8xNTkwMDM4NzE5NTg0LmpwZycpO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBwYWRkaW5nOiA4ZW0gNGVtIDVlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHggMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4IDI1cHg7XHJcbiAgICAgICBcclxuICB9XHJcblxyXG4udG9wLWNvbnRlbnQtc3R5bGUgcCAge1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG59XHJcbi50b3AtY29udGVudC1zdHlsZSBoM3tcclxuICAgICBtYXJnaW4tYm90dG9tOjkwcHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc3ViLW1haW4tdzMgZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTZweCAycHggcmdiYSgxNiwgMTYsIDE2LCAwLjE4KTtcclxuICAgICBtYXJnaW46IC04LjVlbSAxZW0gMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxucC5sZWdlbmQge1xyXG4gICAgY29sb3I6ICM0ZTRkNGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxufVxyXG5cclxucC5sZWdlbmQgc3BhbiB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4uaW5wdXQgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmY1NTQ1O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyMHB4XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTNweCAxMnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgXHJcbn1cclxuXHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KC05MGRlZywgI2ZmNTU0NSAsICNmYzY5MjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnN1Ym1pdDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG5cclxuLmJvdHRvbS10ZXh0IGF7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIC8qIG1hcmdpbjogMGVtIDFlbSAyZW07ICovXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblxyXG59XHJcbi5vdHAtdGV4dCBhe1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLmVycm9ye1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/shared/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/shared/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesSharedLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import { AuthenticationService } from '../authentication.service';


    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.isSubmitted = false;
        this.invalidLogin = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "logIn",
        value: function logIn() {
          this.isSubmitted = true;

          if (this.authForm.invalid) {
            return;
          }

          if (this.authForm.controls.email.value == 'admin@gmail.com' && this.authForm.controls.password.value == 'admin') {
            // this.authService.logIn(this.authForm.value);
            this.router.navigate(['mark-attendance']);
          } else {
            this.invalidLogin = true;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/modules/shared/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts"); // import { ToastrService } from 'ngx-toastr';
    // import { UserService } from '../_services/user.service';


    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(formBuilder, router, userService) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          var _this = this;

          this.submitted = true; // return for here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          this.loading = true;
          this.userService.register(this.registerForm.value).subscribe(function (data) {
            alert('User Registered successfully!!');

            _this.router.navigate(['/login']);
          });
        }
      }, {
        key: "fval",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/fake.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/fake.service.ts ***!
    \******************************************/

  /*! exports provided: FakeService */

  /***/
  function srcAppServicesFakeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeService", function () {
      return FakeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FakeService = /*#__PURE__*/function () {
      function FakeService(http) {
        _classCallCheck(this, FakeService);

        this.http = http;
        this.url = 'http://localhost:3000/User';
      }

      _createClass(FakeService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(this.url);
        }
      }, {
        key: "postAll",
        value: function postAll(data) {
          return this.http.post(this.url, data);
        }
      }]);

      return FakeService;
    }();

    FakeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FakeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FakeService);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "register",
        value: function register(user) {
          return this.http.post("auth/register", user);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Dhruvik\Desktop\gayatri\Squad\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map