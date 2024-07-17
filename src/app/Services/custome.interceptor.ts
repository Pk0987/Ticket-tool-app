import { HttpInterceptorFn } from '@angular/common/http';

export const customeInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('TickestProject');
  const newReq = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    } 
  });
  return next(newReq);
};
