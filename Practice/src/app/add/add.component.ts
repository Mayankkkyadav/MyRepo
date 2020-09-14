import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../services/practice.service';
import {  Router } from '@angular/router';
import { Employee } from '../employee.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   emp:Employee ;

  constructor( private service: PracticeService , private router: Router ) {
    this.emp = new Employee;
   }

  ngOnInit(): void {
  }
  
  saveEmp(){
    this.service.save(this.emp);
    this.router.navigate(['list']);
  }

}
