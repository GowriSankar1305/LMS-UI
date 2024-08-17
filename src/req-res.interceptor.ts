import { HttpInterceptorFn } from '@angular/common/http';
import { AppConstants } from './types/AppConstants';
import { inject } from '@angular/core';
import { TokenService } from './services/token.service';

export const reqResInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const request = req.clone({
    setHeaders: {
      Authorization: AppConstants.BEARER + tokenService.fetchToken(AppConstants.TOKEN_KEY)
    }
  });
  return next(request);
};
