import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../service/receitas.service'
@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {
public receitas:any

  constructor(public receitasService : ReceitasService) { }

  ngOnInit() {
    this.receitasService.getAllReceitas().subscribe(resposta =>{
      console.log(resposta)
      this.receitas = resposta
    })
  }

}
