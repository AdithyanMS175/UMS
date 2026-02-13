import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // server_url = 'http://localhost:3000';
  server_url = 'https://ums-7b7t.onrender.com';
  http = inject(HttpClient);

  loginAPI(user: any) {
    return this.http.post(`${this.server_url}/login`, user);
  }
  addUserAPI(adduser: any) {
    return this.http.post(`${this.server_url}/addUser`, adduser);
  }

  getUsersAPI() {
    return this.http.get(`${this.server_url}/allUsers`);
  }

  getSingleUserAPI(id: string) {
    return this.http.get(`${this.server_url}/user/${id}`);
  }

  updateUserAPI(id: any, userData: any) {
    return this.http.put(`${this.server_url}/userupdate/${id}`, userData);
  }
}
