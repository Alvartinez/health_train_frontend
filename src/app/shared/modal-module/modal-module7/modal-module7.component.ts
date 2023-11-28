import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-module7',
  templateUrl: './modal-module7.component.html',
  styleUrls: ['./modal-module7.component.css']
})
export class ModalModule7Component {

  constructor(private location: Location, private router:Router) {}

  navegarAtras() {
    this.location.back();
  }

  modulo(){
    const currentPath = this.location.path(); // Obtiene la ruta actual
    const nuevaRuta = currentPath.replace(/\/modulo-info\d+/, '');

    this.router.navigate([nuevaRuta]);
  }

  courses = [
    {
      modulo: "1", title: 'HISTORIA Y EVOLUCIÓN',
      description: 'A continuación, se presentan cada uno de los acontecimientos o descubrimientos más importantes que se han presentado en microbiología relacionada con la industria alimentaria a lo largo de los años.',
      objetivo: "Al finalizar el módulo, se pretende que el aprendiz, se introduzca en la magia de la historia de personajes que marcaron historia en relación con los alimentos y los microorganismos, así como inventos, hallazgos y pautas que dejaron huella y son la base de la bacteriología moderna.",
      competencias: [
        "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",

        "Identifica las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, reconociendo cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo.",

        "Desarrolla charlas y encuentros con personal del sector productivo para transmitir mensajes de prevención en la contaminación de los alimentos y el agua."
      ],
      duracion: "24",
      temas: [
        "1. Historia y evolución",
        "2. Características específicas de las bacterias para el diagnóstico a nivel industrial y clínico",
        "2.1 Dimensiones",
        "2.2 Resistencia",
        "2.3 Heterogeneidad",
        "2.4 Multiplicación",
        "2.5 Ubicuidad",
        "2.6 Patogenicidad",
        "2.7 Plasticidad genética",
        "2.8 Flexibilidad metabólica",
        "3. Existen alimentos implicados en infecciones virales, incluida el agua",
        "4. Alimentos contaminados por virus"
      ]
    },
    
    {
      modulo: "2", title: 'LEGISLACIONES E INSTITUCIONES',
      description: 'En el siguiente modulo se encuentran cada una de las resoluciones, decretos e instituciones nacionales / internacionales de mayor interés que abarcan información referente a las buenas practicas de Manufactura en el sector alimentario, las cuales deben conocerse para interpretar cada uno de los procesos y directrices que se implementan en las empresas que trabajen bajo estándares de calidad, para su mayor interpretación encontrará un enlace URL el cual lo direccionará de manera oportuna a información más amplia para cada una de normativas o instituciones.',
      objetivo: "En este módulo el aprendiz va a conocer la evolución en materia de legislación plasmada en leyes, decretos, resoluciones y las instituciones que los avalan, así como las funciones que cumplen estas importantes organizaciones y su rol de inspección, vigilancia y control de las Buenas prácticas de manufactura.",
      competencias: [
        "Aplica conocimientos y métodos actualizados de control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",

        "Desarrolla una visita de inspección, vigilancia y control sobre las BPM.",

        "Desarrolla charlas y encuentros con personal del sector productivo para transmitir mensajes de prevención en la contaminación de los alimentos y el agua."
      ],
      duracion: "72",
      temas: [
        "1. Legislaciones",
        "2. Instituciones",
        "2.1. Instituciones Internacionales",
        "2.2. Instituciones Nacionales"
      ]
        },
    
      {
        modulo: "3", title: 'EDIFICACIÓN E INSTALACIONES',
        description: 'En Colombia, es de vital importancia garantizar la inocuidad de los alimentos, y por ende los establecimientos que son destinados a la fabricación, procesamiento, preparación, envase, almacenamiento, distribución, comercialización y expendio de alimentos, deben tener en cuenta la normativa estipulada para el logro de ese objetivo, la inocuidad.',
        objetivo: "Al finalizar el módulo, el estudiante reconocerá los establecimientos destinados a la fabricación, procesamiento, preparación, envase, almacenamiento, distribución, comercialización y expendio de alimentos deberán cumplir las condiciones generales en cuanto a edificaciones e instalaciones.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",

          "Desarrolla una visita de inspección, vigilancia y control sobre las BPM.",
  
          "Desarrolla charlas y encuentros con personal del sector productivo para transmitir mensajes de prevención en la contaminación de los alimentos y el agua."
        ],
        duracion: "24",
        temas: [
          "1.	Localización y accesos",
          "1.1.	Diseño y construcción",
          "1.2.	Abastecimiento de aguas",
          "1.3.	Disposición de residuos líquidos",
          "1.4.	Disposición de residuos sólidos",
          "2.	Instalaciones sanitarias",
          "3.	Condiciones específicas de las áreas de elaboración",
          "3.1. Pisos y drenajes",
          "3.2. Paredes",
          "3.3. Techos",
          "3.4. Ventanas y otras aberturas",
          "3.5. Puertas",
          "3.6. Escaleras",
          "3.7. Iluminación",
          "3.8. Ventilación"
        ]
      },
    
