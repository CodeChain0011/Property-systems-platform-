import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  Res,
  HttpCode,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './dto/login.dto';

const REFRESH_COOKIE = 'refresh_token';
const COOKIE_TTL_MS = 30 * 24 * 60 * 60 * 1000;

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.login(dto.email, dto.password);
    const { refresh_token, ...response } = result;
    res.cookie(REFRESH_COOKIE, refresh_token, this.cookieOptions());
    return response;
  }

  @Post('refresh')
  @HttpCode(200)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const rawToken = (req as any).cookies?.[REFRESH_COOKIE];
    if (!rawToken) throw new UnauthorizedException('AUTH_REFRESH_MISSING');
    const result = await this.authService.refresh(rawToken);
    const { refresh_token, ...response } = result;
    res.cookie(REFRESH_COOKIE, refresh_token, this.cookieOptions());
    return response;
  }

  @Post('logout')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  async logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const rawToken = (req as any).cookies?.[REFRESH_COOKIE];
    const user = (req as any).user;
    await this.authService.logout(user.personId, rawToken);
    res.clearCookie(REFRESH_COOKIE, { path: '/' });
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe(@Req() req: Request) {
    const user = (req as any).user;
    return this.authService.getMe(user.personId);
  }

  private cookieOptions() {
    return {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
      maxAge: COOKIE_TTL_MS,
      path: '/',
    };
  }
}
