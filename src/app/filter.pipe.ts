import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, term: any): any {
    // check if search term is undefined
    if (term === undefined){
    	return employees;
    }
    // otherwise, return updated employees array
    return employees.filter(function(employee){
    	// return boolean - see if the employee array contains the search term.
    	// if return is true - employee stays in the array
    	// if return is false - employee is removed from the array
    	return employee.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
