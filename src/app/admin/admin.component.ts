import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [EmployeeService]
})
export class AdminComponent implements OnInit {
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
