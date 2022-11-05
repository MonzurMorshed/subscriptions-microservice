import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '',
      database: 'subscriptions',
      entities: [Subscription],
      synchronize: true,
      dropSchema: false
    }),
    SubscriptionsModule
  ],
  providers: [],
})
export class AppModule {}
