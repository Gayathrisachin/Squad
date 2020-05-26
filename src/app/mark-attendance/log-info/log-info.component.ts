import { Component, OnInit } from '@angular/core';

export interface Log{
  Date:string;
  punchIn:string
  punchOut:string
  }

@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.css']
})


export class LogInfoComponent implements OnInit {
log:Log[]=[
  {
  Date:'15-4-2020',
  punchIn:'9.15 am',
  punchOut:'6.15 pm'
},
{
  Date:'16-4-2020',
  punchIn:'9.30 am',
  punchOut:'7.15 pm'
},
{
  Date:'17-4-2020',
  punchIn:'9.30 am',
  punchOut:'6.30 pm'
},{
  Date:'15-4-2020',
  punchIn:'9.15 am',
  punchOut:'6.15 pm'
},
{
  Date:'16-4-2020',
  punchIn:'9.30 am',
  punchOut:'7.15 pm'
},
{
  Date:'17-4-2020',
  punchIn:'9.30 am',
  punchOut:'6.30 pm'
}
]
  constructor() { }

  ngOnInit() {
    this.getData();
  }
getData(){
  return this.log;
}
}
