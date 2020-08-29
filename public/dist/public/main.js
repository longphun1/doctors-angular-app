(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-appointments/all-appointments.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-appointments/all-appointments.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n    <button id=\"home-button\" class=\"btn btn-dark\" (click)=\"home()\">Homepage</button>\n    <div class=\"container\">\n        <div class=\"list-group\">\n            <button type=\"button\" class=\"list-group-item list-group-item-action active\">\n                All Appointments\n            </button>\n            <div *ngFor=\"let app of apps\">\n                <button type=\"button\" class=\"list-group-item list-group-item-action\"\n                    (click)=\"view(app._id)\">{{app.first_name}} {{app.last_name}} has an appointment on {{app.time}}</button>\n            </div>\n        </div>\n   </div>\n</body>\n\n</html>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-patients/all-patients.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-patients/all-patients.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n    <button id=\"home-button\" class=\"btn btn-dark\" (click)=\"back()\">Homepage</button>\n    <div class=\"container\">\n        <div class=\"list-group\">\n            <button type=\"button\" class=\"list-group-item list-group-item-action active\">\n                All Patients\n            </button>\n            <div *ngFor=\"let user of users\">\n                <button type=\"button\" class=\"list-group-item list-group-item-action\"\n                    (click)=\"view(user._id)\">{{user.first_name}} {{user.last_name}}</button>\n            </div>\n        </div>\n    </div>\n</body>\n\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n    <div class=\"container\">\n        <h1 class=\"header\">Make An Appointment</h1>\n        <form (submit)=\"submit()\">\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <input class=\"input\" type=\"text\" class=\"form-control\" placeholder=\"First name\" name=\"name\"\n                        [(ngModel)]=\"app.first_name\">\n                </div>\n                <div class=\"col\">\n                    <input class=\"input\" type=\"text\" class=\"form-control\" placeholder=\"Last name\" name=\"last_name\"\n                        [(ngModel)]=\"app.last_name\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <input class=\"input\" type=\"string\" class=\"form-control\" placeholder=\"Date of Birth\" name=\"age\" [(ngModel)]=\"app.age\">\n                </div>\n                <div class=\"col\">\n                    <input class=\"input\" type=\"date\" min=\"2019-11-22\" class=\"form-control\" placeholder=\"Date\" name=\"date\" [(ngModel)]=\"app.time\">\n                </div>\n            </div>\n            <div class=\"col\">\n                <textarea class=\"comment\" id=\"message\" name=\"message\" cols=\"60\" rows=\"3\" placeholder=\"  Add a comment\" [(ngModel)]=\"app.comment\"></textarea>\n            </div>\n            <div class=\"button\">\n                <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-info\" (click)=\"cancel()\">Go Back To Home</button>\n                <button class=\"btn btn-info\">Shedule Your Appointment</button>\n            </div>\n        </form>\n    </div>\n</body>\n\n</html>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n    <html>\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n            <title>Document</title>\n            <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n                integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n        </head>\n        \n        <div class=\"container\">\n            <h1 class=\"header\">Update your profile</h1>\n            <form (submit)=\"submit()\">\n                <h4>Name: </h4>\n                <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Your name\" [(ngModel)]=\"user.first_name\">\n                <h4>Last Name: </h4>\n                <input type=\"text\" class=\"form-control\" name=\"last_name\" placeholder=\"Your last name\" [(ngModel)]=\"user.last_name\">\n                <h4>Date of Birth: </h4>\n                <input type=\"text\" class=\"form-control\" name=\"age\" placeholder=\"Your date of birth\" [(ngModel)]=\"user.age\">\n                <h4>Address: </h4>\n                <input type=\"text\" class=\"form-control\" name=\"address\" placeholder=\"Your address\" [(ngModel)]=\"user.address\">\n                <h4>Phone Number: </h4>\n                <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"Your phone number, Ex: (555) 333-4444\" [(ngModel)]=\"user.phone\">\n                <div class=\"button-container\">\n                    <button type=\"button\" id=\"button\"  class=\"btn btn-info\" (click)=\"handleCancel()\">Cancel</button>\n                    <button id=\"button\" class=\"btn btn-info\">Confirm Edit</button>\n                </div>\n            </form>\n        </div>\n    </html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <title>Rapid Bootstrap Template</title>\n    <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\">\n    <meta content=\"\" name=\"keywords\">\n    <meta content=\"\" name=\"description\">\n\n    <!-- Favicons -->\n    <link href=\"img/favicon.png\" rel=\"icon\">\n    <link href=\"img/apple-touch-icon.png\" rel=\"apple-touch-icon\">\n\n    <!-- Google Fonts -->\n    <link\n        href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,600,700,700i|Montserrat:300,400,500,600,700\"\n        rel=\"stylesheet\">\n\n    <!-- Bootstrap CSS File -->\n    <link href=\"lib/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n    <!-- Libraries CSS Files -->\n    <link href=\"lib/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\n    <link href=\"lib/animate/animate.min.css\" rel=\"stylesheet\">\n    <link href=\"lib/ionicons/css/ionicons.min.css\" rel=\"stylesheet\">\n    <link href=\"lib/owlcarousel/assets/owl.carousel.min.css\" rel=\"stylesheet\">\n    <link href=\"lib/lightbox/css/lightbox.min.css\" rel=\"stylesheet\">\n\n    <!-- Main Stylesheet File -->\n    <link href=\"css/style.css\" rel=\"stylesheet\">\n\n</head>\n\n<body>\n    <div class=\"container\">\n        <header id=\"header\">\n            <div style=\"margin-left: 900px;\" class=\"links-container\">\n                <div class=\"logo float-left\">\n                    <h1 class=\"text-light\"><a href=\"#intro\" class=\"scrollto\"><span>Psychology</span></a></h1>\n                </div>\n                <nav class=\"main-nav float-right d-none d-lg-block\">\n                    <ul>\n                        <li *ngIf=\"user.admin === false\"><a routerLink=\"/users/appointment\">Make an appointment</a></li>\n                        <li *ngIf=\"user.admin === false\"><a routerLink=\"/users/edit/:id\" (click)=\"goToEdit(user.id)\">View\n                                Profile</a></li>\n                        <li *ngIf=\"user.admin === true\"><a routerLink=\"/users/appointment/all\">View all appointments</a>\n                        </li>\n                        <li *ngIf=\"user.admin === true\"><a routerLink=\"/patients\">View all patients</a></li>\n                        <li><a routerLink=\"/login\">Log out</a></li>\n                    </ul>\n                </nav>\n            </div>\n        </header>\n        \n        <section id=\"intro\" class=\"clearfix\">\n            <div class=\"body-container\">\n                <div style=\"margin-left: 100px;\" class=\"container d-flex h-100\">\n                    <div class=\"row justify-content-center align-self-center\">\n                        <div class=\"col-md-6 intro-info order-md-first order-last\" *ngIf=\"user != null\">\n                            <h2>Welcome<br>to the homepage <span>{{user.first_name}}!</span></h2>\n                            <div>\n                                <a href=\"#about\" class=\"btn-get-started scrollto\" routerLink=\"/home\">Contact Us!</a>\n                            </div>\n                        </div>\n        \n                        <div class=\"col-md-6 intro-img order-md-last order-first\">\n                            <img src=\"img/intro-img.svg\" alt=\"\" class=\"img-fluid\">\n                        </div>\n                    </div>\n                </div>\n                <div style=\"display: inline-block;\">\n                    <img class=\"img1\" src=\"https://c.files.bbci.co.uk/7F43/production/_107797523_gettyimages-965851348.jpg\"\n                        height=\"400px;\" width=\"600px;\" alt=\"\">\n                </div>\n                <div class=\"quotes\">\n                    <div>\n                        <h4>“If you deliberately plan on being less than you are capable of being, then I warn you that you’ll\n                            be unhappy for the rest of your life.” –Abraham Maslow</h4>\n                    </div>\n                    <div>\n                        <h4>“Probably the biggest insight… is that happiness is not just a place, but also a process. Happiness\n                            is an ongoing process of fresh challenges, and it takes the right attitudes and activities to\n                            continue to be happy.” –Ed Diener</h4>\n                    </div>\n                    <div>\n                        <h4>\n                            “Even a happy life cannot be without a measure of darkness, and the word happy would lose its\n                            meaning if it were not balanced by sadness.” –Carl G. Jung\n                        </h4>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n\n\n    <script src=\"lib/jquery/jquery.min.js\"></script>\n    <script src=\"lib/jquery/jquery-migrate.min.js\"></script>\n    <script src=\"lib/bootstrap/js/bootstrap.bundle.min.js\"></script>\n    <script src=\"lib/easing/easing.min.js\"></script>\n    <script src=\"lib/mobile-nav/mobile-nav.js\"></script>\n    <script src=\"lib/wow/wow.min.js\"></script>\n    <script src=\"lib/waypoints/waypoints.min.js\"></script>\n    <script src=\"lib/counterup/counterup.min.js\"></script>\n    <script src=\"lib/owlcarousel/owl.carousel.min.js\"></script>\n    <script src=\"lib/isotope/isotope.pkgd.min.js\"></script>\n    <script src=\"lib/lightbox/js/lightbox.min.js\"></script>\n    <!-- Contact Form JavaScript File -->\n    <script src=\"contactform/contactform.js\"></script>\n\n    <!-- Template Main Javascript File -->\n    <script src=\"js/main.js\"></script>\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n</head>\n<style>\n    .header{\n        font-size: 50px;\n    }\n</style>\n\n<body>\n    <div class=\"container\">\n        <div class=\"left\">\n            <h1 class=\"regi\" style=\"color:rgb(149, 160, 170)\">Registration</h1>\n            <div class=\"register\">\n                <form (submit)=\"register()\">\n                    <div>\n                        <label>First Name:</label>\n                        <input type=\"text\" name=\"first_name\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter first name\" [(ngModel)]=\"newUser.first_name\">\n                    </div>\n                    <div>\n                        <label>Last Name:</label>\n                        <input type=\"text\" name=\"last_name\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter last name\" [(ngModel)]=\"newUser.last_name\">\n                    </div>\n                    <div>\n                        <label>Email:</label>\n                        <input type=\"email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)]=\"newUser.email\">\n                    </div>\n                    <div>\n                        <label>Password:</label>\n                        <input type=\"password\" name=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter password\" [(ngModel)]=\"newUser.password\">\n                    </div>\n                    <button class=\"btn btn-primary\" style=\"margin-top: 30px\">Submit</button>\n                </form>\n            </div>\n        </div>\n        <div class=\"right\">\n            <h1 class=\"log\" style=\"color:rgb(149, 160, 170)\">Login</h1>\n            <div class=\"login\">\n                <form (submit)=\"login()\">\n                    <div>\n                        <label>Email:</label>\n                        <input type=\"email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)]=\"user.email\">\n                    </div>\n                    <div>\n                        <label>Password:</label>\n                        <input type=\"password\" name=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter password\" [(ngModel)]=\"user.password\">\n                    </div>\n                    <button class=\"btn btn-primary\" style=\"margin-top: 30px\">Login</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/note/note.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/note/note.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n    <form (submit)=\"submit()\">\n        <div class=\"jumbotron\" *ngIf=\"app != null\">\n            <h1 class=\"display-4\">Create a note for {{app.first_name}}</h1>\n            <hr class=\"my-4\">\n            <div class=\"box\">\n                <textarea name=\"note\" id=\"\" cols=\"80\" rows=\"6\" placeholder=\"Add notes here\"\n                    [(ngModel)]=\"app.note\"></textarea>\n                <div class=\"button\">\n                    <button class=\"btn btn-success\">Submit Note</button>\n                    <button style=\"margin-left: 10px;\" type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Cancel</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n    <h1 class=\"header\">Make Payments</h1>\n    <div class=\"container\">\n        <form (submit)=\"submit()\">\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Full Name on Card\" name=\"name\"\n                        [(ngModel)]=\"card.name\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <input type=\"number\" class=\"form-control\" placeholder=\"16 Digits Card Number\" name=\"number\"\n                        [(ngModel)]=\"card.number\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Exp\" name=\"exp\" [(ngModel)]=\"card.exp\">\n                </div>\n                <div class=\"col\">\n                    <input type=\"number\" class=\"form-control\" placeholder=\"CVV\" name=\"cvv\" [(ngModel)]=\"card.cv\">\n                </div>\n            </div>\n            <div class=\"button\">\n                <button class=\"btn btn-success\" class=\"btn btn-success\">Pay Now!</button>\n                <button style=\"margin-left: 10px;\" class=\"btn btn-secondary\" type=\"button\" (click)=\"cancel()\">Pay in the Office</button>\n            </div>\n        </form>\n    </div>\n\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n    <div class=\"header\">\n        <button class=\"btn btn-dark\" (click)=\"home()\">Back to All</button>\n    </div>\n    <div class=\"container\" *ngIf=\"app != null\">\n        <ul class=\"list-group\">\n            <li style=\"size: 30px;\" class=\"list-group-item disabled\">Appointment Informations</li>\n            <li class=\"list-group-item\">First Name: {{app.first_name}}</li>\n            <li class=\"list-group-item\">Last Name: {{app.last_name}}</li>\n            <li class=\"list-group-item\">Age: {{app.age}}</li>\n            <li class=\"list-group-item\">Time: {{app.time}}</li>\n            <li class=\"list-group-item\">Comment: {{app.comment}}</li>\n            <li class=\"list-group-item\">{{app.note}}</li>\n        </ul>\n        <button id=\"add-button\" type=\"button\" class=\"btn btn-primary\" (click)=\"addNote(app._id)\">Add/Change a Note</button>\n    </div>\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-patient/view-patient.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-patient/view-patient.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n    <div class=\"container\" *ngIf=\"user != null\">\n        <ul class=\"list-group\">\n            <li style=\"size: 30px;\" class=\"list-group-item disabled\">Patients Informations</li>\n            <li class=\"list-group-item\">Name: {{user.first_name}} {{user.last_name}}</li>\n            <li class=\"list-group-item\">Age: {{user.age}}</li>\n            <li class=\"list-group-item\">Address: {{user.address}}</li>\n            <li class=\"list-group-item\">Phone: {{user.phone}}</li>\n        </ul>\n        <button id=\"back-button\" class=\"btn btn-dark\" (click)=\"back()\">Back to All Patients</button>\n    </div>\n</body>\n\n</html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/all-appointments/all-appointments.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/all-appointments/all-appointments.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group {\n    height: 500px;\n    overflow-y: auto;\n}\n\n.container {\n    margin-top: 5%;\n    text-align: center;\n    width: 800px;\n}\n\n#home-button {\n    margin-left: 80%;\n    margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLWFwcG9pbnRtZW50cy9hbGwtYXBwb2ludG1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hbGwtYXBwb2ludG1lbnRzL2FsbC1hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogODAwcHg7XG59XG4jaG9tZS1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59Il19 */");

