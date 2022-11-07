import { Module } from '@nestjs/common';
import { Subscriptions } from './subscriptions/entities/subscriptions.entity';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '',
      database: 'subscriptions',
      entities: [Subscriptions],
      synchronize: true,
      dropSchema: false
    }),
    SubscriptionsModule
  ],
  providers: [],
})
export class AppModule {}
