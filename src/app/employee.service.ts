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

  getEmployeeById(employeeId: string) {
    return this.database.object('employees/' + employeeId);
  }

  addEmployee(employeeToAdd: Employee) {
    this.employees.push(employeeToAdd);
  }

  updateEmployee(employeeToUpdate){
  var employeeEntryInFirebase = this.getEmployeeById(employeeToUpdate.$key);
  employeeEntryInFirebase.update({name: employeeToUpdate.name,
                              role: employeeToUpdate.role,
                              aboutMe: employeeToUpdate.aboutMe,
                              strength: employeeToUpdate.strength,
                              schedulePreference: employeeToUpdate.schedulePreference,
                              classesTaught: employeeToUpdate.classesTaught,
                              imageURL: employeeToUpdate.imageURL
                            });
  }
}
