import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {
  api = inject(ApiService);
  user: any = signal([]);
  router = inject(Router);

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      this.api.getSingleUserAPI(id).subscribe((res) => {
        console.log(res);
        this.user.set(res);
      });
    }
  }

  updateUser() {
    const id = this.route.snapshot.paramMap.get('id');

    const { name, email, phone, age } = this.user();

    if (name && email && phone && age) {
      this.api.updateUserAPI(id, this.user()).subscribe((res: any) => {
        alert('User Updated Successfully!');
        this.router.navigateByUrl('/userlist');
      });
    } else {
      alert('Fill all fields!');
    }
  }
}
