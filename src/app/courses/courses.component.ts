import { Component, OnInit } from "@angular/core";
import { Course } from "../Course";

@Component({
  selector: "app-courses",
  templateUrl: './courses.component.html',
  styleUrls:['./courses.component.css']
})

export class CoursesComponent implements OnInit{

    course: Course={
      Id:1,
      Name:'Angular'
    }
        constructor(){

  }

ngOnInit(){

}
} 
