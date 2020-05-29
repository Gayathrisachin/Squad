import { Component, OnInit } from '@angular/core';
import { Fake } from 'src/app/models/fake.model';
import { FakeService } from 'src/app/services/fake.service';

export interface Log{
  Date:string;
  punchIn:string
  punchOut:string
  }
export interface DateHeader{
  name:string
}
@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.css']
})


export class LogInfoComponent implements OnInit {
log:Fake[]=[]
dateHeader:DateHeader[]
public DateDetails: object = [];  
public DateHeader = [{ name: "This Week" }, { name: "This Month"}];  
  constructor(private svc:FakeService) { 
    this.getDate()
  }

  ngOnInit() {
    this.svc.getAll().subscribe(data=>{
      this.log=data
    });
  }
getDate(){
  return this.DateHeader;
}
// SearchDate(name: string) {  
//   let obj = this.log.filter(m => m.todaysDateTime == name);  
//   this.DateDetails = obj;  
//   return this.DateDetails;  
//   }  
    
}
