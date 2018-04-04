
import { Review } from './review';

export class User 
{
	name: string;
	email: string;
	major: string;
	minor: string;
	subjects: string[] = [];
	bio: string;
	availability: string;
	tags: string[] = [];
	rating: number;
	reviews: Review[] = [];
	imageURL: string;

	constructor (name: string, email: string, major: string, minor: string, subjects: string[], 
		bio: string, availability: string, tags: string[], rating: number, imageURL?: string)
	{
		this.name = name;
		this.email = email;
		this.major = major;
		this.minor = minor; 
		for (let subject of subjects)
		{
			this.subjects.push(subject);
		}
		this.bio = bio;
		this.availability = availability;
		for (let tag of tags)
		{
			this.tags.push(tag);
		}
		this.rating = rating;
		this.imageURL = imageURL;
	}
}
