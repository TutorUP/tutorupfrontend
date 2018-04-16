import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';

@Component({
  selector: 'app-create-tutor-page',
  templateUrl: './create-tutor-page.component.html',
  styleUrls: ['./create-tutor-page.component.css']
})
export class CreateTutorPageComponent implements OnInit {

  tutorService: TutorService = new TutorService();
  courses: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addCourse()
  {
  	this.courses.push('');
  }

  getCourseLetters(): string[] 
  {
  	return [ 'BUS', 'CHM', 'COM', 'CS', 'CE','ME','EE','MTH','SOC','HST',
  			 'ENG', 'SPA', 'FRN', 'BME', 'EGR','FA', 'THE', 'PHY', 'PHL'];
  }

  getCourseNumbers(): string[] 
  {
  	return [ '101', '110', '301', '305', '202','205','300','325','350','150',
  			 '360', '325', '400', '425', '490','500', '525', '590', '595'];
  }

}
