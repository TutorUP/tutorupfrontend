import { Component, OnInit} from '@angular/core';
import { User } from '../models/user';
import { FilterPipe } from '../filter.pipe';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    filterUsers = ['Hitmon Chan', 'Ty Ranitar', 'Char Mander', 'Pika Chu']
	users: User[] = [];

	user1: User = new User('Hitmon Chan', 'chan18@up.edu', 'Political Science', 'Economics', ['POL 200', 'SOC 112', 'MTH 105', 'BUS 364'],
		'I\'m definitely a fighter. Let\'s get you back on track with school!', 'TR 11:00am-3:00pm', ['ROTC Tutor', 'Paid'], 4.5,
		'https://cdn.bulbagarden.net/upload/thumb/a/a3/107Hitmonchan.png/250px-107Hitmonchan.png');

	user2: User = new User('Ty Ranitar', 'ranitar17@up.edu', 'Geology', 'Physics', ['ENV 200', 'MTH 201', 'PHY 204', 'PHY 205'],
		'This tutoring session is going to rock!', 'Contact me for availability', ['Paid'], 2.5,
		'https://vignette.wikia.nocookie.net/sonicpokemon/images/9/95/Tyranitar.png/revision/latest?cb=20120801034741');

	user3: User = new User('Char Mander', 'mander19@up.edu', 'Biology', 'Chemistry', ['BUS 200', 'MTH 112', 'THE 105', 'BUS 364'],
		'I have a firey personality.', 'MWF 2:00-5:00pm', ['TBP Tutor', 'Free'], 3,
		'https://static.giantbomb.com/uploads/scale_small/0/6087/2438704-1202149925_t.png');

	user4: User = new User('Pika Chu', 'chu20@up.edu', 'Electrical Engineering', '', ['EE 201', 'MTH 301', 'EE 250', 'CS 301'],
		'I am an electrifying tutor.', 'Saturdays 12:00-4:00pm', ['Athletics Tutor', 'Paid'], 5,
		'https://vignette.wikia.nocookie.net/youtubepoop/images/f/f7/5Pikachu.png/revision/latest?cb=20141108062013');

  constructor() { }

  ngOnInit() {
  	this.users.push(this.user1);
  	this.users.push(this.user2);
  	this.users.push(this.user3);
  	this.users.push(this.user4);
  }

  /**
   * returnList - converts string array to comma separated list
   *
   * @param string[] list - list to convert
   * @return string of list separated by comma and space
   */
  returnList(list: string[]): string
  {
  	return list.join(', ');
  }

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

}
