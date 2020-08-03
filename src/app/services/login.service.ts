import { Injectable } from '@angular/core';
import { Usuarios } from '../modelos/usuarios';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  public url : string;

  constructor(private _http : HttpClient){
      this.url = "http://localhost:8080/";
  }

  login(user:Usuarios):Observable<any>{
      let params = JSON.stringify(user);//para parsear o convertir en tipo Json
      let headers = new HttpHeaders().set('Content-Type','application/json');//simpre tiene que ir poque trabajamos con Json
      //uso el la variable _http cpn el post deacuerdo a como este en el backend "posmaping"
      return this._http.post(this.url+'login',params,{headers:headers});
  }

}
