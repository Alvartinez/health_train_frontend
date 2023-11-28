import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  public page!: number;

  constructor(private router: Router, private route: ActivatedRoute){}

  courses = [
      {
        modulo: "1",
        title: 'HISTORIA Y EVOLUCIÓN',
        description: 'A continuación, se presentan cada uno de los acontecimientos o descubrimientos más importantes que se han presentado en microbiología relacionada con la industria alimentaria a lo largo de los años.',
        objetivo: "Al finalizar el módulo, se pretende que el estudiante o el aprendiz, se introduzca en la magia de la historia de personajes que marcaron historia en relación con los alimentos y los microorganismos, así como inventos, hallazgos y pautas que dejaron huella y son la base de la Bacteriología moderna.",
        competencias: [
          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",
          "Identificar las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo.",
          "El estudiante estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua."
        ],
        duracion: "24",
        url: "/modulo-info"
      },
    
      {
        modulo: "2",
        title: 'LEGISLACIONES E INSTITUCIONES',
        description: 'En el siguiente modulo se encuentran cada una de las resoluciones, decretos e instituciones nacionales / internacionales de mayor interés que abarcan información referente a las buenas practicas de Manufactura en el sector alimentario, las cuales deben conocerse para interpretar cada uno de los procesos y directrices que se implementan en las empresas que trabajen bajo estándares de calidad, para su mayor interpretación encontrará un enlace URL el cual lo direccionará de manera oportuna a información más amplia para cada una de normativas o instituciones.',
        objetivo: "En este módulo el aprendiz va a conocer la evolución en materia de legislación plasmada en leyes, decretos, resoluciones y las instituciones que los avalan, así como las funciones que cumplen estas importantes organizaciones y su rol de inspección, vigilancia y control de las Buenas prácticas de manufactura.",
      competencias: [
        "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
        "El aprendiz estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM.",
        "El aprendiz estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua."
      ],
        duracion: "72",
        url: "/modulo-info2"
      },
    
      {
        modulo: "3",
        title: 'EDIFICACIÓN E INSTALACIONES',
        description: 'En Colombia, es de vital importancia garantizar la inocuidad de los alimentos, y por ende los establecimientos que son destinados a la fabricación, procesamiento, preparación, envase, almacenamiento, distribución, comercialización y expendio de alimentos, deben tener en cuenta la normativa estipulada para el logro de ese objetivo, la inocuidad.',
        objetivo: "Al finalizar el módulo, el estudiante reconocerá los establecimientos destinados a la fabricación, procesamiento, preparación, envase, almacenamiento, distribución, comercialización y expendio de alimentos deberán cumplir las condiciones generales en cuanto a edificaciones e instalaciones.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          "El estudiante estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM.",
          "El estudiante estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua."
        ],
        duracion: "24",
        url: "/modulo-info3"
      },
    
      {
        modulo: "4",
        title: 'EQUIPOS Y UTENSILIOS',
        description: 'En el siguiente modulo se conocerán aspectos importantes para contribuir con calidad e inocuidad, con esto, se debe contar los equipos y utensilios utilizados en el procesa¬miento, fabricación, preparación, envasado y expendio de alimentos dependen del tipo del alimento, materia prima o insumo, de la tecnología a emplear y de la máxima capacidad de producción prevista. Todos ellos deben estar diseñados, construidos, instalados y mantenidos de manera que se evite la contaminación del alimento, facilite la limpieza y desinfección de sus superficies y permitan desempeñar adecuadamente el uso previsto.',
        objetivo: "Al finalizar el módulo el estudiante identificará que los equipos y utensilios utilizados en el procesamiento, fabricación, preparación, envasado y expendio de alimentos dependen del tipo del alimento, materia prima o insumo, de la tecnología a emplear y de la máxima capacidad de producción prevista, a su vez reconocer que todos ellos deben estar diseñados, construidos, instalados y mantenidos de manera que se evite la contaminación del alimento.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",
          "Identificar las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo.",
          "El estudiante estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM",
          "El estudiante estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        url: "/modulo-info4"
      },
    
      {
        modulo: "5",
        title: 'PERSONAL MANIPULADOR DE ALIMENTOS',
        description: 'Desde la casa, una cafetería, restaurante hasta cualquier tipo de empresa que procese alimentos, requiere de la intervención de un actor y a su vez protagonista, como lo es el manipulador de alimentos, quien se considera como toda persona que interviene de manera directa e indirecta en el manejo de los alimentos, y su participación o protagonismo no solo puede quedar en el buen sabor, presentación y contenido de un producto, sino en su calidad e inocuidad, pero muchas veces es protagonista por inconvenientes que han llevado a las personas a enfermarse, o incluso morir a causa del consumo de alimentos mal manejados, incorrectamente almacenados, entre otras tantas causas de su deterioro. Por lo anterior es necesario tener en cuenta el contenido de este módulo para de esta manera, cuando en algún momento se requiera preparar algún alimento, o se desee informar sobre este aspecto tan importante, se tenga el conocimiento necesario de cada una de las exigencias para lograr alimentos inocuos.',
        objetivo: "Al finalizar el módulo, el estudiante sabrá diferenciar cada una de las exigencias a tener en cuenta en el personal manipulador de alimentos, a fin de actuar de manera preventiva y correctiva y existe la ocasión de contaminación de los alimentos.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",
          "Identificar las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo.",
          "El estudiante estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM",
          "El estudiante estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        url: "/modulo-info5"
      },
    
      {
        modulo: "6",
        title: 'REQUISITOS DE HIGIENE Y FABRICACION',
        description: 'En la industria alimentaria, también se tiene en cuenta el inicio de las operaciones, que parte desde todas las materias primas e insumos para la fabri¬cación, así como las actividades de fabricación, preparación, procesamiento, envasado y almacenamiento deben cumplir con los requisitos descritos en este capítulo para garantizar la inocuidad del alimento, por ello te invitamos a que leas con atención.',
        objetivo: "Al finalizar el módulo, el estudiante estará en capacidad de Identificar todas las materias primas e insumos para la fabricación, así como las actividades de fabricación, preparación, procesamiento, envasado y almacenamiento deben cumplir con los requisitos descritos en este módulo para garantizar la inocuidad del alimento.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          "El estudiante estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM",
          "El estudiante estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        url: "/modulo-info6"
      },
    
      {
        modulo: "7",
        title: 'ASEGURAMIENTO Y CONTROL DE LA CALIDAD E INOCUIDAD',
        description: 'En esta sección, aprenderás que todas las operaciones de fabricación, procesamiento, envase, embalado, almacenamiento, distribución, comercialización y expendio de los alimentos deben estar bajo estrictos controles de calidad e inocuidad y que sean apropiados según el tipo de producto, que se esté manejando.  También entenderás porqué, cuando se siguen apropiados procedimientos de control de calidad e inocuidad conducen a prevenir los defectos evitables y reducir los defectos naturales o inevitables a niveles tales que no representen riesgo para la salud.',
        objetivo: "Al finalizar el módulo, el estudiante llegará a Integrar todos procedimientos de control de calidad e inocuidad deben prevenir los defectos evitables y reducir los defectos naturales o inevitables a niveles tales que no representen riesgo para la salud. Estos controles variarán según el tipo de alimento y las necesidades del establecimiento y deben rechazar todo alimento que represente riesgo para la salud del consumidor.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",
          "Identificar las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo",
          "El estudiante estará en capacidad de desarrollar análisis de alimentos y aguas",
          "El estudiante estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM",
          "El estudiante estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        url: "/modulo-info7"
      },
    
      {
        modulo: "8",
        title: 'SANEAMIENTO',
        description: 'En este módulo, hallarás la importancia del Plan de saneamiento, para obtener alimentos seguros y de calidad. Además de reconocer que toda persona natural o jurídica propietaria de un establecimiento que se dedique a procesos que implique, que fabrique, procese, envase, embale, almacene y expenda alimentos y sus materias primas debe implantar y desarrollar un Plan de Saneamiento con objetivos claramente definidos y con los procedimientos requeridos para disminuir los riesgos de contaminación de los alimentos.',
        objetivo: "Al finalizar el módulo el estudiante estará preparado para sensibilizar sobre la importancia de que toda persona natural o jurídica propietaria del establecimiento que fabrique, procese, envase, embale, almacene y expenda alimentos y sus materias primas debe implantar y desarrollar un Plan de Saneamiento.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",
          "Identificar las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo",
          "El estudiante estará en capacidad de desarrollar análisis de alimentos y aguas",
          "El estudiante estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM",
          "El estudiante estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        url: "/modulo-info8"
      },
    
      {
        modulo: "9",
        title: 'ALMACENAMIENTO Y TRANSPORTE',
        description: 'En este módulo aprenderás a evitar aspectos en la cadena alimentaria: operaciones y condiciones clave, Condiciones de transporte de alimentos y materias primas, Prohibiciones en la industria alimentaria, Mantenimiento de condiciones sanitarias en distribución y comercialización de alimentos y Condiciones para el expendio de alimentos.',
        objetivo: "Al finalizar el módulo el estudiante comprenderá la organización de las operaciones y condiciones de almacenamiento, distribución, transporte y comercialización de alimentos para evitar La contaminación, alteración, La proliferación de microorganismos indeseables y el deterioro o daño del envase o embalaje.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          "El aprendiz estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM.",
          "El aprendiz estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua."
        ],
        duracion: "24",
        url: "/modulo-info9"
      },
    
      {
        modulo: "10",
        title: 'RESTAURANTES Y ESTABLECIMIENTOS GASTRONÓMICOS',
        description: 'Apreciado aprendiz, has llegado al último módulo de la cartilla, en donde aprenderás sobre los restaurantes, como establecimientos de preparación y venta de alimentos listos para el consumo.',
        objetivo: "Al finalizar el módulo, el estudiante será consciente sobre la importancia de que en los restaurantes y establecimientos destinados a la preparación y consumo de alimentos cumplirán con las condiciones sanitarias generales.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",
          "Identificar las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo",
          "El estudiante estará en capacidad de desarrollar análisis de alimentos y aguas",
          "El estudiante estará en capacidad de desarrollar una visita de inspección, vigilancia y control sobre las BPM",
          "El estudiante estará en capacidad de desarrollar charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        url: "/modulo-info10"
      }
  ];
  
  truncate(text: string, size: number) {
    if (text.length <= size) {
      return text;
    }

    return text.substring(0, size) + "...";
  }

  infoModulo(info:any){
    this.router.navigate(['modules/modulo', info,'modulo-info'+info], { relativeTo: this.route });
  }
  
}
