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
var FetersCodeAdminService = /** @class */ (function () {
    //constructor(private _http: Http) { }
    function FetersCodeAdminService(_httpClient) {
        this._httpClient = _httpClient;
        this._global = new global_1.Global();
    }
    FetersCodeAdminService.prototype.getFetersCode = function (getFetersCodeRequest) {
        //let headers = new Headers({ 'Authorization': this._global.getToken() });
        //let search = new URLSearchParams();
        //search.set('FetersCodeId', (getFetersCodeRequest.FetersCodeId != null) ? getFetersCodeRequest.FetersCodeId.toString() : null);
        //search.set('SearchText', getFetersCodeRequest.SearchText);
        //search.set('IsActive', (getFetersCodeRequest.IsActive != null) ? getFetersCodeRequest.IsActive.toString() : null);
        //search.set('PageNumber', (getFetersCodeRequest.PageNumber != null) ? getFetersCodeRequest.PageNumber.toString() : null);
        //search.set('PageSize', (getFetersCodeRequest.PageSize != null) ? getFetersCodeRequest.PageSize.toString() : null);
        //search.set('OrderBy', getFetersCodeRequest.OrderBy);
        //search.set('OrderByDirection', getFetersCodeRequest.OrderByDirection);
        //let requestOptions = new RequestOptions();
        //requestOptions.headers = headers;
        //requestOptions.search = search;
        //return this._http.get(Global.API_SITE + "admin/api/fetersCodes", requestOptions)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var params = http_params_1.createHttpParams({
            FetersCodeId: (getFetersCodeRequest.FetersCodeId != null) ? getFetersCodeRequest.FetersCodeId.toString() : null,
            SearchText: getFetersCodeRequest.SearchText,
            IsActive: (getFetersCodeRequest.IsActive != null) ? getFetersCodeRequest.IsActive.toString() : null,
            PageNumber: (getFetersCodeRequest.PageNumber != null) ? getFetersCodeRequest.PageNumber.toString() : null,
            PageSize: (getFetersCodeRequest.PageSize != null) ? getFetersCodeRequest.PageSize.toString() : null,
            OrderBy: getFetersCodeRequest.OrderBy,
            OrderByDirection: getFetersCodeRequest.OrderByDirection
        });
        return this._httpClient.get(global_1.Global.API_SITE + "admin/api/fetersCodes", { params: params });
    };
    FetersCodeAdminService.prototype.addFetersCode = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/fetersCodes/add", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/fetersCodes/add", body, { headers: headers });
    };
    FetersCodeAdminService.prototype.updateFetersCode = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/fetersCodes/update", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/fetersCodes/update", body, { headers: headers });
    };
    FetersCodeAdminService.prototype.deleteFetersCode = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/fetersCodes/delete", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/fetersCodes/delete", body, { headers: headers });
    };
    FetersCodeAdminService.prototype.fileUpload = function (formData) {
        //let headers = new Headers();
        //headers.append('Authorization', this._global.getToken());
        //let requestOptions = new RequestOptions();
        //requestOptions.headers = headers;
        //return this._http.post(Global.API_SITE + "admin/api/fetersCodes/uploadfiles", formData, requestOptions)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/fetersCodes/uploadfiles", formData);
    };
    FetersCodeAdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FetersCodeAdminService);
    return FetersCodeAdminService;
}());
exports.FetersCodeAdminService = FetersCodeAdminService;
//# sourceMappingURL=fetersCode.service.js.map