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
var http_1 = require("@angular/common/http");
var global_1 = require("../../common/global");
var SubscriptionPolicyAdminService = /** @class */ (function () {
    function SubscriptionPolicyAdminService(_httpClient) {
        this._httpClient = _httpClient;
        this._global = new global_1.Global();
    }
    SubscriptionPolicyAdminService.prototype.addTermsCondition = function (model) {
        var body = model;
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(global_1.Global.API_SITE + "admin/api/subscriptionPolicy/add", body, { headers: headers });
    };
    SubscriptionPolicyAdminService.prototype.getTermsCondition = function () {
        return this._httpClient.get(global_1.Global.API_SITE + "admin/api/getSubscriptionPolicy");
    };
    SubscriptionPolicyAdminService.prototype.getTermsCondition_Guest = function () {
        return this._httpClient.get(global_1.Global.API_SITE + "guest/api/getSubscriptionPolicy_guest");
    };
    SubscriptionPolicyAdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SubscriptionPolicyAdminService);
    return SubscriptionPolicyAdminService;
}());
exports.SubscriptionPolicyAdminService = SubscriptionPolicyAdminService;
//# sourceMappingURL=subscriptionPolicy.js.map