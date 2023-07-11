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

  private apiKey : string = '994b274459543a5ad12662a2f287a163';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   const modifiedReq = request.clone({
    setHeaders : {
      'api-key' : this.apiKey
    }
   });

    return next.handle(modifiedReq);
  }
}