/***/ }),

/***/ "./src/app/all-appointments/all-appointments.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/all-appointments/all-appointments.component.ts ***!
  \****************************************************************/
/*! exports provided: AllAppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAppointmentsComponent", function() { return AllAppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AllAppointmentsComponent = class AllAppointmentsComponent {
    constructor(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.apps = [];
    }
    ngOnInit() {
        this._http.getApps()
            .subscribe((data) => this.apps = data.appointments);
    }
    view(id) {
        this._router.navigate(['/appointments/' + id]);
    }
    home() {
        this._router.navigate(['/home']);
    }
};
AllAppointmentsComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AllAppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-appointments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-appointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-appointments/all-appointments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-appointments.component.css */ "./src/app/all-appointments/all-appointments.component.css")).default]
    })
], AllAppointmentsComponent);



/***/ }),

/***/ "./src/app/all-patients/all-patients.component.css":
/*!*********************************************************!*\
  !*** ./src/app/all-patients/all-patients.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    text-align: center;\n    width: 30%;\n}\n\n.list-group {\n    height: 500px;\n    overflow-y: auto;\n    margin-top: 5%;\n}\n\n#home-button {\n    margin-left: 80%;\n    margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXBhdGllbnRzL2FsbC1wYXRpZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWxsLXBhdGllbnRzL2FsbC1wYXRpZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi5saXN0LWdyb3VwIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbiNob21lLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/all-patients/all-patients.component.ts":
/*!********************************************************!*\
  !*** ./src/app/all-patients/all-patients.component.ts ***!
  \********************************************************/