      {
        modulo: "4", title: 'EQUIPOS Y UTENSILIOS',
        description: '"En el siguiente módulo se conocerán aspectos importantes para contribuir con calidad e inocuidad. Para lograrlo, es crucial tener en cuenta que los equipos y utensilios utilizados en el procesamiento, fabricación, preparación, envasado y expendio de alimentos dependen del tipo de alimento, la materia prima o insumo, la tecnología a emplear y la máxima capacidad de producción prevista. Todos ellos deben estar diseñados, construidos, instalados y mantenidos de manera que se evite la contaminación del alimento, se facilite la limpieza y desinfección de sus superficies y se permita el desempeño adecuado para el uso previsto.',
        objetivo: "Al finalizar el módulo, el aprendiz identificará que los equipos y utensilios utilizados en el procesamiento, fabricación, preparación, envasado y expendio de alimentos dependen del tipo de alimento, de la materia prima o insumo, de la tecnología a emplear y de la máxima capacidad de producción prevista. A su vez, reconocerá que todos ellos deben estar diseñados, construidos, instalados y mantenidos de manera que se evite la contaminación del alimento.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",

          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",

          "Identificar las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, reconociendo cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo.",

          "Desarrolla una visita de inspección, vigilancia y control sobre las BPM",

          "Desarrolla charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención en la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        temas: [
          "1.	Características específicas de los equipos y utensilios",
          "2.	Condiciones de instalación y funcionamiento",
          "3.	Fuentes de contaminación de los alimentos",
          "4.	¿Qué es la inspección, vigilancia y control ( IVC) sanitarias?",
          "5.	Importancia del agua"
        ]
      },
    
      {
        modulo: "5", title: 'PERSONAL MANIPULADOR DE ALIMENTOS',
        description: 'Desde la casa, una cafetería, restaurante o cualquier tipo de empresa que procese alimentos, se requiere la intervención de un actor y a su vez protagonista, como lo es el manipulador de alimentos. Se considera como tal a toda persona que interviene de manera directa e indirecta en el manejo de los alimentos. Su participación o protagonismo no solo puede limitarse al buen sabor, presentación y contenido de un producto, sino también a su calidad e inocuidad. Sin embargo, muchas veces se convierte en protagonista por inconvenientes que han llevado a las personas a enfermarse, o incluso a morir, a causa del consumo de alimentos mal manejados o incorrectamente almacenados, entre otras tantas causas de su deterioro. Por lo tanto, es necesario tener en cuenta el contenido de este módulo para, de esta manera, estar preparados en el momento en que se requiera preparar algún alimento o se desee informar sobre este aspecto tan importante. De esta forma, se contará con el conocimiento necesario de cada una de las exigencias para lograr alimentos inocuos.',
        objetivo: "Al finalizar el módulo, el aprendiz sabrá diferenciar cada una de las exigencias a tener en cuenta en el personal manipulador de alimentos, con el fin de actuar de manera preventiva y correctiva ante la ocasión de contaminación de los alimentos.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",

          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",

          "Identifica las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo.",

          "Desarrolla una visita de inspección, vigilancia y control sobre las BPM",

          "Desarrolla charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención en la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        temas: [
          "1.	Características Generales y especificas del personal manipulador",
          "1.1.	Estado de salud",
          "1.2.	Educación y capacitación",
          "1.3.	Plan de capacitación",
          "1.4.	Prácticas higiénicas y medidas de protección",
          "2.	Características de las bacterias que pudieran estar presentes en las manos de los manipuladores de alimentos",
          "3.	También se pueden llegar a encontrar Norovirus y el virus de la hepatitis A",
          "4.	El agua y el personal manipulador de alimentos"
        ]
      },
    
      {
        modulo: "6", title: 'REQUISITOS DE HIGIENE Y FABRICACION',
        description: 'En la industria alimentaria, también se tiene en cuenta el inicio de las operaciones, que parte desde todas las materias primas e insumos para la fabricación, así como las actividades de fabricación, preparación, procesamiento, envasado y almacenamiento, deben cumplir con los requisitos descritos en este capítulo para garantizar la inocuidad del alimento, por ello te invitamos a que leas con atención.',
        objetivo: "Al finalizar el módulo, el aprendiz estará en capacidad de identificar todas las materias primas e insumos para la fabricación. Asimismo, deberá asegurarse de que las actividades de fabricación, preparación, procesamiento, envasado y almacenamiento cumplan con los requisitos descritos en este módulo para garantizar la inocuidad del alimento.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",

          "Desarrolla una visita de inspección, vigilancia y control sobre las BPM",

          "Desarrolla charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención en la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        temas: [
          "1.	Materias primas e insumos",
          "2.	Envases y embalajes",
          "3.	Fabricación",
          "4.	Envasado y embalado",
          "5.	Prevención de la contaminación cruzada"
        ]
      },
    
      {
        modulo: "7", title: 'ASEGURAMIENTO Y CONTROL DE LA CALIDAD E INOCUIDAD',
        description: 'En esta sección, aprenderás que todas las operaciones de fabricación, procesamiento, envase, embalado, almacenamiento, distribución, comercialización y expendio de los alimentos deben estar bajo estrictos controles de calidad e inocuidad y que sean apropiados según el tipo de producto, que se esté manejando.  También entenderás porqué, cuando se siguen apropiados procedimientos de control de calidad e inocuidad conducen a prevenir los defectos evitables y reducir los defectos naturales o inevitables a niveles tales que no representen riesgo para la salud.',
        objetivo: "Al finalizar el módulo, el estudiante llegará a Integrar todos procedimientos de control de calidad e inocuidad deben prevenir los defectos evitables y reducir los defectos naturales o inevitables a niveles tales que no representen riesgo para la salud. Estos controles variarán según el tipo de alimento y las necesidades del establecimiento y deben rechazar todo alimento que represente riesgo para la salud del consumidor.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",

          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",

          "Identifica las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo",

          "Desarrolla la capacidad de analizar alimentos y aguas",

          "Desarrolla una visita de inspección, vigilancia y control sobre las BPM",

          "Desarrolla charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        temas: [
          "1.	Calidad e inocuidad",
          "2.	Sistemas de control",
          "3.	Garantía de la confiabilidad de las mediciones"
        ]
      },
    
      {
        modulo: "8", title: 'SANEAMIENTO',
        description: 'En este módulo, descubrirás la importancia del Plan de Saneamiento para obtener alimentos seguros y de calidad. Además, reconocerás que toda persona natural o jurídica propietaria de un establecimiento dedicado a procesos que impliquen la fabricación, procesamiento, envasado, embalaje, almacenamiento y expendio de alimentos y sus materias primas debe implementar y desarrollar un Plan de Saneamiento con objetivos claramente definidos y los procedimientos necesarios para reducir los riesgos de contaminación de los alimentos.',
        objetivo: "Al finalizar el módulo, el aprendiz estará preparado para sensibilizar sobre la importancia de que toda persona natural o jurídica propietaria de un establecimiento que fabrique, procese, envase, embale, almacene y expenda alimentos y sus materias primas debe implementar y desarrollar un Plan de Saneamiento.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",

          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",

          "Identifica las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo",

          "Desarrolla la capacidad de analizar alimentos y aguas",

          "Desarrolla una visita de inspección, vigilancia y control sobre las BPM",
          
          "Desarrolla charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        temas: [
          "1.	Plan de saneamiento ",
          "1.1. Limpieza y desinfección",
          "1.2. Desechos sólidos ",
          "1.3. Control de plagas",
          "1.4.	Abastecimiento y suministro de agua potable "
        ]
      },
    
      {
        modulo: "9", title: 'ALMACENAMIENTO Y TRANSPORTE',
        description: 'En este módulo aprenderás a evitar aspectos en la cadena alimentaria: operaciones y condiciones clave, Condiciones de transporte de alimentos y materias primas, Prohibiciones en la industria alimentaria, Mantenimiento de condiciones sanitarias en distribución y comercialización de alimentos y Condiciones para el expendio de alimentos.',
        objetivo: "Al finalizar el módulo el aprendiz comprenderá la organización de las operaciones y condiciones de almacenamiento, distribución, transporte y comercialización de alimentos para evitar La contaminación, alteración, La proliferación de microorganismos indeseables y el deterioro o daño del envase o embalaje.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",
          
          "Desarrolla  una visita de inspección, vigilancia y control sobre las BPM.",

          "Desarrolla  charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua."
        ],
        duracion: "24",
        temas: [
          "1. Evitando problemas en la cadena alimentaria: operaciones y condiciones clave",
          "1.1. Industria alimentaria",
          "1.2. Almacenamiento",
          "2. Condiciones de transporte de alimentos y materias primas",
          "3. Prohibiciones en la industria alimentaria",
          "4. Mantenimiento de condiciones sanitarias en distribución y comercialización de alimentos",
          "5. Condiciones para el expendio de alimentos"
        ]
      },
    
      {
        modulo: "10", title: 'RESTAURANTES Y ESTABLECIMIENTOS GASTRONÓMICOS',
        description: 'Apreciado aprendiz, has llegado al último módulo de la cartilla, en donde aprenderás sobre los restaurantes, como establecimientos de preparación y venta de alimentos listos para el consumo.',
        objetivo: "Al finalizar el módulo, el aprendiz será consciente sobre la importancia de que en los restaurantes y establecimientos destinados a la preparación y consumo de alimentos cumplirán con las condiciones sanitarias generales.",
        competencias: [
          "Aplica conocimientos y métodos actualizados de Control e inocuidad de los alimentos, con responsabilidad, compromiso, precisión, con base a la normatividad vigente nacional, del INVIMA, ICONTEC, e INS:, Resolución 2674 de 2013, Resolución 0719 de 2015, Protocolo ETAS, Resolución 810 de 2021, Resolución 0714 de 2022, para desarrollar e interpretar resultados de análisis de los grupos de alimentos.",

          "Reconoce las características específicas de las bacterias para el diagnóstico clínico e industrial con base en los fundamentos teóricos y procedimentales de la microbiología.",

          "Identifica las principales enfermedades que causan los virus, sus manifestaciones clínicas, diagnóstico y opciones de prevención y tratamiento. Además, comprender cuáles enfermedades virales tienen importancia en la salud pública de Colombia y el mundo",

          "Desarrolla la capacidad de analizar alimentos y aguas",

          "Desarrolla una visita de inspección, vigilancia y control sobre las BPM",
          
          "Desarrolla charlas y encuentros con personal el sector productivo para transmitir mensajes de prevención de la contaminación de los alimentos y el agua"
        ],
        duracion: "24",
        temas: [
          "1.	Los restaurantes y establecimientos destinados a la preparación y consumo de alimentos cumplirán con las condiciones sanitarias generales",
          "2.	Condiciones específicas del área de preparación de alimentos",
          "3.	Equipos y utensilios",
          "4.	operaciones de preparación y servido de los alimentos"
        ]          
      }
  ];
}
