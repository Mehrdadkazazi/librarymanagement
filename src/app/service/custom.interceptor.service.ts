import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()

export class CustomInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.authService.getToken();

    if (!!token) {

      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer' + token,
        }
      });

    }

    return next.handle(request);
    //   .pipe(
    //   catchError((error: HttpErrorResponse) => {
    //
    //     const errorModel = {
    //       ...error.error,
    //       codeStatus: error.status
    //     };
    //
    //     return throwError(errorModel);
    //   })
    // );
  }
}
