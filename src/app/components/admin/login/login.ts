import { Component, OnInit, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { HeaderSharedComponent } from '../../header-shared/header-shared.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [IonIcon, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  ngOnInit(): void {

  }
  password: FormControl<string> = new FormControl()

  checkRemember(e: Event) {
    alert(e.target)
  }

  validateForm(e: Event): null | void {
    if (this.password.value === null || this.password.value.length === 0) {
      alert(this.password.status)
      this.password.reset()
      // window.location.reload
    }
    // this.password.setValidators()
    alert(this.password.valid + '' + this.password.value + ' ' + this.password.status)
    console.log(this.password.value)
  }

  // private val
}
