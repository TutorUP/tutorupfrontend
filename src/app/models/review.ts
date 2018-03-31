export class Review {
	// need some sort of foreign key to user
	reviewer: string;
	date: string;
	rating: number;
	description: string;

	constructor(reviewer: string, date: string, rating: number, description: string)
	{
		this.reviewer = reviewer;
		this.date = date;
		this.rating = rating;
		this.description = description;
	}

}
