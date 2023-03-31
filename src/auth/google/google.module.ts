import { Module } from '@nestjs/common';
import { GoogleService } from './google.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  controllers: [],
  providers: [GoogleService, GoogleStrategy],
})
export class GoogleModule {}
