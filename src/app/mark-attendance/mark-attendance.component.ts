import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FakeService } from '../services/fake.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Fake } from '../models/fake.model';
export class Fake{
  id:number
  todaysDateTime:string
}
@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {
  id:number
  today= new Date();
  // todaysDate=formatDate(this.today, 'hh:mm a', 'en-US', '+0530')
  public hide:boolean=false
 
  checked:boolean=true
  users:Fake[]
  
  formGroup: FormGroup;
  todaysDateTime: string;

  constructor(private router:Router,private fakeService:FakeService,private formBuilder:FormBuilder ) {
    this.formGroup = formBuilder.group({
      id:'',
      todaysDateTime:'',
      // todaysTime:''
    
    });
   }

  ngOnInit(): void {
 
  }
  onClick(){

    this.router.navigateByUrl('/schedule');
  }
 
  onToggleChange(){
    if(this.formGroup.value===true){
     this.formGroup.setValue({  
       id:'',
       todaysDateTime:this.today ,
   
     })
     this.fakeService.postAll(this.formGroup.value).subscribe(data=>{
    
     })
    }
   else{
    
      this.formGroup.setValue({  
        id:'',
        todaysDateTime:this.today  
      })
      this.fakeService.postAll(this.formGroup.value).subscribe(data=>{
     
      })
   }
  }

 punchOut(){
  this.hide=!this.hide
 }
 

}


