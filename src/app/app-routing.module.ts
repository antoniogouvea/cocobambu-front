import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { ReceitasComponent } from '../app/receitas/receitas.component'
import { ReceitasDetalheComponent } from '../app/receitas/receitas-detalhe/receitas-detalhe.component'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'receitas', component: ReceitasComponent},
  { path: 'receitas/detalhe/:id', component: ReceitasDetalheComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
