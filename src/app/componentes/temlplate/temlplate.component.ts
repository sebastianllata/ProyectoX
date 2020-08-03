import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temlplate',
  templateUrl: './temlplate.component.html',
  styleUrls: ['./temlplate.component.css']
})
export class TemlplateComponent implements OnInit {

  public usuario:Usuarios;
  public rol:String;
  public nombre:String;

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
