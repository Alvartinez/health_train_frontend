import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ErrorService } from '@rutas/services/error.service';
import { PersonService } from '@rutas/services/persona.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent {

  constructor(private _personaService:PersonService, private _errorService:ErrorService, private toastr:ToastrService){}

  titulo_boton = "Edit";
  isEdit = true;

  filaSeleccionada: any;

  dash = true;
  user = false;
  course = false;
  report = false;
  deleteUser = false;
  newUser = false;
  nameUser = "";
  emailUser = "";
  eleccion = "";
  Rol: string | undefined;
  Estado: string | undefined;
  Text: string | undefined;

  activo: boolean | undefined;

  datosFiltrados: any[] = [];

  isSelect: { [key: string]: string } = {
    "background-color": "#e0e0e058",
    "cursor": "pointer",
    "font-weight": "700"
  }

  isNotSelect: { [key: string]: string } = {
    "background-color": "transparent",
    "cursor": "pointer",
    "font-weight": "700"
  }

  edit: { [key: string]: string } = {
    "position": "relative",
    "display": "flex",
    "align-items": "center",
    "justify-content": "flex-start",
    "width": "100px",
    "height": "40px",
    "border": "none",
    "padding": "0px 20px",
    "background-color": "#2E95B6",
    "cursor": "pointer",
    "border-radius": "10px",
    "box-shadow": "5px 5px 0px rgb(23, 110, 180)",
    "transition-duration": ".3s"
  }

  delet: { [key: string]: string } = {
    "position": "relative",
    "display": "flex",
    "align-items": "center",
    "justify-content": "flex-start",
    "width": "100px",
    "height": "40px",
    "border": "none",
    "padding": "0px 20px",
    "background-color": "#b62e2e",
    "cursor": "pointer",
    "border-radius": "10px",
    "box-shadow": "5px 5px 0px rgb(180, 23, 23)",
    "transition-duration": ".3s"
  }

  rows = [
    { isSelected: false, isEdit: true },
    // Agrega más objetos según la cantidad de filas que desees
  ];
  
  checkDelete(index: number, row:any) {
    this.rows[index].isEdit = !this.rows[index].isEdit;
    row.index = index;
  }

  busqueda(){

    if((this.Estado !== (null || undefined)) && (this.Rol !== (null || undefined)) && (this.Text !== (null || undefined))){
      
    }

    if( (this.Estado !== (null || undefined)) && (this.Rol !== (null || undefined)) ){

    }

    if( (this.Estado !== (null || undefined)) && (this.Text !== (null || undefined))){

    }


    if( (this.Rol !== (null || undefined)) && (this.Text !== (null || undefined))){
      
    }


    if(this.Estado !== (null || undefined) ){

      if(this.Estado === "Activo"){
        this.activo = true;
      }else{
        this.activo = false;
      }

      this._personaService.getStatus(this.activo).subscribe({
        next: (data) => {
          
          this.borrarCampos();

          this.datosFiltrados = data.map((item:any) => {
            const persona:any = item; // Obtener la propiedad persona
            const rol:any = item.rol?.cargo; // Obtener el cargo del rol si existe, de lo contrario, será undefined
          
            return {
              nombre: persona.nombre,
              rol: rol,
              correo: persona.email,
              fecha_registro: persona.fecha_registro,
              estado: persona.estado
            };
          });

          this.rows = this.datosFiltrados.map(() => ({ isSelected: false, isEdit: true }));

        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        } 
      });

    }

    if(this.Rol !== (null || undefined)){
      
      this._personaService.getRoles(this.Rol).subscribe({
        next: (data) => {

          this.borrarCampos();

          this.datosFiltrados = data.map((item:any) => {
            const persona = item.persona; // Obtener la propiedad persona
            const rol = item.rol?.cargo; // Obtener el cargo del rol si existe, de lo contrario, será undefined
          
            return {
              nombre: persona.nombre,
              rol: rol,
              correo: persona.email,
              fecha_registro: persona.fecha_registro,
              estado: persona.estado
            };
          });

        this.rows = this.datosFiltrados.map(() => ({ isSelected: false, isEdit: true }));

        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        } 
      });

    }

    if(this.Text !== (null || undefined) ){
      
      this._personaService.getName(this.Text).subscribe({
        next: (data) => {

          this.borrarCampos();

          this.datosFiltrados = data.map((item:any) => {
            const persona = item; // Obtener la propiedad persona
            const rol = item.rol?.cargo; // Obtener el cargo del rol si existe, de lo contrario, será undefined
          
            return {
              nombre: persona.nombre,
              rol: rol,
              correo: persona.email,
              fecha_registro: persona.fecha_registro,
              estado: persona.estado
            };
          });

        this.rows = this.datosFiltrados.map(() => ({ isSelected: false, isEdit: true }));

        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        } 
      });

    }
    
  }

  eliminarFila(row:any, index: number) {
    this.deleteUser = true;
    // this.datosFiltrados.splice(index, 1);
    // this.rows.splice(index, 1);

    this.filaSeleccionada = row;
  }

  borrarCampos(){
    this.Rol= "" || undefined;
    this.Estado = "" || undefined;
    this.Text = "" || undefined;
  }

  new_User(){
    this.newUser = true;
  }

  close_NewUser(){
    this.newUser = false;
  }

  goodCreate(){
    if(this.nameUser === "" || this.emailUser === "" || this.eleccion === ""){
      this.toastr.error("Completar todos los campos ", "Error ");
      return;
    }
    this.toastr.success("Usuario creado exitosamente");
    this.newUser = false;
  }

  dashboard(){
    this.dash = true;
    this.user = false;
    this.course = false;
    this.report = false;
  }

  userDash(){
    this.user = true;
    this.dash = false;
    this.course = false;
    this.report = false;
  }

  aceptar(){
    console.log(this.filaSeleccionada.index);
    console.log(this.datosFiltrados[this.filaSeleccionada.index]);
    this.toastr.success("Usuario eliminado exitosamente");
    this.deleteUser = false;
  }

  cancelar(){
    this.deleteUser = false;
  }

}
