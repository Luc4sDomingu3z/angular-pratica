import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { HeaderSharedComponent } from '../../header-shared/header-shared.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [IonIcon, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  ngOnInit(): void {

  }

  checkRemember(e: Event) {
    alert(e.target)
  }

  nome = ''
  senha = ''
  dataAtual = new Date()

  constructor(private router: Router) { }

  hide = signal(true)
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide())
    event.stopPropagation()
  }

  login() {
    if (this.nome !== 'admin' || this.senha !== '123456') {
      alert('Nome ou senha Invalidos')
    } else {
      this.router.navigate(['/dashboard'])
    }
  }
  // validateForm(e: Event): null | void {
  //   if (this.password.value === null || this.password.value.length === 0) {
  //     alert(this.password.status)
  //     this.password.reset()
  //     // window.location.reload
  //   }
  //   // this.password.setValidators()
  //   alert(this.password.valid + '' + this.password.value + ' ' + this.password.status)
  //   console.log(this.password.value)
  // }

  public logado: boolean = true
  // private val
}
