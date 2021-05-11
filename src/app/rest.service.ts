import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
    ) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  options : {} = {
    headers: this.httpHeader
  }

  endPoint = 'https://dara-restaurant-api.herokuapp.com';

  getData(paramPage?: any) {
    // const params = new HttpParams().set('page', paramPage);
    return this.http.get(`${this.endPoint}/getAll/${paramPage}`).toPromise();
  }

  getCount() {
    return this.http.get(`${this.endPoint}/getCount`).toPromise();
  }

  sendData(dish: {}) {
    return this.http.post(`${this.endPoint}/insertDish`, dish, this.options).toPromise();
  }

  removeData(dishId: any) {
    return this.http.post(`${this.endPoint}/removeDish`, { "_id": dishId }, this.options).toPromise();
  }

  editData(dishId: any, update: {}) {
    return this.http.post(`${this.endPoint}/editDish`, {"_id": dishId, update: update}).toPromise();
  }

  searchData(search: string) {
    const params = {search: search}
    return this.http.get(`${this.endPoint}/searchDish`, {params}).toPromise();
  }

  httpError(error: any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
