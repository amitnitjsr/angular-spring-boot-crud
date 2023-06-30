import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  id: number;
  employee: Employee
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService
    ){}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();

    this.employeeService.getEmployeeById(this.id)
    .subscribe(data => {
      this.employee = data;
    })
  }
}
