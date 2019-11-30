import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  apiurl:string='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get(this.apiurl);
  }
  
  create(body)
  {
    return this.http.post(this.apiurl,body);
  }
}
