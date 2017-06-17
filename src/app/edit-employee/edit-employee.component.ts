import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
  providers: [EmployeeService]
})
export class EditEmployeeComponent implements OnInit {
  @Input() selectedEmployee;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  updateButtonClicked(employeeToUpdate){
    this.employeeService.updateEmployee(employeeToUpdate);
    this.router.navigate(['employees', this.selectedEmployee.$key]);
  }

}
