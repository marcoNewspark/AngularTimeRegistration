import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = [];
  constructor() { 
    let myProject = { project: "2020 .Wettelijk verlof"};
    this.projects.push(myProject);
    myProject = { project: "2020 .Bovenwettelijk verlof"};
    this.projects.push(myProject);
    myProject = { project: "Tandarts / Artsbezoek"};
    this.projects.push(myProject);
    myProject = { project: "Samsung"};
    this.projects.push(myProject);
    myProject = { project: "Dictu"};
    this.projects.push(myProject);
    myProject = { project: "Beschikbaar/Idle"};
    this.projects.push(myProject);
  }

  GetProjects() {
    return this.projects;
  }
}
