import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { Subscriptions } from './entities/subscriptions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriptions])],
  providers: [SubscriptionsService],
  controllers: [SubscriptionsController]
})

export class SubscriptionsModule {}