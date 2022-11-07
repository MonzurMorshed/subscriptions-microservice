import { IsNotEmpty } from "class-validator";
import { PrimaryGeneratedColumn, Column, Entity, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class Subscriptions {

	@PrimaryGeneratedColumn()
	id: number;
	
	@IsNotEmpty()
	@Column()
	businessId: number;
	
	@IsNotEmpty()
	@Column()
	applicationId: number;
	
	@IsNotEmpty()	
	@Column()
	subscriptionKey: string;
	
	@IsNotEmpty()	
	// 1 = monthly, 2 = yearly
	@Column()
	planType: number;
	
	@IsNotEmpty()
	@Column()
	amount: number;
	
	@IsNotEmpty()
	@Column()
	currency: string;

	@Column()
	startDate: Date;

	@Column()
	endDate: Date;

	@Column()
	createdBy: string;

	@CreateDateColumn()
	created_at: Date; // Creation date

	@UpdateDateColumn()
	updated_at: Date; // Last updated date

	@DeleteDateColumn()
	deleted_at: Date; // Deletion date

}
