import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeService]
})

export class HomeComponent implements OnInit {

  employees: FirebaseListObservable<any[]>;

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getEmployees();
  }

  ngOnInit() {
  }

}
