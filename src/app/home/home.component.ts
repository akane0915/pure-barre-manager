import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeService]
})

export class HomeComponent implements OnInit {

  employees: FirebaseListObservable<any[]>;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employees = this.employeeService.getEmployees();
  }

  ngOnInit() {
  }

  detailButtonClicked(employee) {
    this.router.navigate(['employees', employee.$key]);
  }

}
