import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../models/user';
import { Review } from '../models/review';
import { TutorService } from '../tutor.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {

  tutorService: TutorService = new TutorService();

	user: User = new User('John Doe', 'doe18@up.edu', 'Finance', 'Economics', ['BUS 200', 'MTH 112', 'THE 105', 'BUS 364'], 
		'I have done a lot of tutoring and I look forward to working with you!', 'MWF 2:00-5:00pm', ['SARC Approved', 'Paid'], 3.5);

	review1: Review = new Review('Mandy Smith', '11/30/16', 3.5, 'Lorem ipsum dolor sit amet, nec veri putant malorum ea, his et sale gubergren. Sed ei summo oportere, pro an sonet ludus, duo no graece animal evertitur. Ferri invidunt in his, verear ornatus fabellas eu per. Duo id velit ancillae, brute omittantur his an.');
	review2: Review = new Review('Josh Anderson', '2/15/17', 5, 'No quo everti hendrerit disputando. Aperiri probatus percipitur ad quo, movet commodo evertitur est ea. Mentitum offendit qualisque ea quo, ei meis harum invenire per. Vim alia rebum ut, ex cum saepe aliquid intellegat.');

  constructor() 
  { }

  ngOnInit() 
  { 
  	this.user.reviews.push(this.review1);
  	this.user.reviews.push(this.review2);
  }

}
