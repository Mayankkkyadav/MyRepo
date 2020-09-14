import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import { Router } from '@angular/router' ;
import { PracticeService } from '../services/practice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  emp : Employee ;
  id:number ;

  constructor(private router :Router , private service : PracticeService) { }

  ngOnInit(): void {
  }

search(id : number){
 this.emp = this.service.search(id) ;
}

}
