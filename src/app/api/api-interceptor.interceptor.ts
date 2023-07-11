import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {

  private token : string = ' eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRiMjc0NDU5NTQzYTVhZDEyNjYyYTJmMjg3YTE2MyIsInN1YiI6IjY0YTdmY2JiOTY1MjIwMDEzYTIyZWM1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CgcUJctl6V-qR01YdaZX-7EHGSsQQGCNzuIuzxrus5M';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   const modifiedReq = request.clone({
    setHeaders : {
      'Authorization' : ' Bearer' + this.token,
    }
   });

    return next.handle(modifiedReq);
  }
}
