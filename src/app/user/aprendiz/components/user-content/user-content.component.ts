import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '@rutas/services/quiz.service';
import { CourseService } from 'src/app/services/curso.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent {
  courses: any[] = [];
  basePath = 'assets/image/';
  tokenId:any;

  constructor(private router: Router, private courseService: CourseService, private _quizService:QuizService, private toastr: ToastrService) {
    this.courseService.getAllCursos().subscribe((data) => {
      this.courses = data;
    });

    const token:any = localStorage.getItem("x-token");
    const decoded:any = jwt_decode(token);
    this.tokenId = decoded.id;

  }

  verDetallesCurso(idCurso: number) {
    this._quizService.resultQuiz().subscribe({
      next: (dato) =>{

        const completado = dato.some((respuesta:any) => 
          respuesta.id_persona === this.tokenId && respuesta.id_quiz_formativo === idCurso
        );

        if(completado){
          this.router.navigate(['healthtrain/users/apprentice/courses/course', idCurso]); 
        }else{
          this.router.navigate(['healthtrain/users/apprentice/courses/course', idCurso, "terminos-y-condiciones"]);
        }

      }
    });

  }

  truncate(text: string, size: number) {
    if (text.length <= size) {
      return text;
    }

    return text.substring(0, size) + "...";
  }

}
