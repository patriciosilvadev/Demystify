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
var AllDefinitionAdminService = /** @class */ (function () {
    //constructor(private _http: Http) { }
    function AllDefinitionAdminService(_httpClient) {
        this._httpClient = _httpClient;
        this._global = new global_1.Global();
    }
    AllDefinitionAdminService.prototype.getAllDefinition = function (getAllDefinitionRequest) {
        //let headers = new Headers({ 'Authorization': this._global.getToken() });
        //let search = new URLSearchParams();
        //search.set('Id', (getAllDefinitionRequest.Id != null) ? getAllDefinitionRequest.Id.toString() : null);
        //search.set('ActId', (getAllDefinitionRequest.ActId != null) ? getAllDefinitionRequest.ActId.toString() : null);
        //search.set('SearchText', getAllDefinitionRequest.SearchText);
        //search.set('IsActive', (getAllDefinitionRequest.IsActive != null) ? getAllDefinitionRequest.IsActive.toString() : null);
        //search.set('PageNumber', (getAllDefinitionRequest.PageNumber != null) ? getAllDefinitionRequest.PageNumber.toString() : null);
        //search.set('PageSize', (getAllDefinitionRequest.PageSize != null) ? getAllDefinitionRequest.PageSize.toString() : null);
        //search.set('OrderBy', getAllDefinitionRequest.OrderBy);
        //search.set('OrderByDirection', getAllDefinitionRequest.OrderByDirection);
        //let requestOptions = new RequestOptions();
        //requestOptions.headers = headers;
        //requestOptions.search = search;
        //return this._http.get(Global.API_SITE + "admin/api/alldefinitions", requestOptions)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var params = http_params_1.createHttpParams({
            Id: (getAllDefinitionRequest.Id != null) ? getAllDefinitionRequest.Id.toString() : null,
            ActId: (getAllDefinitionRequest.ActId != null) ? getAllDefinitionRequest.ActId.toString() : null,
            SearchText: getAllDefinitionRequest.SearchText,
            IsActive: (getAllDefinitionRequest.IsActive != null) ? getAllDefinitionRequest.IsActive.toString() : null,
            PageNumber: (getAllDefinitionRequest.PageNumber != null) ? getAllDefinitionRequest.PageNumber.toString() : null,
            PageSize: (getAllDefinitionRequest.PageSize != null) ? getAllDefinitionRequest.PageSize.toString() : null,
            OrderBy: getAllDefinitionRequest.OrderBy,
            OrderByDirection: getAllDefinitionRequest.OrderByDirection
        });
        return this._httpClient.get(global_1.Global.API_SITE + "admin/api/alldefinitions", { params: params });
    };
    AllDefinitionAdminService.prototype.addAllDefinition = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/alldefinitions/add", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/alldefinitions/add", body, { headers: headers });
    };
    AllDefinitionAdminService.prototype.updateAllDefinition = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/alldefinitions/update", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/alldefinitions/update", body, { headers: headers });
    };
    AllDefinitionAdminService.prototype.deleteAllDefinition = function (model) {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/alldefinitions/delete", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));
        var body = JSON.stringify(model);
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/alldefinitions/delete", body, { headers: headers });
    };
    AllDefinitionAdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AllDefinitionAdminService);
    return AllDefinitionAdminService;
}());
exports.AllDefinitionAdminService = AllDefinitionAdminService;
//# sourceMappingURL=allDefinition.service.js.map