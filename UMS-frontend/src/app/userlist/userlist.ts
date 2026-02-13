import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../services/api-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-userlist',
  imports: [RouterLink],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {

  allUsers:any = signal([])
  api = inject(ApiService)
  
  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.api.getUsersAPI().subscribe((res:any)=>{
      this.allUsers.set(res);
      console.log(res);
    })
  }

   
}
