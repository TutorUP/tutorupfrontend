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

}
