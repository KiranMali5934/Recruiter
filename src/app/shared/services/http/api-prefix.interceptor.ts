import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  objCredential: any = [];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var credentials = localStorage.getItem('credentials');

    if (credentials != null && credentials != '' && credentials != undefined) {
      this.objCredential = JSON.parse(credentials);

      if (!/^(http|https):/i.test(request.url)) {
        request = request.clone({ url: environment.serverUrl + request.url });
      } else {
        request = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + this.objCredential.Token),
        });
      }
    }
    return next.handle(request);
  }
}
