import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { PracticeService } from '../services/practice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp : Employee ;

  constructor(private service : PracticeService,
    private router : Router,
    private route : ActivatedRoute) {this.emp = new Employee(); }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emp = this.service.findByIndex(params['index']);
    });
  }

  updateEmp(){
    this.router.navigate(['list']);
  }

}
