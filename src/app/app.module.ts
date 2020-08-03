import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PagprincipalComponent } from './componentes/pagprincipal/pagprincipal.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { TemlplateComponent } from './componentes/temlplate/temlplate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    PagprincipalComponent,
    FotosComponent,
    ServiciosComponent,
    ContactanosComponent,
    TemlplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
