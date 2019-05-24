import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders
} from '@angular/common/http';

import { TokenService } from '../../services/token.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders({
            Authorization: this.tokenService.buscarToken()
        });

        const authReq = req.clone({ headers: headers });

        return next.handle(authReq);
    }
}
