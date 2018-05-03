import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {


  private apiUrl = 'https://tutorupcapstone.herokuapp.com/api/v1/tutors';
  
  constructor(private http:HttpClient) {}


    getTutors()
    {
        return this.http.get(this.apiUrl);
    }

}
