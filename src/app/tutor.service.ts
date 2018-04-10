import { Injectable } from '@angular/core';

@Injectable()
export class TutorService {

	constructor() { }

	/**
	 * calculateStars - converts number rating to string
	 * so star icons are displayed
	 *
	 * @param number - number to convert
	 * @return string - star representation of rating
	 */
	calculateStars(rating: number): string
	{
		let starString: string = '';
		for (let i = 0; i < Math.floor(rating); i++)
		{
			starString = starString.concat('star ');
		}

		if (rating.toString().indexOf('.5') != -1)
		{
			starString = starString.concat('star_half ');
		}

		for (let i = Math.ceil(rating); i < 5; i++)
		{
			starString = starString.concat('star_outline ');
		}
		return starString;
	}

	getGradeLevels(): string[]
	{
		return [
			'Freshman',
			'Sophomore',
			'Junior',
			'Senior',
			'Graduate'
		];
	}


	getTags(): string[] 
	{ 
		return [
			'SARC Tutor',
			'Paid',
			'Volunteer',
			'Athletics Tutor',
			'ROTC Tutor'
		];
	}

	getMajors(): string[] 
	{
	 return [
	  'Accounting',
		'Biology',
		'Chemistry',
		'Civil Engineering',
		'Communication',
		'Computer Science',
		'Economics',
		'Electrical Engineering',
		'Elementary Education',
		'English',
		'Environmental Ethics & Policy',
		'Environmental Science',
		'Finance',
		'French Studies',
		'General Studies',
		'German Studies',
		'History',
		'Marketing',
		'Mathematics',
		'Mechanical Engineering',
		'Music',
		'Nursing',
		'Operations & Technology Management',
		'Organizational Communication',
		'Philosophy',
		'Physics',
		'Political Science',
		'Psychology',
		'Secondary Education',
		'Social Work',
		'Sociology',
		'Sociology/Criminology Concentration',
		'Theatre',
		'Theology'
		];
	}

}
