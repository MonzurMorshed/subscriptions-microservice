import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionsDto } from './create-subscriptions.dto';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionsDto) {
  id: number;
}
