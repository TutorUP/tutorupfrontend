import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  private apiUrl = 'https://tutorupcapstone.herokuapp.com/api/v1/tutors';
    tutors: any = {};

    constructor(private http: HttpClient) {
        this.getTutors();
        this.getData();
    }

    getData() {
        return this.http.get(this.apiUrl);
    }

    getTutors() {
        this.getData().subscribe(data => {
            console.log(data);
            this.tutors = data;
        })
    }

}
