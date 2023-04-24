import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  classNome = [''];
  classEmail = [''];
  nome: string = '';
  email: string = '';
  errors: any = {
    user: false,
    pass: false
  }

  login(): void {
    if(this.nome.trim().length == 0){
      this.classNome = ['inputRed']
    } else{
      this.classNome = ['inputYellow']
    }
    if(this.email.trim().length == 0){
      this.classEmail = ['inputRed']
    } else{
      this.classEmail = ['inputYellow']
    }
  }
}
