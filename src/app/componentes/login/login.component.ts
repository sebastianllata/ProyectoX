import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuarios } from 'src/app/modelos/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public usuario:Usuarios;
  constructor(private _loginService :LoginService,private router : Router) {
      this.usuario = new Usuarios("","");
  }

  ngOnInit(): void {}

  onSubmit(formulario:any){
    sessionStorage.removeItem("usuario");
    console.log(this.usuario);
    this._loginService.login(this.usuario).subscribe(
      response =>{
        console.log(response);
        sessionStorage.setItem("usuario",JSON.stringify(response));
        this.router.navigateByUrl("templete");
      },error =>{
        console.log(<any> error);
      }
    );
  }

}
