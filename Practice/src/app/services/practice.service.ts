import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.Component';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';


@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  
empList: Employee[]=[] ;

  
  
constructor(private router :Router) { } 
                                         
save(emp:Employee){
    this.empList.push(emp);
  }

list(){
    return this.empList ;
  }

search(id:number) :Employee{
let result= this.empList.find( x => x.id==id );
if(result==null){
  return null;
}
else 
return result ;
  }

delete(index:number){
    this.empList.splice(index,1);
  }

  edit(index : number) {
    // http://localhost:4200/edit?index=0
    this.router.navigate(['edit'],{queryParams: {index: index}});
  }
  
  findByIndex(index : number) : Employee {
    return this.empList[index];
  }

  sortOnId() {
  //  this.empList.sort((a, b) => a.id - b.id);
    return this.empList ;
  }

}

