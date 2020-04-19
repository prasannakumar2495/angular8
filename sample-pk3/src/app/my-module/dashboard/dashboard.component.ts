import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Date:Date
  Designation: string
  UserName: string
  NoOfTeamMembers: number
  TotalCostOfAllProjects: number
  PendingTasks: number
  UpComingProjects: number
  ProjectCost: number

  CurrentExpenditure: number
  AvailableFunds: number

  Clients: string[]
  Projects: string[]
  Years: number[] = []
  TeamMembers = []

  constructor( private dasboardService: DashboardService)
  {
    
  }
  ngOnInit(): void {
    this.Date = new Date()
    this.Designation = "Team Leader"
    this.UserName = "Prasanna Kumar"
    this.NoOfTeamMembers = 5
    this.TotalCostOfAllProjects = 50
    this.PendingTasks = 3
    this.UpComingProjects = 10

    this.ProjectCost = 10
    this.CurrentExpenditure = 20.5
    this.AvailableFunds = 30

    this.Clients = ["Trident Soluntions", "Company 1", "Company 2"]
    this.Projects = ["Project 1", "Project 2", "Project 3", "Project 4"]
    for (var i = 2020; i > 2015; i--) {
      this.Years.push(i)
    }

    this.TeamMembers = this.dasboardService.getTeamMembers()
  }
  onProjectChange($event) {
    console.log($event.target.innerHTML);
    if ($event.target.innerHTML == "Project 1") {
      this.ProjectCost = 10
      this.CurrentExpenditure = 20
      this.AvailableFunds = 30
      console.log($event.target.innerHTML);
    }
    else if ($event.target.innerHTML == "Project 2") {
      this.ProjectCost = 13
      this.CurrentExpenditure = 10
      this.AvailableFunds = 20
      console.log($event.target.innerHTML);
    }
    else if ($event.target.innerHTML == "Project 3") {
      this.ProjectCost = 11
      this.CurrentExpenditure = 8
      this.AvailableFunds = 20
      console.log($event.target.innerHTML);
    }
    else if ($event.target.innerHTML == "Project 4") {
      this.ProjectCost = 14
      this.CurrentExpenditure = 12
      this.AvailableFunds = 20
      console.log($event.target.innerHTML);
    }
    else {
      console.log("NO VALUE");
    }
  }
}