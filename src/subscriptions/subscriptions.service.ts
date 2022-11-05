import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionsService {
	constructor(
		@InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>
	){

	}

	async save(options){
		this.subscriptionRepository.save(options);
	}

	async find(options = {}){
		return this.subscriptionRepository.find(options);
	}

	async findOne(options){
		return this.subscriptionRepository.findOne(options);
	}

	async update(id: number, options){
		return this.subscriptionRepository.update(id, options);
	}
}
