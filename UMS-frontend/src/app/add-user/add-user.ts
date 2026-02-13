import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  api = inject(ApiService);
  router = inject(Router);
  fb = inject(FormBuilder);

  addUserForm: FormGroup;

  constructor() {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  addUser() {
    if (this.addUserForm.valid) {
      const email = this.addUserForm.value.email
      const name = this.addUserForm.value.name
      const phone = this.addUserForm.value.phone
      const age = this.addUserForm.value.age

      this.api.addUserAPI({email,name,phone,age}).subscribe({
        next: (res: any) => {
          alert('User added successfully!');
          this.addUserForm.reset();
          this.router.navigateByUrl('/userlist');
        },
        error: (reason: any) => {
          alert(reason.error);
        }
      });
      

    } else {
      alert('Invalid Form!!! Please fill all fields correctly');
    }
  }

}
