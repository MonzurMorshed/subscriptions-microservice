import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Subscriptions } from './entities/subscriptions.entity';


@Injectable()
export class SubscriptionsService {
	constructor(
		@InjectRepository(Subscriptions) 
		private readonly subscriptionRepository: Repository<Subscriptions>
	){}

	async createSubscriptions(options){
		this.subscriptionRepository.save(options);
	}

	async find(options = {}){
		return this.subscriptionRepository.find(options);
	}

	async findAll(options = {}){
		return this.subscriptionRepository.find(options);
	}

	async findOne(id): Promise<Subscriptions>{
		return this.subscriptionRepository.findOne({where:id});
    }

	async update(id: number, options){
		return this.subscriptionRepository.update(id, options);
	}

	async findCustom(){

	}

	async reomve(){

	}
}
