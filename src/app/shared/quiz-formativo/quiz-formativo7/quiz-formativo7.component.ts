import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '@rutas/services/quiz.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@rutas/services/error.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-formativo7',
  templateUrl: './quiz-formativo7.component.html',
  styleUrls: ['./quiz-formativo7.component.css']
})
export class QuizFormativo7Component {
  
  constructor(private router: Router, private _quizService:QuizService, private location: Location, private _errorService:ErrorService, private toastr: ToastrService, private route: ActivatedRoute) {}

  indicacion = "";
  data:any;
  numero:any;
  tokenId:any;
  jsonMayor = {
    preguntas: [] as any[]
  };
  fechaActual = new Date()
  year = this.fechaActual.getFullYear();
  month = this.fechaActual.getMonth() + 1;
  day = this.fechaActual.getDate();
  hours = this.fechaActual.getHours();
  minutes =this.fechaActual.getUTCMinutes();
  seconds = this.fechaActual.getSeconds();
  dateStr = `${this.year}-${this.month}-${this.day}-${this.hours}:${this.minutes}:${this.seconds}`;
  reanudar = false;

  ngOnInit(): void {

    const currentPath = this.location.path();
    console.log(currentPath);
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);


    this._quizService.getQuiz(this.numero).subscribe({
      next: (data) =>{
        this.indicacion = data.indicacion;
        this.data = data

        const token:any = localStorage.getItem("x-token");
        const decoded:any = jwt_decode(token);
        this.tokenId = decoded.id;

        this._quizService.resultQuiz().subscribe({
          next: (dato) =>{

            const completado = dato.some((respuesta:any) => 
              respuesta.id_persona === this.tokenId && respuesta.id_quiz_formativo === data.id_quiz_formativo
            );

            if(completado){
              this.toastr.success("Lee la información cuidadosamente", "QUIZ");
              this.reanudar = true;
            }else{
              this.reanudar = false;
              this.finish = true;
            }

          }
        });

      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msgError(e);
      }    
    });

  }

  cancelar(){
    this.location.back();
  }

  aceptar(){
    this.finish=true;
    this.reanudar=false;
  }

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/quiz')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  crearPregunta(
    id_persona:any,
    id_quiz_formativo:any,
    id_pregunta:any,
    enunciado:string,
    opcion:object,
    tipo_pregunta:string,
    multiple:boolean,
    puntaje:any,
    fecha_respuesta:any
  ) {
    const nuevaPregunta = {
      id_persona,
      id_quiz_formativo,
      id_pregunta,
      enunciado,
      opcion,
      tipo_pregunta,
      multiple,
      puntaje,
      fecha_respuesta
    };
  
    this.jsonMayor.preguntas.push(nuevaPregunta);
  }

  finish: boolean = true;

  answer1: string | undefined;
  answer2: string | undefined;
  answer3: string | undefined;
  answer4: string | undefined;
  answer5: string | undefined;

  enunciado1 = "Todas las fábricas de alimentos que procesen elaboren o envasen alimentos deben tener acceso a un laboratorio de pruebas externo.";
  enunciado2 = "Todas las fábricas de alimentos deben contar con un sistema de control y aseguramiento de calidad, el cual debe ser esencialmente preventivo y cubrir todas las etapas de procesamiento del alimento, desde la obtención de materias primas e insumos, hasta la distribución de productos terminados.";
  enunciado3 = "Inocuidad tiene que ver con las características de un producto, deseables por el consumidor, como lo son su sabor, presentación, tamaño, entre otros factores.";
  enunciado4 = "Calidad es la suma de procesos que llevan a conseguir que el producto alimenticio esté libre de agentes contaminantes de cualquier tipo, a fin de evitar daños en los consumidores.";
  
  wrong_answer: { [key: string]: string } = {
    "position": "relative",
    "left": "8%",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "width": "6%",
    "height":"51px",
    'margin': '2px',
    'background-image': 'url("assets/image/wrong.png")',
    'user-select': 'none'
  }

  correct_answer: { [key: string]: string } = {
    "position": "relative",
    "left": "8%",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "width": "6%",
    "height":"51px",
    'margin': '2px',
    'background-image': 'url("assets/image/correct.png")',
    'user-select': 'none'
  }

  isCorrect1: boolean = false;
  isCorrect2: boolean = false;
  isCorrect3: boolean = false;
  isCorrect4: boolean = false;

  ponderado1 = 0;
  ponderado2 = 0;
  ponderado3 = 0;
  ponderado4 = 0;

  culminar() {

    if (this.answer1 == null || this.answer2 == null || this.answer3 == null || this.answer4 == null) {
      this.toastr.error("Debes completar todos los campos", "Error");
      return;
    }

    this.finish = false;

    if (this.answer1 == "FALSO") {
      this.isCorrect1 = true;
      this.ponderado1 = 25;
    }

    if (this.answer2 == "VERDADERO") {
      this.isCorrect2 = true;
      this.ponderado2 = 25;
    }

    if (this.answer3 == "FALSO") {
      this.isCorrect3 = true;
      this.ponderado3 = 25;
    }

    if (this.answer4 == "FALSO") {
      this.isCorrect4 = true;
      this.ponderado4 = 25;
    }

    this.crearPregunta(
      this.tokenId, this.numero, 16, this.enunciado1,{nombre:this.answer1, valor:this.isCorrect1, ponderado: this.ponderado1},"seleccion", false, 25, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 17, this.enunciado2,{nombre:this.answer2, valor:this.isCorrect2, ponderado: this.ponderado2},"seleccion", false, 25, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 18, this.enunciado3,{nombre:this.answer3, valor:this.isCorrect3, ponderado: this.ponderado3},"seleccion", false, 25, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 19, this.enunciado4,{nombre:this.answer4, valor:this.isCorrect4, ponderado: this.ponderado4},"seleccion", false, 25, this.dateStr 
    );
  
  }

  culminado(){

    for (const pregunta of this.jsonMayor.preguntas) {
      this._quizService.saveQuiz(pregunta).subscribe({
        next: (data) =>{
          console.log(data);
        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        }    
      });
    }

    this.router.navigate(['feedback', 7], { relativeTo: this.route });

  }

}
