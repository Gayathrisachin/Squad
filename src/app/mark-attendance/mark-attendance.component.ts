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
  mySwitch: boolean = true;
  checked:boolean=true
  users:Fake[]
  
  formGroup: FormGroup;

  constructor(private router:Router,private fakeService:FakeService,private formBuilder:FormBuilder ) {
    this.formGroup = this.formBuilder.group({
      id:'',
      todaysDateTime:'',
      todaysTime:''
      
    });
    
   }
   
  ngOnInit(): void {
    this.formGroup.setValue({  
      id:'',
      todaysDateTime:true ,
      todaysTime:''
    })
  }
  onClick(){

    this.router.navigateByUrl('/schedule');
  }

  onToggleChange(){
    if(this.checked===true){
    this.formGroup.setValue({  
      id:'',
      todaysDateTime:this.today ,
      todaysTime:''
    })
     this.fakeService.postAll(this.formGroup.value).subscribe(data=>{
  alert('you ae in')
  this.formGroup.setValue({  
    id:'',
    todaysDateTime:false,
    todaysTime:''
  })
     })
    }
    // this.checked=false
  }
  onToggleChanges(){
    if(this.checked===false)
    alert('you are out')
  }
 punchOut(){
  this.hide=!this.hide
 }
 

}


