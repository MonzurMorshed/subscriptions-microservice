import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { SubscriptionsService } from "./subscriptions.service";
import { Subscriptions } from "./entities/subscriptions.entity";
import { UpdateSubscriptionDto } from "./dto/update-subscriptions.dto";

@Controller('subscriptions')
export class SubscriptionsController {
	constructor(private readonly subscriptionsService: SubscriptionsService){}

	@Post('create')
	async createSubscription(
		@Res() response,
		@Body() subscription: Subscriptions
	): Promise<any>{

		const newSubscription = await this.subscriptionsService.createSubscriptions(subscription); 

		return response.status(HttpStatus.CREATED).json({
			message: 'success',
			statusCode: 200,
			newSubscription
		});

	}

	@Get('all')
	async fetchAll(@Res() response){
		const subscription = await this.subscriptionsService.findAll();
		console.log(subscription);
		return response.status(HttpStatus.OK).json({
			subscription
		})
	}

	@Get('/:id')
	findOne(@Param('id') id: number) {
		return this.subscriptionsService.findOne({id});
	}

	@Get('/:id/:field')
	async findById(
		@Res() response,
		@Param() param
	){
		const fcolumn: string = param.field;
		const subscription = await this.subscriptionsService.findCustom({[fcolumn]:param.id});
		return response.status(HttpStatus.OK).json({
			subscription
		})
	}

	@Put('update/:id')
	async update(
		@Param('id') id: number,
		@Body() subscriptions: Subscriptions
	){	
		return this.subscriptionsService.update(id, subscriptions);
	}

	@Delete(':id')
	async remove(@Param('id') id: number){
		return this.subscriptionsService.remove(id);
	}
}
