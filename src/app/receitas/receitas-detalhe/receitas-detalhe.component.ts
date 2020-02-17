import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceitasService } from '../../service/receitas.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-receitas-detalhe',
  templateUrl: './receitas-detalhe.component.html',
  styleUrls: ['./receitas-detalhe.component.scss']
})
export class ReceitasDetalheComponent implements OnInit {
  public id: String
  public receita: any
  public ingredientes: Array<String>
  public passos: Array<String>
  public imagem: String
  public tempoPreparo: String
  public nomeReceita: String
  public descricaoReceita: String
  public i = 0
  public porcentagem: Number = 0
  public checkIngredientes: Boolean = false
  public checkPassos: Boolean = false
  public allChecked: Boolean = false

  constructor(private router: Router, private route: ActivatedRoute, public receitasService: ReceitasService, public ngbModule: NgbModule) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.receitasService.getById(this.id).subscribe(resposta => {
        this.receita = resposta[0]
        this.ingredientes = this.receita.ingredientes
        this.passos = this.receita.passos
        this.imagem = this.receita.imagemgrd
        this.tempoPreparo = this.receita.tempoReceita
        this.nomeReceita = this.receita.nome
        this.descricaoReceita = this.receita.descricao
      })
    });
  }
atualizarProgresso(){
  let total = this.passos.length + this.ingredientes.length
  let porcem = (((this.i/total)/100)*100)*100
  this.porcentagem = parseFloat(porcem.toFixed(2))
  if(this.checkPassos && this.checkIngredientes){
    this.allChecked = true
  }
}
  checkBoxIngredientes(e) {
    if (e.target.checked == true) {
      this.i = this.i + 1
    }
    else {
      this.i = this.i - 1
    }
    this.atualizarProgresso()
    if (this.i == this.ingredientes.length) {
      this.checkIngredientes = true
    }
  }  
  checkBoxPassos(e) {
    if (e.target.checked == true) {
      this.i = this.i + 1
    }
    else {
      this.i = this.i - 1
    }
    this.atualizarProgresso()

    if (this.i == this.passos.length) {
      this.checkPassos = true
    }
  }

}
