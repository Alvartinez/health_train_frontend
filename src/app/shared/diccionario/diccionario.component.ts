import { Component } from '@angular/core';

@Component({
  selector: 'app-diccionario',
  templateUrl: './diccionario.component.html',
  styleUrls: ['./diccionario.component.css']
})
export class DiccionarioComponent {

  abecedario = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]

  definicion = {
    actividadAcuosa: {
      titulo: "ACTIVIDAD ACUOSA (Aw)",
      parrafo: "Es la cantidad de agua disponible en un alimento ne¬cesaria para el crecimiento y proliferación de microorganismos.",
      lista: [
        ""
      ]
    },
    alimento: {
      titulo: "ALIMENTO",
      parrafo: "Todo producto natural o artificial, elaborado o no, que ingerido aporta al organismo humano los nutrientes y la energía necesaria para el desarrollo de los procesos biológicos. Se entienden incluidas en la presente definición las bebidas no alcohólicas y aquellas sustancias con que se sazonan algunos comestibles, y que se conocen con el nombre genérico de especias.",
      lista: [
        ""
      ]      
    },
    alimentoAdulterado: {
      titulo: "ALIMENTO ADULTERADO",
      parrafo: "Es aquel:",
      lista: [
        "Al cual se le ha sustraído parte de los elementos constituyentes, reemplazándolos o no por otras sustancias.",
        "Que haya sido adicionado con sustancias no autorizadas.",
        "Que haya sido sometido a tratamientos que disimulen u oculten sus condiciones originales.",
        "Que por deficiencias en su calidad normal hayan sido disimuladas u ocultadas en forma fraudulenta, sus condiciones originales."
      ]      
    },
    alimentoAlterado: {
      titulo: "ALIMENTO ALTERADO",
      parrafo: "Alimento que sufre modificación o degradación, parcial o total, de los constituyentes que le son propios, por agentes físicos, químicos o biológicos. Se incluye, pero no se limita a:",
      lista: [
        "El cual se encuentre por fuera de su vida útil.",
        "No esté siendo almacenado bajo las condiciones necesarias para evitar su alteración."
      ]        
    },
    alimentoContaminado: {
      titulo: "ALIMENTO CONTAMINADO",
      parrafo: "Alimento que sufre modificación o degradación, parcial o total, de los constituyentes que le son propios, por agentes físicos, químicos o biológicos. Se incluye, pero no se limita a:",
      lista: [
        "El cual se encuentre por fuera de su vida útil.",
        "No esté siendo almacenado bajo las condiciones necesarias para evitar su alteración."
      ]        
    },

  }

}
