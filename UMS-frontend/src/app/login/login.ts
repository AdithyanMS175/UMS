import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  api = inject(ApiService)
  router = inject(Router);
  fb = inject(FormBuilder);
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.api.loginAPI({ email, password }).subscribe({
        next: (res: any) => {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('user', JSON.stringify(res.user));
          this.loginForm.reset();
          alert('User Login successfully!!!');
          this.router.navigateByUrl('/userlist');
          
        },
        error: (reason: any) => {
          alert(reason.error);
        },
      });

      alert('API CALL');
    } else {
      alert('Invalid Form!!! Please Fill the Form with Valid Data');
    }
  }
}
