import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.model';

@Pipe({
  name: 'roleFilter',
  pure: false
})

export class roleFilterPipe implements PipeTransform {
  transform(valueArray: Employee[], desiredRole: string) {
  let output: Employee[] = [];
  if (desiredRole !== "all-employees") {
    valueArray.forEach((employee) => {
      if (employee.role === desiredRole) {
        output.push(employee);
      }
    });
    return output;
  } else {
      return valueArray;
    }
  }

}
