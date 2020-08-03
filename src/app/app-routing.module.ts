import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PagprincipalComponent } from './componentes/pagprincipal/pagprincipal.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { TemlplateComponent } from './componentes/temlplate/temlplate.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsuarioComponent},
  {path:'',component:PagprincipalComponent},
  {path:'contac',component:ContactanosComponent},
  {path:'fotos',component:FotosComponent},
  {path:'servic',component:ServiciosComponent},
  {path:'templete',component:TemlplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
