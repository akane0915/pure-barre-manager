import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class EmployeeService {
  employees: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.employees = database.list('employees');
  }

  getEmployees() {
    return this.employees;
  }
}
