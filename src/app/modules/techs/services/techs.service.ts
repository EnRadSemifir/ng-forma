import { HttpClient } from '@angular/common/http';
import { Tech } from './../modeles/techs';
import { ResourceService } from './../../api/resource.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechsService extends ResourceService<string, Tech> {
  constructor(private http: HttpClient) {
    super(http, 'techs');
  }
}
