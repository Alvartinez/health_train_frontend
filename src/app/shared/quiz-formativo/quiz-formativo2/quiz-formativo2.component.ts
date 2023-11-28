import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '@rutas/services/quiz.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@rutas/services/error.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-formativo2',
  templateUrl: './quiz-formativo2.component.html',
  styleUrls: ['./quiz-formativo2.component.css']
})
export class QuizFormativo2Component {

  constructor(private router: Router, private _quizService:QuizService, private location: Location, private _errorService:ErrorService, private toastr: ToastrService, private route: ActivatedRoute) {}

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

    console.log(this.numero);

    this._quizService.getQuiz(this.numero).subscribe({
      next: (data) =>{
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

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/quiz')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  finish: boolean = true;

  answer1: string | undefined;
  answer2: string | undefined;
  answer3: string | undefined;
  answer4: string | undefined;
  answer5: string | undefined;
  answer6: string | undefined;
  answer7: string | undefined;
  
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
  isCorrect5: boolean = false;
  isCorrect6: boolean = false;
  isCorrect7: boolean = false;

  enunciado1 = "Es la autoridad directiva y coordinadora de la acción sanitaria en el sistema de las Naciones Unidas.";
  enunciado2 = "Resolución por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.";
  enunciado3 = "Agencia Regulatoria Nacional, una entidad de vigilancia y control de carácter técnico científico, que trabaja para la protección de la salud individual y colectiva de los colombianos, mediante la aplicación de las normas sanitarias asociadas al consumo y uso de alimentos, medicamentos, dispositivos médicos y otros productos objeto de vigilancia sanitaria.";
  enunciado4 = "Por la cual se modifica la Resolución 668 de 2016 sobre uso racional de bolsas plásticas y se adoptan otras disposiciones. (Código de colores)";
  enunciado5 = "Decreto por el cual se promueve la aplicación del sistema de análisis de peligros y puntos críticos, - HACCP en la fábrica de alimentos, y se reglamenta el proceso de certificación.";
  enunciado6 = "Establece el Reglamento Técnico, mediante el cual se señalan los requisitos sanitarios que deben cumplir los materiales, objetos, envases y equipamientos destinados a entrar en contacto con alimentos y bebidas para consumo humano, con el fin de proteger la salud humana y prevenir las prácticas que puedan inducir a error a los consumidores.";
  enunciado7 = "Agencia del Gobierno federal de los Estados Unidos cuya misión es proteger la salud pública mediante la prevención y el control de enfermedades, lesiones y discapacidades.";

  ponderado1 = 0;
  ponderado2 = 0;
  ponderado3 = 0;
  ponderado4 = 0;
  ponderado5 = 0;
  ponderado6 = 0;
  ponderado7 = 0;

  culminar() {

    if (this.answer1 == null || this.answer2 == null || this.answer3 == null || this.answer4 == null || this.answer5 == null || this.answer6 == null || this.answer7 == null) {
      this.toastr.error("Debes completar todos los campos", "Error");
      return;
    }

    this.finish = false;

    if (this.answer1 == "OMS/ ORGANIZACIÓN MUNDIAL DE LA SALUD") {
      this.isCorrect1 = true;
      this.ponderado1 = 14.28;
    }

    if (this.answer2 == "RESOLUCIÓN 2115 DEL 2007") {
      this.isCorrect2 = true;
      this.ponderado2 = 14.28;
    }

    if (this.answer3 == "INVIMA") {
      this.isCorrect3 = true;
      this.ponderado3 = 14.28;
    }

    if (this.answer4 == "RESOLUCIÓN 2184 DEL 2019") {
      this.isCorrect4 = true;
      this.ponderado4 = 14.28;
    }

    if (this.answer5 == "DECRETO 60 DEL 2002") {
      this.isCorrect5 = true;
      this.ponderado5 = 14.28;
    }

    if (this.answer6 == "RESOLUCIÓN 683 DEL 2012") {
      this.isCorrect6 = true;
      this.ponderado6 = 14.28;
    }

    if (this.answer7 == "CDC") {
      this.isCorrect7 = true;
      this.ponderado7 = 14.28;
    }

    this.crearPregunta(
      this.tokenId, this.numero, 1, this.enunciado1,{nombre:this.answer1, valor:this.isCorrect1, ponderado: this.ponderado1},"empareja", false, 14.28, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 2, this.enunciado2,{nombre:this.answer2, valor:this.isCorrect2, ponderado: this.ponderado2},"empareja", false, 14.28, this.dateStr
    );

    this.crearPregunta(
      this.tokenId, this.numero, 3, this.enunciado3,{nombre:this.answer3, valor:this.isCorrect3, ponderado: this.ponderado3},"empareja", false, 14.28, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 4, this.enunciado4,{nombre:this.answer4, valor:this.isCorrect4, ponderado: this.ponderado4},"empareja", false, 14.28, this.dateStr
    );

    this.crearPregunta(
      this.tokenId, this.numero, 5, this.enunciado5,{nombre:this.answer5, valor:this.isCorrect5, ponderado: this.ponderado5},"empareja", false, 14.28, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 6, this.enunciado6,{nombre:this.answer6, valor:this.isCorrect6, ponderado: this.ponderado6},"empareja", false, 14.28, this.dateStr
    );

    this.crearPregunta(
      this.tokenId, this.numero, 7, this.enunciado7,{nombre:this.answer7, valor:this.isCorrect7, ponderado: this.ponderado7},"empareja", false, 14.28, this.dateStr 
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

    this.router.navigate(['feedback', 2], { relativeTo: this.route });

  }

}
