import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginComponent} from '../componentes/login/login.component';
import {Personas} from '../modelos/personas'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url='http://localhost:8080';
  constructor(private http:HttpClient) { }
  getListarPersona(){
    return  this.http.get<Persona[]>(this.url+'/personas');
  }
}