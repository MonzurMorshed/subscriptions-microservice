import { IsNotEmpty } from "class-validator";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity
export class SubscriptionEntity {

	@PrimaryGeneratedColumn()
	id: number;
	
	@IsNotEmpty
	@column
	businessId: number;
	
	@IsNotEmpty	
	@column
	applicationId: number;
	
	@IsNotEmpty	
	@column
	subscriptionKey: number;
	
	@IsNotEmpty	
	// 1 = monthly, 2 = yearly
	@column
	planType: number;
	
	@IsNotEmpty
	@Column
	amount: number;
	
	@IsNotEmpty
	@Column
	currency: string;

	@Column
	startDate: Date;

	@Column
	endDate: Date;

	@Column
	createdBy: string;

	@Column
	createdAt: Date;

	@Column
	updatedAt: Date;

}
