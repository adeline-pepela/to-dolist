import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]= [
    {id:1,name:"group work" ,description: "Learning Typescript"},
    {id:2,name:"One on one session" ,description:"Addressing blockers"},
    {id:3,name:"feedback session" ,description:" Giving each other feedback on how the week was"},
    {id:4,name:"Career talk" ,description:"How to write cv"},
    {id:5,name:"Assignment" ,description:"Completing our IPs"},


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
