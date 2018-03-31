
export class User 
{
	public name: string;
	public email: string;
	public major: string;
	public minor: string;
	public subjects: string[];
	public bio: string;
	public availability: string;
	public tags: string[];
	public rating: number;

	// public reviews: Review[];
	// how to do image??

	constructor (name: string, email: string, major: string, minor: string, subjects: string[], 
		bio: string, availability: string, tags: string[], rating: number)
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
	}
}
