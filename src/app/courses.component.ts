import {Component} from '@angular/core'
import { CoursesService } from './courses.service';
@Component({
    selector:'courses' ,
    template:`
      {{text | summary}}<br/><br/>
      {{course.title | uppercase }}<br/>
      {{course.students | number}}<br/>
      {{course.rating | number:'1.2-2'}}<br/>
      {{course.price | currency:'INR':true:'3.2-2'}}<br/>
      {{course.releaseDate | date: 'longDate'}}
    `
})

export class CoursesComponent{
title="List of courses";
text=`
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
`;
course={
    title:"The Angular Course",
    rating:4.9746,
    students:29929,
    price:100.92,
    releaseDate:new Date(2019,0,8)
};

}