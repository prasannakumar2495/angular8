import { Injectable } from '@angular/core';

@Injectable(
  /** providedIn: 'root' specifies that the service is GLOBAL.*/)
export class DashboardService {

  getTeamMembers(): any[]
  {
    var TeamMembers = [{
      Region: "East", Members: [{ ID: 1, Name: "PK", Status: "Available" },
      { ID: 2, Name: "PKP", Status: "Busy" }]
    },
    { Region: "West", Members: [{ ID: 1, Name: "KP", Status: "Available" }] },
    { Region: "North", Members: [{ ID: 1, Name: "KP", Status: "Busy" }] },
    { Region: "South", Members: [{ ID: 1, Name: "PK", Status: "Busy" }] }]
    return TeamMembers;
  }
}
