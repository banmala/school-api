import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthRepository } from "../components/auth/auth.repository";

@Injectable()
export class AuthInterceptor implements NestInterceptor {
	constructor(private authRepository: AuthRepository) {}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const req = context.switchToHttp().getRequest();
		let tokenArray = req.headers.authorization;
		if (tokenArray) {
			const decodedToken = this.authRepository.decodeToken(
				tokenArray.split(" ")[1]
			).user;
			req.body["user"] = decodedToken;
		}

		return next.handle().pipe();
	}
}
