import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  ideas = [
    {
        "id": 1,
        "title": "To do tracker",
        "description": "Description of project.",
        "priority": 10,
        "primaryTools": ["Angular"],
        "mvpFeatures": ["Material"],
        "stretchGoals": ["login authentication"]
    }
]

  constructor() { }
}
