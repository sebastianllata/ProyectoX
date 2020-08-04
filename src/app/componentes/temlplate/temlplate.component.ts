import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios';
import { Router } from '@angular/router';
import { Personas } from 'src/app/modelos/personas';

@Component({
  selector: 'app-temlplate',
  templateUrl: './temlplate.component.html',
  styleUrls: ['./temlplate.component.css']
})
export class TemlplateComponent implements OnInit {

  public usuario:Usuarios;
  public rol:String;
  public nombre:String;

  public persona:Personas;

  constructor(private router : Router) {
    this.rol = JSON.parse(sessionStorage.getItem("usuario")).nomrol;
    this.nombre =JSON.parse(sessionStorage.getItem("usuario")).nomusuario;
  }

  ngOnInit(): void {

  }

  cerrarSession(){
    console.log("hola");
    sessionStorage.removeItem("usuario");
    this.router.navigateByUrl("login");
  }

  imprimir(){
    console.log("imprimi");
  }
}
