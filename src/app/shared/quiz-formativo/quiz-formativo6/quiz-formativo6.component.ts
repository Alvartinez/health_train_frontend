import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '@rutas/services/quiz.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@rutas/services/error.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-formativo6',
  templateUrl: './quiz-formativo6.component.html',
  styleUrls: ['./quiz-formativo6.component.css']
})
export class QuizFormativo6Component {

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

  enunciado1 = "Cuando exista el riesgo de contaminación en las diversas fases del proceso de fabricación, el personal manipulador debe lavarse las manos entre una y otra operación en el proceso de elaboración.";
  enunciado2 = " Las materias primas conservadas por congelación que requieren ser descongeladas previo al uso, no deben descongelarse a una velocidad controlada para evitar el desarrollo de microorganismos y podrán ser nuevamente congeladas.";
  enunciado3 = "Los productos devueltos a la empresa por defectos de fabricación, que tengan incidencia sobre la inocuidad y calidad del alimento podrán someterse a procesos de reenvase, reelaboración, reproceso, corrección o reesterilización.";
  enunciado4 = "Las operaciones de fabricación deben realizarse en forma secuencial y continua para evitar el cruce de flujos de producción.";
  enunciado5 = "Todo equipo y utensilio que haya entrado en contacto con materias primas o con material contaminado debe limpiarse y desinfectarse cuidadosamente antes de ser nuevamente utilizado.";

  answer1: string | undefined;
  answer2: string | undefined;
  answer3: string | undefined;
  answer4: string | undefined;
  answer5: string | undefined;

  ponderado1 = 0;
  ponderado2 = 0;
  ponderado3 = 0;
  ponderado4 = 0;
  ponderado5 = 0;

  isCorrect1: boolean = false;
  isCorrect2: boolean = false;
  isCorrect3: boolean = false;
  isCorrect4: boolean = false;
  isCorrect5: boolean = false;

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

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/quiz')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  culminar() {

    if (this.answer1 == null || this.answer2 == null || this.answer3 == null || this.answer4 == null || this.answer5 == null) {
      this.toastr.error("Debes completar todos los campos", "Error");
      return;
    }

    console.log(this.answer1);

    this.finish = false;

    if (this.answer1 == "VERDADERO") {
      this.isCorrect1 = true;
      this.ponderado1= 1;
    }

    if (this.answer2 == "FALSO") {
      this.isCorrect2 = true;
      this.ponderado2= 1;
    }

    if (this.answer3 == "FALSO") {
      this.isCorrect3 = true;
      this.ponderado3= 1;
    }

    if (this.answer4 == "VERDADERO") {
      this.isCorrect4 = true;
      this.ponderado4= 1;
    }

    if (this.answer5 == "FALSO") {
      this.isCorrect5 = true;
      this.ponderado5= 1;
    }

    this.crearPregunta(
      this.tokenId, this.numero, 11, this.enunciado1,{nombre:this.answer1, valor:this.isCorrect1, ponderado: this.ponderado1},"seleccion", false, 1, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 12, this.enunciado2,{nombre:this.answer2, valor:this.isCorrect2, ponderado: this.ponderado2},"seleccion", false, 1, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 13, this.enunciado3,{nombre:this.answer3, valor:this.isCorrect3, ponderado: this.ponderado3},"seleccion", false, 1, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 14, this.enunciado4,{nombre:this.answer4, valor:this.isCorrect4, ponderado: this.ponderado4},"seleccion", false, 1, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 15, this.enunciado5,{nombre:this.answer5, valor:this.isCorrect5, ponderado: this.ponderado5},"seleccion", false, 1, this.dateStr 
    );
 
      console.log(this.jsonMayor);

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

    this.router.navigate(['feedback', 6], { relativeTo: this.route });

  }
  
}
