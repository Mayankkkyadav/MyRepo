import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../services/practice.service';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   emp:Employee[]=[] ;
  
  constructor( private service: PracticeService , private router: Router ) {
    
   }

  ngOnInit(): void {
    this.emp=this.service.getList() ;
  }
  
  delete(index:number){
    var ans=confirm("do you really want to delete this number");
    if(ans){
    this.service.delete(index);
  }
}

 // edit(index:number){
  //  this.service.edit(index);
 // }

 // sortById(){
  //  this.emp= this.service.sortOnId();
 // }

}