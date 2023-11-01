import { Controller, Post, UseGuards, Body, Patch, Get } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthRepository } from './auth.repository';
import { CreateUserDto, UserRegisterDto } from '../users/dto/create-user.dto';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { ForgetPasswordDto } from '../users/dto/forget-password.dto';
import { ForgetPasswordChangeDto } from '../users/dto/forget-password-change.dto';

@Controller('auth')
export class AuthController {
    constructor(private authRepository: AuthRepository) { }


    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() loginUserDto: UserLoginDto) {
        console.log("loginUserDto: ", loginUserDto)
        return true;
        // return this.authRepository.login(loginUserDto);
    }

    // @Post('invite')
    // async invite(@Body() registerUserDto: UserRegisterDto) {
    //     return this.authRepository.invite(registerUserDto);
    // }

    // @Post('register')
    // async register(@Body() registerUserDto: CreateUserDto) {
    //     return this.authRepository.register(registerUserDto);
    // }

    // @Post('forget-password')
    // async forgetPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
    //     return this.authRepository.forgetPassword(forgetPasswordDto);
    // }

    // @Patch('forget-password-change')
    // async forgetPasswordChange(@Body() forgetPasswordChangeDto: ForgetPasswordChangeDto) {
    //     return this.authRepository.forgetPasswordChange(forgetPasswordChangeDto);
    // }

    @Get('test')
    async test() {
        return ("Hello World!! Backend is working!");
    }
}
