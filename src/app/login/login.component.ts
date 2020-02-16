import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../service/login-service.service'
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public username: FormControl;
  public password: FormControl;



  constructor( private formBuilder: FormBuilder, public loginService : LoginService,private ngFlashMessageService: NgFlashMessageService,
    public router : Router
    ) {
      this.username = this.formBuilder.control('',Validators.required)
      this.password = this.formBuilder.control('',Validators.required)

      this.loginForm = new FormGroup({
        username: this.username,
        password: this.password
      });

   }

  ngOnInit() {
  }
  async onSubmit(customerData) {

    this.loginService.login(customerData).subscribe(resposta =>{
      console.log(resposta)
      // this.router('/receitas')
      this.router.navigate(["/receitas"])
    }, error => {
      console.log(error.error);
      this.ngFlashMessageService.showFlashMessage({
        messages: [error.error],
        dismissible: true,
        timeout: 4000,
        type: 'danger'
      });
        
      
    });
    this.loginForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
