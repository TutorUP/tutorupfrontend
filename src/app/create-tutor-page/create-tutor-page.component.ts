import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';

@Component({
  selector: 'app-create-tutor-page',
  templateUrl: './create-tutor-page.component.html',
  styleUrls: ['./create-tutor-page.component.css']
})
export class CreateTutorPageComponent implements OnInit {

  tutorService: TutorService = new TutorService();

  constructor() { }

  ngOnInit() {
  }

}
