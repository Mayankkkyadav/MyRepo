import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  
empList: Employee[]=[] ;
  
  
constructor(private router :Router) { }
   
save(emp:Employee){
    this.empList.push(emp);
  }

getList(){
    return this.empList ;
  }

search(id:number){
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
   
// edit(index:number){
//    this.router.navigate(['edit'],{queryParams: {index: index}});
//  }

 // sortOnId() {
 //  this.empList.sort((a, b) =>  a.id - b.id );
 // return this.empList ;
 // }

}
