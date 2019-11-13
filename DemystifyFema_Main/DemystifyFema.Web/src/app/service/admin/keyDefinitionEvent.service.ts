import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
//import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Global } from '../../common/global';
import { createHttpParams } from '../../common/http-params';

import { KeyDefinitionEvent, GetKeyDefinitionEventRequest } from '../../model/keyDefinitionEvent';

@Injectable()
export class KeyDefinitionEventAdminService {

    //constructor(private _http: Http) { }

    constructor(private _httpClient: HttpClient) { }

    _global: Global = new Global();

    getKeyDefinitionEvent(getKeyDefinitionEventRequest: GetKeyDefinitionEventRequest): Observable<any> {
        //let headers = new Headers({ 'Authorization': this._global.getToken() });

        //let search = new URLSearchParams();
        //search.set('KeyDefinitionEventId', (getKeyDefinitionEventRequest.KeyDefinitionEventId != null) ? getKeyDefinitionEventRequest.KeyDefinitionEventId.toString() : null);
        //search.set('DefinitionEventName', getKeyDefinitionEventRequest.DefinitionEventName);
        //search.set('SearchText', getKeyDefinitionEventRequest.SearchText);
        //search.set('IsActive', (getKeyDefinitionEventRequest.IsActive != null) ? getKeyDefinitionEventRequest.IsActive.toString() : null);
        //search.set('PageNumber', (getKeyDefinitionEventRequest.PageNumber != null) ? getKeyDefinitionEventRequest.PageNumber.toString() : null);
        //search.set('PageSize', (getKeyDefinitionEventRequest.PageSize != null) ? getKeyDefinitionEventRequest.PageSize.toString() : null);
        //search.set('OrderBy', getKeyDefinitionEventRequest.OrderBy);
        //search.set('OrderByDirection', getKeyDefinitionEventRequest.OrderByDirection);

        //let requestOptions = new RequestOptions();
        //requestOptions.headers = headers;
        //requestOptions.search = search;

        //return this._http.get(Global.API_SITE + "admin/api/keydefinitionevents", requestOptions)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));

        let params: HttpParams = createHttpParams({
            KeyDefinitionEventId: (getKeyDefinitionEventRequest.KeyDefinitionEventId != null) ? getKeyDefinitionEventRequest.KeyDefinitionEventId.toString() : null,
            DefinitionEventName: getKeyDefinitionEventRequest.DefinitionEventName,
            SearchText: getKeyDefinitionEventRequest.SearchText,
            IsActive: (getKeyDefinitionEventRequest.IsActive != null) ? getKeyDefinitionEventRequest.IsActive.toString() : null,
            PageNumber: (getKeyDefinitionEventRequest.PageNumber != null) ? getKeyDefinitionEventRequest.PageNumber.toString() : null,
            PageSize: (getKeyDefinitionEventRequest.PageSize != null) ? getKeyDefinitionEventRequest.PageSize.toString() : null,
            OrderBy: getKeyDefinitionEventRequest.OrderBy,
            OrderByDirection: getKeyDefinitionEventRequest.OrderByDirection
        });

        return this._httpClient.get(Global.API_SITE + "admin/api/keydefinitionevents",{ params: params });
    }

    addKeyDefinitionEvent(model: any): Observable<any> {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/keydefinitionevents/add", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));

        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(Global.API_SITE + "admin/api/keydefinitionevents/add",body, { headers: headers });
    }

    updateKeyDefinitionEvent(model: any): Observable<any> {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/keydefinitionevents/update", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));

        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(Global.API_SITE + "admin/api/keydefinitionevents/update",body, { headers: headers });
    }

    deleteKeyDefinitionEvent(model: any): Observable<any> {
        //let body = JSON.stringify(model);
        //let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this._global.getToken() });
        //let options = new RequestOptions({ headers: headers });
        //return this._http.post(Global.API_SITE + "admin/api/keydefinitionevents/delete", body, options)
        //    .pipe(map((response: Response) => <any>response.json()), catchError(e => throwError(e)));

        let body = JSON.stringify(model);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._httpClient.post(Global.API_SITE + "admin/api/keydefinitionevents/delete",body, { headers: headers });
    }
}