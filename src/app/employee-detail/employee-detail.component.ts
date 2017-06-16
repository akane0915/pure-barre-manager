import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {
  employeeId: string;
  employeeToShow;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
          this.employeeId = urlParameters['id'];
    });

    this.employeeService.getEmployeeById(this.employeeId).subscribe(dataLastEmittedFromObserver => {this.employeeToShow = dataLastEmittedFromObserver});
  }

}
