import { Component, OnInit } from '@angular/core';
import { WeekDatesService } from '../week-dates.service';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-week-detail',
  templateUrl: './week-detail.component.html',
  styleUrls: ['./week-detail.component.css']
})
export class WeekDetailComponent implements OnInit {
  public weekDates;
  public projects;

  constructor(private wdservice : WeekDatesService, pservice: ProjectsService) { 
    this.weekDates = wdservice.GetWeekDates();
    this.projects = pservice.GetProjects();
  }

  ngOnInit(): void {
  }

}
