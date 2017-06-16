import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
  providers: [EmployeeService]
})
export class NewEmployeeComponent implements OnInit {
  employeeToAdd: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addButtonClicked(newName: string, newRole: string, newAboutMe: string, newStrength: string, newSchedulePreference: string, newImageURL: string) {
    this.employeeToAdd = new Employee(newName, newRole, newAboutMe, newStrength, newSchedulePreference, newImageURL);

    this.employeeService.addEmployee(this.employeeToAdd);
    console.log(this.employeeToAdd);

  }

}
