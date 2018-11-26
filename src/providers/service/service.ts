import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
@Injectable()
export class ServiceProvider {

  constructor(public http: Http) {

  }

  public savePosition(position): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers });

    return this.http.post('http://localhost:3050/positions', "latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude, options);
  }

}
