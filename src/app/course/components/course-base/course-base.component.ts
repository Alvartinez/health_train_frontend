import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '@rutas/services/evaluation.service';
import { QuizService } from '@rutas/services/quiz.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'course-base',
  templateUrl: './course-base.component.html',
  styleUrls: ['./course-base.component.css']
})
export class CourseBaseComponent {

  curso: any | null = null;
  mostrarPresentacion: boolean = false;
  presentacionUrl: SafeResourceUrl | undefined;
  acumulador:any;
  resultadosAgrupados:any;
  resultados:any = [];
  porcentaje:number = 0;
  examen:boolean = false;
  final:boolean = false;
  resultado:any = 0;
  inicio:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private rout:Router,
    private _quizService: QuizService,
    private _evaluacionService: EvaluationService
  ) {}

  ngOnInit(): void {

    const token:any = localStorage.getItem("x-token");
    const decoded:any = jwt_decode(token);
    const tokenId = decoded.id; 

    this.curso = this.route.snapshot.data['courseData'];

    this.mostrarPresentacion = this.verificarPresentacion();
  
    if (this.mostrarPresentacion) {
      this.presentacionUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.curso.presentacion);
    }

    if (!this.curso) {
      // Redirigir al usuario a user-home
      this.rout.navigate(["osl-udes","users","apprentice",'user-home']);
    }

    this._quizService.resultQuiz().subscribe({
      next: (data) =>{
        if(data.length === 0){
          this.porcentaje = 0;
          this.inicio = true;
          return;
        }
        
        const resultadosAcumulados:any = {}; // Objeto para mantener los resultados acumulados

        for (let i = 0; i < data.length; i++) {
          const id_persona = data[i].id_persona;
          const id_formativo = data[i].id_quiz_formativo;
          const puntaje = data[i].respuestas.puntaje;
          const ponderado = data[i].respuestas.opcion.ponderado;

          if (tokenId === id_persona) {
            if (!resultadosAcumulados[id_formativo]) {
            
              resultadosAcumulados[id_formativo] = {
                puntajeTotal: 0,
                ponderadoTotal: 0,
                id_quiz_formativo: id_formativo
              };
            }

            // Acumulamos los puntajes y ponderados
            resultadosAcumulados[id_formativo].puntajeTotal += puntaje;
            resultadosAcumulados[id_formativo].ponderadoTotal += ponderado;
          }
        }

        // Ahora resultadosAcumulados contendrá la suma total de puntaje y ponderado
        const resultadosArray = Object.values(resultadosAcumulados);


        for (let i = 0; i < resultadosArray.length; i++) {
          const resultado:any = resultadosArray[i];

          this.porcentaje += this.obtenerPuntaje(resultado);
          
          this.inicio = false;
      
        }

        if(this.porcentaje >= 80){
          this.examen = true;
        }

        this.ResultadosEvaluation(tokenId);

      }
    });

  }

  ResultadosEvaluation(id:any){
    this._evaluacionService.resultEvaluation(id).subscribe({
      next: (date:any) =>{
        this.examen = false;
        this.final = true;
        this.resultado = date;
      }
    });
  }

  verificarPresentacion(): boolean {
    return !!this.curso && !!this.curso.presentacion;
  }

  home(){
    const currentUrl = this.rout.url;

    // Obtiene la parte de la URL antes de '/modules'
    const baseUrl = currentUrl.split('/courses')[0];
    console.log(baseUrl);
    
    this.rout.navigate([baseUrl, "user-home"]);
  }

  obtenerPuntaje(resultado:any){

    if(resultado.id_quiz_formativo === 2){

      if(Math.round(resultado.ponderadoTotal) == Math.round(resultado.puntajeTotal)){
        return 10;
      }else{

        return Math.round((resultado.ponderadoTotal / resultado.puntajeTotal) * 10);
      }

    }

    if(resultado.ponderadoTotal == resultado.puntajeTotal){
      return 10;
    }else{
      return Math.round((resultado.ponderadoTotal / resultado.puntajeTotal) * 10);
    }
    
  }


  exam(){
    const currentUrl = this.rout.url;
    this.rout.navigate([currentUrl, "exam"]);
  }

}
