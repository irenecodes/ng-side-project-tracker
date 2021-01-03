import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../shared/services/ideas.service';

@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss']
})
export class IdeasListComponent implements OnInit {

  selectedIdea = null;

  ideas = null;

  constructor(private ideasService: IdeasService) { }

  ngOnInit(): void {
    this.ideas = this.ideasService.all().subscribe(ideas => this.ideas = ideas)
  }

  selectIdea(idea) {
    this.selectedIdea = idea;
  }
  loadIdeas(){

  }
  saveIdea(idea){

  }
  deleteIdea(ideaId){

  }




}
