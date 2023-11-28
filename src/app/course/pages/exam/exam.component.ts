import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@rutas/services/error.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { EvaluationService } from '@rutas/services/evaluation.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {

  constructor(private router: Router, private location: Location, private toastr: ToastrService, private route: ActivatedRoute, private _evaService: EvaluationService, private _errorService:ErrorService) {}

  aviso:boolean = true;
  pregunta:boolean =false;
  retro:boolean = false;
  numero:any;
  tokenId:any;
  jsonMayor = {
    preguntas: [] as any[]
  };
  sum:any = 0;

  fechaActual = new Date()
  year = this.fechaActual.getFullYear();
  month = this.fechaActual.getMonth() + 1;
  day = this.fechaActual.getDate();
  hours = this.fechaActual.getHours();
  minutes =this.fechaActual.getUTCMinutes();
  seconds = this.fechaActual.getSeconds();
  dateStr = `${this.year}-${this.month}-${this.day}-${this.hours}:${this.minutes}:${this.seconds}`;

  answer1: string | undefined;
  answer2: string | undefined;
  answer3: string | undefined;
  answer4: string | undefined;
  answer5: string | undefined;
  answer6: string | undefined;
  answer7: string | undefined;
  answer8: string | undefined;
  answer9: string | undefined;
  answer10: string | undefined;
  answer11: string | undefined;
  answer12: string | undefined;
  answer13: string | undefined;
  answer14: string | undefined;
  answer15: string | undefined;
  answer16: string | undefined;
  answer17: string | undefined;
  answer18: string | undefined;
  answer19: string | undefined;
  answer20: string | undefined;

  ponderado1 = 0;
  ponderado2 = 0;
  ponderado3 = 0;
  ponderado4 = 0;
  ponderado5 = 0;
  ponderado6 = 0;
  ponderado7 = 0;
  ponderado8 = 0;
  ponderado9 = 0;
  ponderado10 = 0;
  ponderado11 = 0;
  ponderado12 = 0;
  ponderado13 = 0;
  ponderado14 = 0;
  ponderado15 = 0;
  ponderado16 = 0;
  ponderado17 = 0;
  ponderado18 = 0;
  ponderado19 = 0;
  ponderado20 = 0;

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
  isCorrect8: boolean = false;
  isCorrect9: boolean = false;
  isCorrect10: boolean = false;
  isCorrect11: boolean = false;
  isCorrect12: boolean = false;
  isCorrect13: boolean = false;
  isCorrect14: boolean = false;
  isCorrect15: boolean = false;
  isCorrect16: boolean = false;
  isCorrect17: boolean = false;
  isCorrect18: boolean = false;
  isCorrect19: boolean = false;
  isCorrect20: boolean = false;

  ngOnInit(){
    this.aviso = true;
    this.pregunta = false;
    this.retro = false;

    const currentPath = this.location.path();
    console.log("current: "+currentPath);
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 2];

    this.numero = parseInt(ultimoSegmento, 10);

    console.log(this.numero);

    const token:any = localStorage.getItem("x-token");
    const decoded:any = jwt_decode(token);
    this.tokenId = decoded.id;
    console.log(this.tokenId);

  }

  avisoCerrar(){
    this.aviso = false;
    this.pregunta = true;
  }

  crearPregunta(
    id_persona:any,
    id_evaluacion:any,
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
      id_evaluacion,
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

  enunciado1 = "¿En qué año se construyó el microscopio primitivo?";
  enunciado2 = "¿Quién descubrió la vida microscópica?";
  enunciado3 = "¿Qué tipo de microorganismos, descubrió Louis Pasteur como causantes del proceso de fermentación de ciertos ácidos y sustancias indeseables (que agriaban el vino o la cerveza)?";
  enunciado4 = "¿Cuál es la autoridad directiva y coordinadora de la acción sanitaria en el sistema de las Naciones Unidas?";
  enunciado5 = "¿Qué son las BPM?";
  enunciado6 = "¿Quién creó los BPM?";
  enunciado7 = "Autoridad sanitaria encargada de vigilar las (BPM) y emitir conceptos sanitarios frente a las mismas.";
  enunciado8 = "¿Quién certifica las BPM en Colombia?";
  enunciado9 = "¿Qué garantiza las BPM en la industria alimentaria?";
  enunciado10 = "¿Cuál es la norma vigente de las BPM en la industria alimentaria de Colombia?";
  enunciado11 = "¿Cuáles son los 4 programas que hacen parte del plan de saneamiento?";
  enunciado12 = "Agencia del Gobierno federal de los Estados Unidos cuya misión es proteger la salud pública mediante la prevención y el control de enfermedades, lesiones y discapacidades.";
  enunciado13 = "Resolución por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.";
  enunciado14 = "¿Cuántas horas debe de recibir capacitación anualmente un Manipulador de industria alimentaria, Según la Resolución 2674 del 2013?";
  enunciado15 = "Medida de la disponibilidad del agua para las funciones biológicas y se relaciona con el agua libre, presente en un alimento.";
  enunciado16 = "Los productos devueltos a la empresa por defectos de fabricación, que tengan incidencia sobre la inocuidad y calidad del alimento podrán someterse a procesos de reenvase, reelaboración, reproceso, corrección o reesterilización";
  enunciado17 = "¿Todas las fábricas de alimentos que procesen elaboren o envasen alimentos deben tener acceso a un laboratorio de pruebas externo?";
  enunciado18 = "El Ministerio de Ambiente y Desarrollo Sostenible, en conjunto con el Ministerio de Vivienda, Ciudad y Territorio, mediante Resolución, establecieron un código de colores unificado para la separación de residuos sólidos. ¿Cuáles son los colores establecidos actualmente?";
  enunciado19 = "Los plaguicidas y detergentes deben almacenarse en áreas dependientes de producción y su manipulación sólo podrá hacerla el personal idóneo";
  enunciado20 = "Respecto a las BPM Dentro de un restaurante, las áreas deben ser independientes de cualquier tipo de vivienda y no pueden ser utilizadas como dormitorio.";

  culminar() {
    
    if (this.answer1 == null || this.answer2 == null || this.answer3 == null || this.answer4 == null || this.answer5 == null || this.answer6 == null || this.answer7 == null || this.answer8 == null || this.answer9 == null || this.answer10 == null || this.answer11 == null || this.answer12 == null || this.answer13 == null || this.answer14 == null || this.answer15 == null || this.answer16 == null || this.answer17 == null || this.answer18 == null || this.answer19 == null || this.answer20 == null ) {
      this.toastr.error("Debes completar todos los campos", "Error");
      return;
    }

    this.pregunta = false;
    this.retro = true;

    if (this.answer1 == "1674") {
      this.isCorrect1 = true;
      this.ponderado1= 5;
      this.sum+= 1;
    }

    if (this.answer2 == "Anton van Leeuwenhoek") {
      this.isCorrect2 = true;
      this.ponderado2= 5;
      this.sum+= 1;
    }

    if (this.answer3 == "Bacterias") {
      this.isCorrect3 = true;
      this.ponderado3= 5;
      this.sum+= 1;
    }

    if (this.answer4 == "OMS") {
      this.isCorrect4 = true;
      this.ponderado4= 5;
      this.sum+= 1;
    }

    if (this.answer5 == "Buenas Prácticas de Manufactura") {
      this.isCorrect5 = true;
      this.ponderado5= 5;
      this.sum+= 1;
    }

    if (this.answer6 == "Frederick Taylor") {
      this.isCorrect6 = true;
      this.ponderado6= 5;
      this.sum+= 1;
    }

    if (this.answer7 == "INVIMA") {
      this.isCorrect7 = true;
      this.ponderado7= 5;
      this.sum+= 1;
    }

    if (this.answer8 == "ICA") {
      this.isCorrect8 = true;
      this.ponderado8= 5;
      this.sum+= 1;
    }

    if (this.answer9 == "La inocuidad en la cadena de producción de los alimentos procesados.") {
      this.isCorrect9 = true;
      this.ponderado9= 5;
      this.sum+= 1;
    }

    if (this.answer10 == "Resolución 2674 de 2013") {
      this.isCorrect10 = true;
      this.ponderado10= 5;
      this.sum+= 1;
    }

    if (this.answer11 == "Programa de limpieza y desinfección, programa de control integral de plagas, programa de manejo de residuos sólidos y líquidos, programa de abastecimiento de agua potable.") {
      this.isCorrect11 = true;
      this.ponderado11= 5;
      this.sum+= 1;
    }

    if (this.answer12 == "CDC") {
      this.isCorrect12 = true;
      this.ponderado12= 5;
      this.sum+= 1;
    }

    if (this.answer13 == "Resolución 2115 del 2007") {
      this.isCorrect13 = true;
      this.ponderado13= 5;
      this.sum+= 1;
    }

    if (this.answer14 == "10 horas") {
      this.isCorrect14 = true;
      this.ponderado14= 5;
      this.sum+= 1;
    }

    if (this.answer15 == "Actividad del agua (aw)") {
      this.isCorrect15 = true;
      this.ponderado15= 5;
      this.sum+= 1;
    }

    if (this.answer16 == "No") {
      this.isCorrect16 = true;
      this.ponderado16= 5;
      this.sum+= 1;
    }

    if (this.answer17 == "Incorrecto, deben tener acceso a un laboratorio propio o externo, no solo externo, sino de cualquier índole, siempre y cuando esté avalado para las pruebas requeridas.") {
      this.isCorrect17 = true;
      this.ponderado17= 5;
      this.sum+= 1;
    }

    if (this.answer18 == "Verde- Blanco - Negro") {
      this.isCorrect18 = true;
      this.ponderado18= 5;
      this.sum+= 1;
    }

    if (this.answer19 == "Incorrecto") {
      this.isCorrect19 = true;
      this.ponderado19= 5;
      this.sum+= 1;
    }

    if (this.answer20 == "Correcto") {
      this.isCorrect20 = true;
      this.ponderado20= 5;
      this.sum+= 1;
    }


    this.crearPregunta(
      this.tokenId, this.numero, 32, this.enunciado1,{nombre:this.answer1, valor:this.isCorrect1, ponderado: this.ponderado1},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 33, this.enunciado2,{nombre:this.answer2, valor:this.isCorrect2, ponderado: this.ponderado2},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 34, this.enunciado3,{nombre:this.answer3, valor:this.isCorrect3, ponderado: this.ponderado3},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 35, this.enunciado4,{nombre:this.answer4, valor:this.isCorrect4, ponderado: this.ponderado4},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 36, this.enunciado5,{nombre:this.answer5, valor:this.isCorrect5, ponderado: this.ponderado5},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 37, this.enunciado6,{nombre:this.answer6, valor:this.isCorrect6, ponderado: this.ponderado6},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 38, this.enunciado7,{nombre:this.answer7, valor:this.isCorrect7, ponderado: this.ponderado7},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 39, this.enunciado8,{nombre:this.answer8, valor:this.isCorrect8, ponderado: this.ponderado8},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 40, this.enunciado9,{nombre:this.answer9, valor:this.isCorrect9, ponderado: this.ponderado9},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 41, this.enunciado10,{nombre:this.answer10, valor:this.isCorrect10, ponderado: this.ponderado10},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 42, this.enunciado11,{nombre:this.answer11, valor:this.isCorrect11, ponderado: this.ponderado11},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 43, this.enunciado12,{nombre:this.answer12, valor:this.isCorrect12, ponderado: this.ponderado12},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 44, this.enunciado13,{nombre:this.answer13, valor:this.isCorrect13, ponderado: this.ponderado13},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 45, this.enunciado14,{nombre:this.answer14, valor:this.isCorrect14, ponderado: this.ponderado14},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 46, this.enunciado15,{nombre:this.answer15, valor:this.isCorrect15, ponderado: this.ponderado15},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 47, this.enunciado16,{nombre:this.answer16, valor:this.isCorrect16, ponderado: this.ponderado16},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 48, this.enunciado17,{nombre:this.answer17, valor:this.isCorrect17, ponderado: this.ponderado17},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 49, this.enunciado18,{nombre:this.answer18, valor:this.isCorrect18, ponderado: this.ponderado18},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 50, this.enunciado19,{nombre:this.answer19, valor:this.isCorrect19, ponderado: this.ponderado19},"seleccion", false, 5, this.dateStr 
    );

    this.crearPregunta(
      this.tokenId, this.numero, 51, this.enunciado20,{nombre:this.answer20, valor:this.isCorrect20, ponderado: this.ponderado20},"seleccion", false, 5, this.dateStr 
    );

  }

  culminado(){

    this._evaService.saveEvaluation(this.jsonMayor).subscribe({
      next: (data) =>{
        // this.router.navigate(['feedbacks-exam'], { relativeTo: this.route });
        const currentUrl = this.router.url;

        const baseUrl = currentUrl.split('/exam')[0];
        
        // Navega a la nueva URL
        this.router.navigateByUrl(baseUrl);
    
        this.toastr.success("Has realizado exitosamente la evaluación", "Exitoso");
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msgError(e);
      }    
    });


  }

  
}
