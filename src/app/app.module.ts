import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgFlashMessagesModule } from "ng-flash-messages";
// import { Router, RouterModule } from "@angular/router"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login-service.service';
import { ReceitasComponent } from './receitas/receitas.component';
import { ReceitasDetalheComponent } from './receitas/receitas-detalhe/receitas-detalhe.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReceitasComponent,
    ReceitasDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    LoginService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
