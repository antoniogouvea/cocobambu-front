import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../service/receitas.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {
public receitas:any

  constructor(public receitasService : ReceitasService, public router: Router) { }

  ngOnInit() {
    this.receitasService.getAllReceitas().subscribe(resposta =>{
      console.log(resposta)
      this.receitas = resposta
    })
  }
  detalhe(id){
    this.router.navigate([`/receitas/detalhe/${id}`])
  }

}
