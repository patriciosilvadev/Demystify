"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
var http_1 = require("@angular/common/http");
var global_1 = require("../../common/global");
var http_params_1 = require("../../common/http-params");
var FIPBReviewUserService = /** @class */ (function () {
    //constructor(private _http: Http) { }
    function FIPBReviewUserService(_httpClient) {
        this._httpClient = _httpClient;
        this._global = new global_1.Global();
    }
    FIPBReviewUserService.prototype.getFIPBReview = function (getFIPBReviewRequest) {
        //let headers = new Headers({ 'Authorization': this._global.getUserToken() });
        //let search = new URLSearchParams();
        //search.set('FIPBReviewId', (getFIPBReviewRequest.FIPBReviewId != null) ? getFIPBReviewRequest.FIPBReviewId.toString() : null);
        //search.set('SearchText', getFIPBReviewRequest.SearchText);
        //search.set('IsActive', (getFIPBReviewRequest.IsActive != null) ? getFIPBReviewRequest.IsActive.toString() : null);
        //search.set('PageNumber', (getFIPBReviewRequest.PageNumber != null) ? getFIPBReviewRequest.PageNumber.toString() : null);
        //search.set('PageSize', (getFIPBReviewRequest.PageSize != null) ? getFIPBReviewRequest.PageSize.toString() : null);
        //search.set('OrderBy', getFIPBReviewRequest.OrderBy);
        //search.set('OrderByDirection', getFIPBReviewRequest.OrderByDirection);
        //let requestOptions = new RequestOptions();
        //requestOptions.headers = headers;
        //requestOptions.search = search;
        //return this._http.get(Global.API_SITE + "user/api/fipbreviews", requestOptions)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var params = http_params_1.createHttpParams({
            FIPBReviewId: (getFIPBReviewRequest.FIPBReviewId != null) ? getFIPBReviewRequest.FIPBReviewId.toString() : null,
            SearchText: getFIPBReviewRequest.SearchText,
            IsActive: (getFIPBReviewRequest.IsActive != null) ? getFIPBReviewRequest.IsActive.toString() : null,
            PageNumber: (getFIPBReviewRequest.PageNumber != null) ? getFIPBReviewRequest.PageNumber.toString() : null,
            PageSize: (getFIPBReviewRequest.PageSize != null) ? getFIPBReviewRequest.PageSize.toString() : null,
            OrderBy: getFIPBReviewRequest.OrderBy,
            OrderByDirection: getFIPBReviewRequest.OrderByDirection
        });
        return this._httpClient.get(global_1.Global.API_SITE + "user/api/fipbreviews", { params: params });
    };
    FIPBReviewUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FIPBReviewUserService);
    return FIPBReviewUserService;
}());
exports.FIPBReviewUserService = FIPBReviewUserService;
//# sourceMappingURL=fIPBReview.service.js.map