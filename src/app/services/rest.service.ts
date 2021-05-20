import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
    ) { }

  // httpHeader = {
  //   headers: new HttpHeaders({
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST, PUT",
  //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization",
  //     "Cookie": document.cookie.split('=')[1],
  //     "Thi": "1"
  //   })
  // }

  // checkCookieExists() {
  //   let cookieHeader;
    
  //   if (cookieExists) {
  //     cookieHeader = document.cookie.split('=')[1];
  //   }
  //   return cookieHeader;
  // }

  httpHeaders = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST, PUT",
    "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-methods, Origin, Content-Type, Accept, Authorization, withcredentials",
    "withCredentials": "true",
  })

  options : {} = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST, PUT",
      "Access-Control-Allow-Headers": "*",
      "withCredentials": "true",
      "token": `jwt=${document.cookie.split('=')[1]}`
    }
  }

  endPoint = 'https://dara-restaurant-api.herokuapp.com';

  getData(paramPage?: any) {
    return this.http.get(`${this.endPoint}/getAll/${paramPage}`, this.options).toPromise();
  }

  getCount() {
    return this.http.get(`${this.endPoint}/getCount`, this.options).toPromise();
  }

  sendData(dish: {}) {
    return this.http.post(`${this.endPoint}/insertDish`, dish, this.options).toPromise();
  }

  removeData(dishId: any) {
    return this.http.post(`${this.endPoint}/removeDish`, { "_id": dishId }, this.options).toPromise();
  }

  editData(dishId: any, update: {}) {
    return this.http.post(`${this.endPoint}/editDish`, {"_id": dishId, update: update}, this.options).toPromise();
  }

  searchData(search: string) {
    const params = {search: search};
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
