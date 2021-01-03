import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  // calling data model ideas - to be passed into url where json server lives
  private model = 'ideas';

  constructor(private http: HttpClient) { }

  all() {
    console.log(this.http.get(this.getUrl()));
    
    return this.http.get(this.getUrl())
  }

  find(ideasId) {

  }
  create(idea){

  }
  update(idea){

  }
  delete(ideaId){

  }

  private getUrl() {
    return `${BASE_URL}${this.model}`
  }
}
