import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FakeService } from '../services/fake.service';
import { User } from '../models/user';
import { Fake } from '../models/fake.model';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {
  today= new Date();
  todaysDataTime = '';
  public show:boolean=false
  public hide:boolean=false
 
  public buttonName:any = 'Show';
// pI:string
// pO:string
  users:Fake[]
  pI: any;
  constructor(private router:Router,private fakeService:FakeService) {
    this.todaysDataTime = formatDate(this.today, 'hh:mm a', 'en-US', '+0530');
   }

  ngOnInit(): void {
 
  }

  onClick(){
    this.router.navigateByUrl('/schedule');
  }
 punchIn(){
  this.show=!this.show
  
 }
 punchOut(){
  this.hide=!this.hide
 
 }
 onclick(){
   this.router.navigate(['/location'])
 }
 
}


