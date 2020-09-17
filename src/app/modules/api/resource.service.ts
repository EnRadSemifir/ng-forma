import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Resource } from './resource';

@Injectable({
    providedIn: 'root'
})
export class ResourceService<I, T extends Resource<I>>{
    constructor(private httpClient: HttpClient, private endpoint: string) { }

    list(): Observable<T[]> {
        return this.httpClient.get<T[]>(`${environment.apiBaseUrl}/${this.endpoint}`);
    }

    create(item: T): Observable<T> {
        return this.httpClient.post<T>(`${environment.apiBaseUrl}/${this.endpoint}`, item);
    }

    update(item: T): Observable<T> {
        return this.httpClient.put<T>(`${environment.apiBaseUrl}/${this.endpoint}`, item);
    }

    get(id: I): Observable<T> {
        return this.httpClient.get<T>(`${environment.apiBaseUrl}/${this.endpoint}/${id}`);
    }

    delete(id: I) {
        return this.httpClient.delete(`${environment.apiBaseUrl}/${this.endpoint}/${id}`)
    }
}
