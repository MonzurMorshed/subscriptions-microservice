import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { SubscriptionsService } from "./subscriptions.service";
import { Subscriptions } from "./entities/subscriptions.entity";

@Controller('subscriptions')
export class SubscriptionsController {
	constructor(private readonly subscriptionsService: SubscriptionsService){}

	@Post()
	async createSubscription(
		@Res() response,
		@Body() subscription: Subscriptions
	): Promise<any>{

		const newSubscription = await this.subscriptionsService.createSubscriptions(subscription); 

		return response.status(HttpStatus.CREATED).json({
			newSubscription
		});

	}

	@Get()
	async fetchAll(@Res() response){
		const subscription = await this.subscriptionsService.findAll();
		return response.status(HttpStatus.OK).json({
			subscription
		})
	}

	@Get('/:id/:field')
	async findById(
		@Res() response,
		@Param() param
	){
		const fcolumn: string = param.field;
		const subscription = await this.subscriptionsService.findCustom({[
			fcolumn]:param.id});
		return response.status(HttpStatus.OK).json({
			subscription
		})
	}

	@Put('update')
	async update(
		@Param('id') id: number,
		@Body() updateSubscriptionDto: SubscriptionsService
	){
		return this.subscriptionsService.update(id, updateSubscriptionDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string){
		return this.subscriptionsService.remove(id);
	}
}
