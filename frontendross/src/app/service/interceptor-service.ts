import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('auth_token');
    if (!token) {
          return next.handle(req);
        }
    const headers = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
    return next.handle(headers);
      }
    }
