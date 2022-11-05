import { Controller } from '@nestjs/common';

@Controller('subscriptions')
export class SubscriptionsController {
	constructor(private readonly subscriptionService: SubscriptionService){}

	@Post()
	async createSubscription(
		@Res() response,
		@Body() data: Subscription
	){

		const newSubscription = awit this.subscriptionService.createSubscription(data); 

		return response.status(HttpStatus.CREATED).json({
			newSubscription
		});

	}

	@Get()
	async fetchAll(@Res() response){
		const subscription = await this.subscriptionService.findAll();
		return response.status(HttpStatus.OK).json({
			subscription
		})
	}

	@Get('/:id//:field')
	async findById(
		@Res() response,
		@Param param
	){
		const subscription = await this.subscriptionService.findAll();
		return response.status(HttpStatus.OK).json({
			subscription
		})
	}

	@Put('update')
	async update(
		@Param('id') id: string,
		@Body() updateSubscriptionDto: updateSubscriptionDto
	){
		return this.subscriptionService.update(id, updateSubscriptionDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string){
		return this.subscriptionService.remove(id);
	}
}
