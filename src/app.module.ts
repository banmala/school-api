import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./components/auth/auth.module";
import { UsersModule } from "./components/users/users.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AuthInterceptor } from "./interceptor/auth.interceptor";
import { typeOrmConfigs } from "./configs/typeorm.config";
import { UserActivityModule } from "./components/user_activity/user_activity.module";
import { PermissionsModule } from "./components/permissions/permissions.module";
import { RolesModule } from "./components/roles/roles.module";
import { SendEmailService } from "./utils/send-email.service";
import { MainModule } from "./main/main.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { TeachersModule } from "./components/teacher/teacher.module";
import { AdminsModule } from "./components/admin/admin.module";
@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot(typeOrmConfigs),
		AuthModule,
		UsersModule,
		// UserActivityModule,
		PermissionsModule,
		RolesModule,
		// CustomersModule,
		// EmailsModule,
		MainModule,
		// MediaModule,
		// DashboardModule,
		TeachersModule,
		AdminsModule
	],
	providers: [
		// SendTestimonialRequest,
		// GenerateFollowupRequestEmailRepository,
		// SendEmailService,
		{
			provide: APP_INTERCEPTOR,
			useClass: AuthInterceptor,
		},
	],
})
export class AppModule {}
