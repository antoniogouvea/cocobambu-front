import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceitasService } from '../../service/receitas.service'
import { NgbModule, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment'
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
  public countingredientes = 0
  public countpassos = 0
  public porcentagem: Number = 0
  public checkIngredientes: Boolean = false
  public checkPassos: Boolean = false
  public allChecked: Boolean = false
  public inicio: any
  public segundos: Number
  public minutos: Number

  constructor(private router: Router, private route: ActivatedRoute, public receitasService: ReceitasService, public ngbModule: NgbModule,
    config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.inicio = moment()
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
  open(naoFinalizado) {

    if (!this.checkIngredientes) {
      this.modalService.open(naoFinalizado);
    }

  }
  openFinal(finalizado) {

    if (this.checkIngredientes) {
      this.modalService.open(finalizado);
    }
  }

  atualizarProgresso() {
    let total = this.passos.length + this.ingredientes.length
    let totalCount = this.countingredientes + this.countpassos
    let porcem = (((totalCount / total) / 100) * 100) * 100
    this.porcentagem = parseFloat(porcem.toFixed(2))

    if (this.checkPassos == true && this.checkIngredientes == true) {
      this.segundos = moment().diff(this.inicio, 'seconds')
      this.minutos = moment().diff(this.inicio, 'minutes')
      this.allChecked = true
    }
  }
  checkBoxIngredientes(e) {
    if (e.target.checked == true) {
      this.countingredientes = this.countingredientes + 1
    }
    else {
      this.countingredientes = this.countingredientes - 1
    }
    if (this.countingredientes == this.ingredientes.length) {
      this.checkIngredientes = true
    }
    this.atualizarProgresso()

  }
  checkBoxPassos(e) {
    if (e.target.checked == true) {
      this.countpassos = this.countpassos + 1
    }
    else {
      this.countpassos = this.countpassos - 1
    }
    if (this.countpassos == this.passos.length) {
      this.checkPassos = true
    }
    this.atualizarProgresso()
  }

}
