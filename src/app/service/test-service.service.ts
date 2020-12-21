import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) { }

  getJson () {
    return this.http.get('/api')
  }

}