/*! exports provided: AllPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPatientsComponent", function() { return AllPatientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AllPatientsComponent = class AllPatientsComponent {
    constructor(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.users = [];
    }
    ngOnInit() {
        this._http.getUsers()
            .subscribe((data) => this.users = data.users);
    }
    view(id) {
        this._router.navigate(['/patient/', id]);
    }
    back() {
        this._router.navigate(['/home']);
    }
};
AllPatientsComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AllPatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-patients',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-patients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-patients/all-patients.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-patients.component.css */ "./src/app/all-patients/all-patients.component.css")).default]
    })
], AllPatientsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/appointment/appointment.component.ts");
/* harmony import */ var _all_appointments_all_appointments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-appointments/all-appointments.component */ "./src/app/all-appointments/all-appointments.component.ts");
/* harmony import */ var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-appointment/view-appointment.component */ "./src/app/view-appointment/view-appointment.component.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./note/note.component */ "./src/app/note/note.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _all_patients_all_patients_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-patients/all-patients.component */ "./src/app/all-patients/all-patients.component.ts");
/* harmony import */ var _view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-patient/view-patient.component */ "./src/app/view-patient/view-patient.component.ts");













const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'users/edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'users/appointment',
        component: _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentComponent"]
    },
    {
        path: 'users/appointment/all',
        component: _all_appointments_all_appointments_component__WEBPACK_IMPORTED_MODULE_7__["AllAppointmentsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'appointments/:id',
        component: _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_8__["ViewAppointmentComponent"]
    },
    {
        path: 'appointments/edit/:id',
        component: _note_note_component__WEBPACK_IMPORTED_MODULE_9__["NoteComponent"]
    },
    {
        path: 'payment',
        component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_10__["PaymentComponent"]
    },
    {
        path: 'patients',
        component: _all_patients_all_patients_component__WEBPACK_IMPORTED_MODULE_11__["AllPatientsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'patient/:id',
        component: _view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_12__["ViewPatientComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/appointment/appointment.component.ts");
/* harmony import */ var _all_appointments_all_appointments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-appointments/all-appointments.component */ "./src/app/all-appointments/all-appointments.component.ts");
/* harmony import */ var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-appointment/view-appointment.component */ "./src/app/view-appointment/view-appointment.component.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./note/note.component */ "./src/app/note/note.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _all_patients_all_patients_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./all-patients/all-patients.component */ "./src/app/all-patients/all-patients.component.ts");
/* harmony import */ var _view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view-patient/view-patient.component */ "./src/app/view-patient/view-patient.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"],
            _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__["AppointmentComponent"],
            _all_appointments_all_appointments_component__WEBPACK_IMPORTED_MODULE_12__["AllAppointmentsComponent"],
            _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_13__["ViewAppointmentComponent"],
            _note_note_component__WEBPACK_IMPORTED_MODULE_14__["NoteComponent"],
            _payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"],
            _all_patients_all_patients_component__WEBPACK_IMPORTED_MODULE_16__["AllPatientsComponent"],
            _view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_17__["ViewPatientComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/appointment/appointment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/appointment/appointment.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    margin-top: 10%;\n    text-align: center;\n    width: 35%;\n}\n\n.form-row {\n    margin-bottom: 20px;\n}\n\n.header {\n    text-align: center;\n    margin-bottom: 3%;\n}\n\n.comment {\n    margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDM1JTtcbn1cblxuLmZvcm0tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5jb21tZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/appointment/appointment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/appointment/appointment.component.ts ***!
  \******************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let AppointmentComponent = class AppointmentComponent {
    constructor(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.app = {
            first_name: '',
            last_name: '',
            age: '',
            time: '',
            comment: '',
            note: '',
        };
        this.errors = [];
    }
    ngOnInit() {
    }
    submit() {
        this._http.createAppointment(this.app)
            .subscribe((data) => {
            if (data.hasOwnProperty('errors')) {
                this.errors = data.errors;
            }
            else {
                this._router.navigate(['/payment']);
            }
        });
    }
    cancel() {
        this._router.navigate(['/home']);
    }
};
AppointmentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
AppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointment.component.css */ "./src/app/appointment/appointment.component.css")).default]
    })
], AppointmentComponent);



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    width: 30%;\r\n    margin-top: 8%;\r\n}\r\n\r\n.header {\r\n    text-align: center;\r\n}\r\n\r\nh4 {\r\n    margin-top: 1%;\r\n    margin-left: 1%;\r\n}\r\n\r\n.button-container {\r\n    text-align: center;\r\n}\r\n\r\n#button {\r\n    margin-top: 2%;\r\n    margin-right: 2%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EditComponent = class EditComponent {
    constructor(_http, _router, _route) {
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this.user = null;
    }
    ngOnInit() {
        this._route.params
            .subscribe((params) => {
            this._http.getUser(params.id)
                .subscribe((data) => this.user = data.user);
        });
    }
    handleCancel() {
        this._router.navigate(['/home']);
    }
    submit() {
        this._http.updateUser(this.user._id, {
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            age: this.user.age,
            address: this.user.address,
            phone: this.user.phone,
        })
            .subscribe((data) => {
            this._router.navigate(['/home']);
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    background: rgb(233, 231, 231);\n    color: #444;\n    font-family: \"Open Sans\", sans-serif;\n  }\n\n.links-container {\n  float: right;\n  margin-right: 5%;\n}\n\na {\n  color: #1bb1dc;\n  transition: 0.5s;\n  }\n\n.clearfix {\n  margin-top: 5%;\n}\n\n.body-container {\n  margin-left: 10%;\n}\n\n.img1 {\n    border: 5px solid rgb(107, 105, 105);\n    margin-left: 100px;\n  }\n\n.quotes {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 70px;\n    width: 400px;\n}\n\na:hover,\n  a:active,\n  a:focus {\n    color: #0a98c0;\n    outline: none;\n    text-decoration: none;\n  }\n\np {\n    padding: 0;\n    margin: 0 0 30px 0;\n  }\n\nh1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 400;\n    margin: 0 0 20px 0;\n    padding: 0;\n  }\n\n/* Prelaoder */\n\n#preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 9999;\n    overflow: hidden;\n    background: #fff;\n  }\n\n#preloader:before {\n    content: \"\";\n    position: fixed;\n    top: calc(50% - 30px);\n    left: calc(50% - 30px);\n    border: 6px solid #f2f2f2;\n    border-top: 6px solid #1bb1dc;\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    -webkit-animation: animate-preloader 1s linear infinite;\n    animation: animate-preloader 1s linear infinite;\n  }\n\n@-webkit-keyframes animate-preloader {\n    0% {\n      transform: rotate(0deg);\n    }\n  \n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n@keyframes animate-preloader {\n    0% {\n      transform: rotate(0deg);\n    }\n  \n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n#header {\n    height: 110px;\n    transition: all 0.5s;\n    z-index: 997;\n    transition: all 0.5s;\n    padding: 20px 0;\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    transition: all 0.5s;\n    z-index: 997;\n  }\n\n#header.header-scrolled,\n  #header.header-pages {\n    height: 70px;\n    padding: 15px 0;\n    background-color: #fff;\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);\n  }\n\n#header.header-scrolled #topbar,\n  #header.header-pages #topbar {\n    display: none;\n  }\n\n#header .logo h1 {\n    font-size: 36px;\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n    font-weight: 400;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n  }\n\n#header .logo h1 a,\n  #header .logo h1 a:hover {\n    color: #413e66;\n    text-decoration: none;\n  }\n\n#header .logo img {\n    padding: 0;\n    margin: 7px 0;\n    max-height: 26px;\n  }\n\n.main-pages {\n    margin-top: 60px;\n  }\n\n/*--------------------------------------------------------------\n  # Intro Section\n  --------------------------------------------------------------*/\n\n#intro {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n    background: #f5f8fd url(\"/img/intro-bg.jpg\") center top no-repeat;\n    background-size: cover;\n  }\n\n#intro .intro-info h2 {\n    color: #413e66;\n    margin-bottom: 40px;\n    font-size: 48px;\n    font-weight: 700;\n  }\n\n#intro .intro-info h2 span {\n    color: #1bb1dc;\n  }\n\n#intro .intro-info .btn-get-started,\n  #intro .intro-info .btn-services {\n    font-family: \"Montserrat\", sans-serif;\n    font-size: 13px;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    display: inline-block;\n    padding: 10px 32px;\n    border-radius: 4px;\n    transition: 0.5s;\n    color: #fff;\n    background: #1bb1dc;\n    color: #fff;\n  }\n\n#intro .intro-info .btn-get-started:hover,\n  #intro .intro-info .btn-services:hover {\n    background: #0a98c0;\n  }\n\n/*--------------------------------------------------------------\n  # Navigation Menu\n  --------------------------------------------------------------*/\n\n/* Desktop Navigation */\n\n.main-nav {\n    /* Drop Down */\n    /* Deep Drop Down */\n  }\n\n.main-nav,\n  .main-nav * {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n.main-nav > ul > li {\n    position: relative;\n    white-space: nowrap;\n    float: left;\n  }\n\n.main-nav a {\n    display: block;\n    position: relative;\n    color: #413e66;\n    padding: 10px 15px;\n    transition: 0.3s;\n    font-size: 14px;\n    font-family: \"Open Sans\", sans-serif;\n    text-transform: uppercase;\n    font-weight: 600;\n  }\n\n.main-nav a:hover,\n  .main-nav .active > a,\n  .main-nav li:hover > a {\n    color: #1bb1dc;\n    text-decoration: none;\n  }\n\n.main-nav .drop-down ul {\n    display: block;\n    position: absolute;\n    left: 0;\n    top: calc(100% - 30px);\n    z-index: 99;\n    opacity: 0;\n    visibility: hidden;\n    padding: 10px 0;\n    background: #fff;\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n    transition: ease all 0.3s;\n  }\n\n.main-nav .drop-down:hover > ul {\n    opacity: 1;\n    top: 100%;\n    visibility: visible;\n  }\n\n.main-nav .drop-down li {\n    min-width: 180px;\n    position: relative;\n  }\n\n.main-nav .drop-down ul a {\n    padding: 10px 20px;\n    font-size: 14px;\n    font-weight: 500;\n    text-transform: none;\n    color: #065e77;\n  }\n\n.main-nav .drop-down ul a:hover,\n  .main-nav .drop-down ul .active > a,\n  .main-nav .drop-down ul li:hover > a {\n    color: #1bb1dc;\n  }\n\n.main-nav .drop-down > a:after {\n    content: \"\\f107\";\n    font-family: FontAwesome;\n    padding-left: 10px;\n  }\n\n.main-nav .drop-down .drop-down ul {\n    top: 0;\n    left: calc(100% - 30px);\n  }\n\n.main-nav .drop-down .drop-down:hover > ul {\n    opacity: 1;\n    top: 0;\n    left: 100%;\n  }\n\n.main-nav .drop-down .drop-down > a {\n    padding-right: 35px;\n  }\n\n.main-nav .drop-down .drop-down > a:after {\n    content: \"\\f105\";\n    position: absolute;\n    right: 15px;\n  }\n\n/* Mobile Navigation */\n\n.mobile-nav {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 9999;\n    overflow-y: auto;\n    left: -260px;\n    width: 260px;\n    padding-top: 18px;\n    background: rgba(40, 38, 70, 0.8);\n    transition: 0.4s;\n  }\n\n.mobile-nav * {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n.mobile-nav a {\n    display: block;\n    position: relative;\n    color: #fff;\n    padding: 10px 20px;\n    font-weight: 500;\n  }\n\n.mobile-nav a:hover,\n  .mobile-nav .active > a,\n  .mobile-nav li:hover > a {\n    color: #8dc2fa;\n    text-decoration: none;\n  }\n\n.mobile-nav .drop-down > a:after {\n    content: \"\\f078\";\n    font-family: FontAwesome;\n    padding-left: 10px;\n    position: absolute;\n    right: 15px;\n  }\n\n.mobile-nav .active.drop-down > a:after {\n    content: \"\\f077\";\n  }\n\n.mobile-nav .drop-down > a {\n    padding-right: 35px;\n  }\n\n.mobile-nav .drop-down ul {\n    display: none;\n    overflow: hidden;\n  }\n\n.mobile-nav .drop-down li {\n    padding-left: 20px;\n  }\n\n.mobile-nav-toggle {\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 9998;\n    border: 0;\n    background: none;\n    font-size: 24px;\n    transition: all 0.4s;\n    outline: none !important;\n    line-height: 1;\n    cursor: pointer;\n    text-align: right;\n  }\n\n.mobile-nav-toggle i {\n    margin: 18px 18px 0 0;\n    color: #065e77;\n  }\n\n.mobile-nav-overly {\n    width: 100%;\n    height: 100%;\n    z-index: 9997;\n    top: 0;\n    left: 0;\n    position: fixed;\n    background: rgba(40, 38, 70, 0.8);\n    overflow: hidden;\n    display: none;\n  }\n\n.mobile-nav-active {\n    overflow: hidden;\n  }\n\n.mobile-nav-active .mobile-nav {\n    left: 0;\n  }\n\n.mobile-nav-active .mobile-nav-toggle i {\n    color: #fff;\n  }\n\n/*--------------------------------------------------------------\n  # Sections\n  --------------------------------------------------------------*/\n\n/* Sections Header\n  --------------------------------*/\n\n.section-header h3 {\n    font-size: 36px;\n    color: #413e66;\n    text-align: center;\n    font-weight: 700;\n    position: relative;\n    font-family: \"Montserrat\", sans-serif;\n  }\n\n.section-header p {\n    text-align: center;\n    margin: auto;\n    font-size: 15px;\n    padding-bottom: 60px;\n    color: #535074;\n    width: 50%;\n  }\n\n/* Section with background\n  --------------------------------*/\n\n.section-bg {\n    background: #f5f8fd;\n  }\n\n/* About Us Section\n  --------------------------------*/\n\n#about {\n    padding: 80px 0;\n  }\n\n#about .about-content {\n    padding-top: 40px;\n  }\n\n#about .about-content h2 {\n    color: #413e66;\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 700;\n  }\n\n#about .about-content h3 {\n    color: #696592;\n    font-weight: 400;\n    font-size: 22px;\n    font-style: italic;\n  }\n\n#about .about-content ul {\n    list-style: none;\n    padding: 0;\n  }\n\n#about .about-content ul li {\n    padding-bottom: 10px;\n  }\n\n#about .about-content ul li i {\n    font-size: 20px;\n    padding-right: 4px;\n    color: #1bb1dc;\n  }\n\n#about .about-img {\n    position: relative;\n    margin: 30px 30px 30px 30px;\n  }\n\n#about .about-img img {\n    width: 100%;\n    border: 8px solid #fff;\n    transition: .5s;\n  }\n\n#about .about-img img:hover {\n    width: 100%;\n    transform: scale(1.03);\n  }\n\n#about .about-img::before {\n    position: absolute;\n    left: -31px;\n    top: -30px;\n    width: 90%;\n    height: 92%;\n    z-index: -1;\n    content: '';\n    background-color: #ebf1fa;\n    transition: .5s;\n  }\n\n#about .about-img::after {\n    position: absolute;\n    right: -31px;\n    bottom: -30px;\n    width: 90%;\n    height: 92%;\n    z-index: -1;\n    content: '';\n    background-color: #ebf1fa;\n    transition: .5s;\n  }\n\n/* Services Section\n  --------------------------------*/\n  \n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLG9DQUFvQztFQUN0Qzs7QUFFRjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVFOzs7SUFHRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0FBRUE7Ozs7OztJQU1FLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7QUFFQSxjQUFjOztBQUVkO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCwrQ0FBK0M7RUFDakQ7O0FBRUE7SUFDRTtNQUVFLHVCQUF1QjtJQUN6Qjs7SUFFQTtNQUVFLHlCQUF5QjtJQUMzQjtFQUNGOztBQUVBO0lBQ0U7TUFFRSx1QkFBdUI7SUFDekI7O0lBRUE7TUFFRSx5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7O0FBRUE7O0lBRUUsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaURBQWlEO0VBQ25EOztBQUVBOztJQUVFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7QUFFQTs7SUFFRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7O2lFQUUrRDs7QUFFL0Q7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpRUFBaUU7SUFDakUsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTs7SUFFRSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7QUFFQTs7SUFFRSxtQkFBbUI7RUFDckI7O0FBRUE7O2lFQUUrRDs7QUFFL0QsdUJBQXVCOztBQUV2QjtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0FBRUE7O0lBRUUsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCOztBQUVBOzs7SUFHRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0RBQWtEO0lBQ2xELHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCOztBQUVBOzs7SUFHRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxNQUFNO0lBQ04sdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLE1BQU07SUFDTixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUVBOzs7SUFHRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsTUFBTTtJQUNOLE9BQU87SUFDUCxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxPQUFPO0VBQ1Q7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7O2lFQUUrRDs7QUFFL0Q7bUNBQ2lDOztBQUVqQztJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUNBQXFDO0VBQ3ZDOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0FBRUE7bUNBQ2lDOztBQUVqQztJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTttQ0FDaUM7O0FBRWpDO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxxQ0FBcUM7SUFDckMsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxXQUFXO0lBRVgsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCOztBQUVBO21DQUNpQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzMywgMjMxLCAyMzEpO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG5cbi5saW5rcy1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG4gIFxuYSB7XG4gIGNvbG9yOiAjMWJiMWRjO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbi5jbGVhcmZpeCB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uYm9keS1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uaW1nMSB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEwNywgMTA1LCAxMDUpO1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgfVxuXG4ucXVvdGVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICB3aWR0aDogNDAwcHg7XG59XG4gIFxuICBhOmhvdmVyLFxuICBhOmFjdGl2ZSxcbiAgYTpmb2N1cyB7XG4gICAgY29sb3I6ICMwYTk4YzA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIHAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICB9XG4gIFxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLyogUHJlbGFvZGVyICovXG4gIFxuICAjcHJlbG9hZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIFxuICAjcHJlbG9hZGVyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwcHgpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzBweCk7XG4gICAgYm9yZGVyOiA2cHggc29saWQgI2YyZjJmMjtcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgIzFiYjFkYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLXByZWxvYWRlciAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlLXByZWxvYWRlciAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXByZWxvYWRlciB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBhbmltYXRlLXByZWxvYWRlciB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgXG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgI2hlYWRlciB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB6LWluZGV4OiA5OTc7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB6LWluZGV4OiA5OTc7XG4gIH1cbiAgXG4gICNoZWFkZXIuaGVhZGVyLXNjcm9sbGVkLFxuICAjaGVhZGVyLmhlYWRlci1wYWdlcyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDEyNywgMTM3LCAxNjEsIDAuMyk7XG4gIH1cbiAgXG4gICNoZWFkZXIuaGVhZGVyLXNjcm9sbGVkICN0b3BiYXIsXG4gICNoZWFkZXIuaGVhZGVyLXBhZ2VzICN0b3BiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gICNoZWFkZXIgLmxvZ28gaDEge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgI2hlYWRlciAubG9nbyBoMSBhLFxuICAjaGVhZGVyIC5sb2dvIGgxIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjNDEzZTY2O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgI2hlYWRlciAubG9nbyBpbWcge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiA3cHggMDtcbiAgICBtYXgtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAubWFpbi1wYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIEludHJvIFNlY3Rpb25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgI2ludHJvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmOGZkIHVybChcIi9pbWcvaW50cm8tYmcuanBnXCIpIGNlbnRlciB0b3Agbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgXG4gICNpbnRybyAuaW50cm8taW5mbyBoMiB7XG4gICAgY29sb3I6ICM0MTNlNjY7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgI2ludHJvIC5pbnRyby1pbmZvIGgyIHNwYW4ge1xuICAgIGNvbG9yOiAjMWJiMWRjO1xuICB9XG4gIFxuICAjaW50cm8gLmludHJvLWluZm8gLmJ0bi1nZXQtc3RhcnRlZCxcbiAgI2ludHJvIC5pbnRyby1pbmZvIC5idG4tc2VydmljZXMge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMWJiMWRjO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAjaW50cm8gLmludHJvLWluZm8gLmJ0bi1nZXQtc3RhcnRlZDpob3ZlcixcbiAgI2ludHJvIC5pbnRyby1pbmZvIC5idG4tc2VydmljZXM6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwYTk4YzA7XG4gIH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBOYXZpZ2F0aW9uIE1lbnVcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLyogRGVza3RvcCBOYXZpZ2F0aW9uICovXG4gIFxuICAubWFpbi1uYXYge1xuICAgIC8qIERyb3AgRG93biAqL1xuICAgIC8qIERlZXAgRHJvcCBEb3duICovXG4gIH1cbiAgXG4gIC5tYWluLW5hdixcbiAgLm1haW4tbmF2ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgXG4gIC5tYWluLW5hdiA+IHVsID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAubWFpbi1uYXYgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjNDEzZTY2O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgXG4gIC5tYWluLW5hdiBhOmhvdmVyLFxuICAubWFpbi1uYXYgLmFjdGl2ZSA+IGEsXG4gIC5tYWluLW5hdiBsaTpob3ZlciA+IGEge1xuICAgIGNvbG9yOiAjMWJiMWRjO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLm1haW4tbmF2IC5kcm9wLWRvd24gdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgei1pbmRleDogOTk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoMTI3LCAxMzcsIDE2MSwgMC4yNSk7XG4gICAgdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgfVxuICBcbiAgLm1haW4tbmF2IC5kcm9wLWRvd246aG92ZXIgPiB1bCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDEwMCU7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICBcbiAgLm1haW4tbmF2IC5kcm9wLWRvd24gbGkge1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAubWFpbi1uYXYgLmRyb3AtZG93biB1bCBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgY29sb3I6ICMwNjVlNzc7XG4gIH1cbiAgXG4gIC5tYWluLW5hdiAuZHJvcC1kb3duIHVsIGE6aG92ZXIsXG4gIC5tYWluLW5hdiAuZHJvcC1kb3duIHVsIC5hY3RpdmUgPiBhLFxuICAubWFpbi1uYXYgLmRyb3AtZG93biB1bCBsaTpob3ZlciA+IGEge1xuICAgIGNvbG9yOiAjMWJiMWRjO1xuICB9XG4gIFxuICAubWFpbi1uYXYgLmRyb3AtZG93biA+IGE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLm1haW4tbmF2IC5kcm9wLWRvd24gLmRyb3AtZG93biB1bCB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICB9XG4gIFxuICAubWFpbi1uYXYgLmRyb3AtZG93biAuZHJvcC1kb3duOmhvdmVyID4gdWwge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYWluLW5hdiAuZHJvcC1kb3duIC5kcm9wLWRvd24gPiBhIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICB9XG4gIFxuICAubWFpbi1uYXYgLmRyb3AtZG93biAuZHJvcC1kb3duID4gYTphZnRlciB7XG4gICAgY29udGVudDogXCJcXGYxMDVcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbiAgXG4gIC8qIE1vYmlsZSBOYXZpZ2F0aW9uICovXG4gIFxuICAubW9iaWxlLW5hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGxlZnQ6IC0yNjBweDtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSg0MCwgMzgsIDcwLCAwLjgpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cbiAgXG4gIC5tb2JpbGUtbmF2ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgXG4gIC5tb2JpbGUtbmF2IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLm1vYmlsZS1uYXYgYTpob3ZlcixcbiAgLm1vYmlsZS1uYXYgLmFjdGl2ZSA+IGEsXG4gIC5tb2JpbGUtbmF2IGxpOmhvdmVyID4gYSB7XG4gICAgY29sb3I6ICM4ZGMyZmE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICAubW9iaWxlLW5hdiAuZHJvcC1kb3duID4gYTphZnRlciB7XG4gICAgY29udGVudDogXCJcXGYwNzhcIjtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTVweDtcbiAgfVxuICBcbiAgLm1vYmlsZS1uYXYgLmFjdGl2ZS5kcm9wLWRvd24gPiBhOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlxcZjA3N1wiO1xuICB9XG4gIFxuICAubW9iaWxlLW5hdiAuZHJvcC1kb3duID4gYSB7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgfVxuICBcbiAgLm1vYmlsZS1uYXYgLmRyb3AtZG93biB1bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAubW9iaWxlLW5hdiAuZHJvcC1kb3duIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5tb2JpbGUtbmF2LXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5OTk4O1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIFxuICAubW9iaWxlLW5hdi10b2dnbGUgaSB7XG4gICAgbWFyZ2luOiAxOHB4IDE4cHggMCAwO1xuICAgIGNvbG9yOiAjMDY1ZTc3O1xuICB9XG4gIFxuICAubW9iaWxlLW5hdi1vdmVybHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk3O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAzOCwgNzAsIDAuOCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAubW9iaWxlLW5hdi1hY3RpdmUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5tb2JpbGUtbmF2LWFjdGl2ZSAubW9iaWxlLW5hdiB7XG4gICAgbGVmdDogMDtcbiAgfVxuICBcbiAgLm1vYmlsZS1uYXYtYWN0aXZlIC5tb2JpbGUtbmF2LXRvZ2dsZSBpIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIFNlY3Rpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIC8qIFNlY3Rpb25zIEhlYWRlclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIFxuICAuc2VjdGlvbi1oZWFkZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBjb2xvcjogIzQxM2U2NjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuc2VjdGlvbi1oZWFkZXIgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgY29sb3I6ICM1MzUwNzQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgLyogU2VjdGlvbiB3aXRoIGJhY2tncm91bmRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLnNlY3Rpb24tYmcge1xuICAgIGJhY2tncm91bmQ6ICNmNWY4ZmQ7XG4gIH1cbiAgXG4gIC8qIEFib3V0IFVzIFNlY3Rpb25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgI2Fib3V0IHtcbiAgICBwYWRkaW5nOiA4MHB4IDA7XG4gIH1cbiAgXG4gICNhYm91dCAuYWJvdXQtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIH1cbiAgXG4gICNhYm91dCAuYWJvdXQtY29udGVudCBoMiB7XG4gICAgY29sb3I6ICM0MTNlNjY7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgXG4gICNhYm91dCAuYWJvdXQtY29udGVudCBoMyB7XG4gICAgY29sb3I6ICM2OTY1OTI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIFxuICAjYWJvdXQgLmFib3V0LWNvbnRlbnQgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgI2Fib3V0IC5hYm91dC1jb250ZW50IHVsIGxpIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgI2Fib3V0IC5hYm91dC1jb250ZW50IHVsIGxpIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgY29sb3I6ICMxYmIxZGM7XG4gIH1cbiAgXG4gICNhYm91dCAuYWJvdXQtaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICB9XG4gIFxuICAjYWJvdXQgLmFib3V0LWltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZmY7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICB9XG4gIFxuICAjYWJvdXQgLmFib3V0LWltZyBpbWc6aG92ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICB9XG4gIFxuICAjYWJvdXQgLmFib3V0LWltZzo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTMxcHg7XG4gICAgdG9wOiAtMzBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTIlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmYxZmE7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICB9XG4gIFxuICAjYWJvdXQgLmFib3V0LWltZzo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTMxcHg7XG4gICAgYm90dG9tOiAtMzBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTIlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmYxZmE7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICB9XG4gIFxuICAvKiBTZXJ2aWNlcyBTZWN0aW9uXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.user = null;
    }
    ngOnInit() {
        this._http.getCurrentUser()
            .subscribe((response) => {
            if (response.user === null) {
                this._router.navigate(['/login']);
            }
            else {
                this.user = response.user;
            }
        });
    }
    ;
    goToEdit(id) {
        this._router.navigate(['/users/edit/', id]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    login(user) {
        return this._http.post('/api/users/login', user);
    }
    register(user) {
        return this._http.post('/api/users/new', user);
    }
    getCurrentUser() {
        return this._http.get('/api/users/current');
    }
    updateUser(id, user) {
        return this._http.put('/api/users/edit/' + id, user);
    }
    getUser(id) {
        return this._http.get('/api/patient/' + id);
    }
    createAppointment(app) {
        return this._http.post('/api/users/appointment', app);
    }
    getApps() {
        return this._http.get('/api/appointments/all');
    }
    getApp(id) {
        return this._http.get('/api/appointments/' + id);
    }
    updateApp(id, app) {
        return this._http.put('/api/appointments/edit/' + id, app);
    }
    createPayment(card) {
        return this._http.post('/api/cards/new', card);
    }
    getUsers() {
        return this._http.get('/api/patients');
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register{\n    width: 400px;\n    min-height: 500px;\n    background-color: rgb(224, 221, 221);\n}\n.regi {\n    background-color: black;\n    width: 400px;\n    text-align: center;\n}\n.log{\n    background-color: black;\n    width: 400px;\n    text-align: center;\n\n}\n.login{\n    width: 400px;\n    min-height: 250px;\n    background-color: rgb(224, 221, 221);\n}\n.left{\n    display: inline-block;\n    text-align: center;\n    opacity: 0.9;\n    margin-top: 15%;\n    margin-right: 10%;\n    border-style: inset;\n}\n.right{\n    display: inline-block;\n    text-align: center;\n    vertical-align: top;\n    opacity: 0.7;\n    margin-top: 15%;\n    border-style: outset;\n}\nbody {\n    background-image: url('https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');\n    height: 100vh;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvSUFBb0k7SUFDcEksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyMSwgMjIxKTtcbn1cbi5yZWdpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4ubG9naW57XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyMSwgMjIxKTtcbn1cbi5sZWZ0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xufVxuLnJpZ2h0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xufVxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80ODYwNC9wZXhlbHMtcGhvdG8tNDg2MDQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCcpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    ngOnInit() {
        this.user = {
            email: '',
            password: ''
        };
        this.newUser = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
    }
    login() {
        this._http.login(this.user)
            .subscribe((response) => {
            if (response.result === 'success')
                this._router.navigate(['/home']);
        });
    }
    register() {
        this._http.register(this.newUser)
            .subscribe((response) => {
            if (response.result === 'success')
                this._router.navigate(['/home']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/note/note.component.css":
/*!*****************************************!*\
  !*** ./src/app/note/note.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\n    height: 100vh;\n    text-align: center;\n}\n\n.button {\n    margin-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL25vdGUvbm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDElO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/note/note.component.ts":
/*!****************************************!*\
  !*** ./src/app/note/note.component.ts ***!
  \****************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NoteComponent = class NoteComponent {
    constructor(_http, _router, _route) {
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this.app = null;
        this.errors = [];
    }
    ngOnInit() {
        this._route.params
            .subscribe((params) => {
            this._http.getApp(params.id)
                .subscribe((data) => this.app = data.appointment);
        });
    }
    cancel() {
        this._router.navigate(['/appointments/' + this.app._id]);
    }
    submit() {
        this._http.updateApp(this.app._id, {
            first_name: this.app.first_name,
            last_name: this.app.last_name,
            age: this.app.age,
            comment: this.app.comment,
            note: this.app.note
        })
            .subscribe((data) => {
            if (data.hasOwnProperty('errors')) {
                this.errors = data.errors;
            }
            else {
                this._router.navigate(['/appointments/' + this.app._id]);
            }
        });
    }
};
NoteComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-note',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/note/note.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note.component.css */ "./src/app/note/note.component.css")).default]
    })
], NoteComponent);



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    width: 500px;\n    min-height: 800px;\n    text-align: center;\n    margin-top: 3%;\n   \n}\n\n.form-row {\n    width: 500px;\n    margin-bottom: 7%;\n}\n\n.header {\n    text-align: center;\n    margin-top: 3%;\n}\n\n.comment {\n    margin-left: 120px;\n    margin-bottom: 20px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgIFxufVxuXG4uZm9ybS1yb3cge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3JTtcbn1cblxuLmhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uY29tbWVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let PaymentComponent = class PaymentComponent {
    constructor(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.card = {
            name: '',
            number: '',
            exp: '',
            cv: '',
        };
        this.errors = [];
    }
    ngOnInit() {
    }
    cancel() {
        this._router.navigate(['/home']);
    }
    submit() {
        this._http.createPayment(this.card)
            .subscribe((data) => {
            if (data.hasOwnProperty('errors')) {
                this.errors = data.errors;
            }
            else {
                this._router.navigate(['/home']);
            }
        });
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")).default]
    })
], PaymentComponent);



/***/ }),

