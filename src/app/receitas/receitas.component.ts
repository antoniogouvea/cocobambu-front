import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../service/receitas.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {
public receitas:any
public form: FormGroup;

  constructor(public receitasService : ReceitasService, public router: Router, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      tipo: [''],
      tema: [''],
      nome: ['']
    });

   }

  ngOnInit() {
    this.form.get('nome').valueChanges
      .subscribe((queryField) => {
        if (queryField !== undefined && queryField !== '' && queryField !== null) {
          this.receitasService.continuosTypingNome(queryField).subscribe((response) => {
            this.receitas = response
            console.log(response)
          })
        }
      })


    this.receitasService.getAllReceitas().subscribe(resposta =>{
      console.log(resposta)
      this.receitas = resposta
    })
  }
  detalhe(id){
    this.router.navigate([`/receitas/detalhe/${id}`])
  }

}
