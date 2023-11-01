import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class IgnoreInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    // if it should not be ignored, execute the interceptor
    return next.handle().pipe(
      // interceptor logic goes here
    );
  }
}