/***/ "./src/app/view-appointment/view-appointment.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/view-appointment/view-appointment.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    width: 600px;\n    text-align: center;\n    margin-bottom: 20px;\n    margin-top: 5%;\n}\n\n.header {\n    margin-top: 3%;\n    margin-left: 80%;\n}\n\n#add-button {\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hcHBvaW50bWVudC92aWV3LWFwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYXBwb2ludG1lbnQvdmlldy1hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG4jYWRkLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/view-appointment/view-appointment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/view-appointment/view-appointment.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAppointmentComponent", function() { return ViewAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewAppointmentComponent = class ViewAppointmentComponent {
    constructor(_http, _router, _route) {
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this.app = null;
    }
    ngOnInit() {
        this._route.params
            .subscribe((params) => {
            this._http.getApp(params.id)
                .subscribe((data) => this.app = data.appointment);
        });
    }
    addNote(id) {
        this._router.navigate(['/appointments/edit/' + id]);
    }
    home() {
        this._router.navigate(['/users/appointment/all']);
    }
};
ViewAppointmentComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-appointment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-appointment.component.css */ "./src/app/view-appointment/view-appointment.component.css")).default]
    })
], ViewAppointmentComponent);



/***/ }),

/***/ "./src/app/view-patient/view-patient.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-patient/view-patient.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    text-align: center;\n    width: 25%;\n    margin-top: 8%;\n}\n\n#back-button {\n    margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wYXRpZW50L3ZpZXctcGF0aWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcGF0aWVudC92aWV3LXBhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDglO1xufVxuXG4jYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDMlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/view-patient/view-patient.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-patient/view-patient.component.ts ***!
  \********************************************************/
/*! exports provided: ViewPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientComponent", function() { return ViewPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewPatientComponent = class ViewPatientComponent {
    constructor(_http, _router, _route) {
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this.user = null;
    }
    ngOnInit() {
        this._route.params
            .subscribe((params) => {
            this._http.getUser(params.id)
                .subscribe((data) => this.user = data.user);
        });
    }
    back() {
        this._router.navigate(['/patients']);
    }
};
ViewPatientComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-patient/view-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-patient.component.css */ "./src/app/view-patient/view-patient.component.css")).default]
    })
], ViewPatientComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Long\Desktop\mean-project-test\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map