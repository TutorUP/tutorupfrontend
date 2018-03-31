import { Component, OnInit, Inject } from '@angular/core';
// import { User } from '../models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  // providers: [User]
})
export class ProfilePageComponent implements OnInit {

	public name: string;
	public email: string;
	public major: string;
	public minor: string;
	public subjects: string[];
	public bio: string;
	public availability: string;
	public tags: string[];
	public rating: number;

  constructor() 
  { 
  	// this.user = new User('John Doe', 'doe18@up.edu', 'Finance', 'Economics', ['BUS 200', 'ENG 112', 'THE 105', 'BUS 364'],
  	// 	'I have done a lot of tutoring and I look forward to working with you!', 'MWF 2:00-5:00pm', ['SARC Approved', 'Paid'], 3.5);
  }

  ngOnInit() 
  { 

  	this.name = 'John Doe';
  	this.email = 'doej19@up.edu';
  	this.major = 'Finance';
  	this.minor = 'Economics';
  	this.subjects = ['BUS 200', 'ENG 112', 'THE 105', 'BUS 364'];
  	this.bio = 'I have done a lot of tutoring and I look forward to working with you!';
  	this.availability = 'MWF 2:00 - 5:00pm';
  	this.tags = ['SARC Approval', 'Paid'];
  	this.rating = 4.5;
  }

  /**
   * calculateStars - converts number rating to string
   * so star icons are displayed
   *
   * @return string - star representation of rating
   */
  calculateStars(): string
  {
  	let starString: string = '';
  	for (let i = 0; i < Math.floor(this.rating); i++)
  	{
  		starString = starString.concat('star ');
  	}

  	if (this.rating.toString().indexOf('.5') != -1)
  	{
  		starString = starString.concat('star_half');
  	}
  	return starString;
  }

}
