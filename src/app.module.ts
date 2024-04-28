import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      password: 'password',
      username: 'user',
      entities: [],
      database: 'mydatabase',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    JwtModule.register({
      global: true,
      secret: 'your secret key and should be outside the source code',
      signOptions: { expiresIn: '30s' },
    }),
    AuthModule,
  ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
