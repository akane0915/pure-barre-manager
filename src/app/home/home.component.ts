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
  employees: Employee[];
  currentRoute: string = this.router.url;
  filterByRole: string = 'all-employees';
  uniqueRoles: string[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(dataLastEmittedFromObserver => { this.employees = dataLastEmittedFromObserver;
          this.employees.forEach((employee) => {
            if (this.uniqueRoles.includes(employee.role)) {
            } else {
              this.uniqueRoles.push(employee.role);
            }
          });
        });
  }

  detailButtonClicked(employee) {
    this.router.navigate(['employees', employee.$key]);
  }

  onChange(roleFromMenu) {
  this.filterByRole = roleFromMenu;
  }

}
