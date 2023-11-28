import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/curso.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'vist-content',
  templateUrl: './vist-content.component.html',
  styleUrls: ['./vist-content.component.css']
})
export class VistContentComponent {
  courses: any[] = [];
  basePath = 'assets/image/';
  tokenId:any;

  constructor(private router: Router, private courseService: CourseService, private toastr: ToastrService) {
    this.courseService.getAllCursos().subscribe((data) => {
      this.courses = data;
    });

    const token:any = localStorage.getItem("x-token");
    const decoded:any = jwt_decode(token);
    this.tokenId = decoded.id;

  }


  truncate(text: string, size: number) {
    if (text.length <= size) {
      return text;
    }

    return text.substring(0, size) + "...";
  }

  contenido(curso:any){
    this.router.navigate(['healthtrain/users/visitor/courses/course', curso, "course-content"]);
  }

}
