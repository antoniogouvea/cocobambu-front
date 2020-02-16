import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public apiUrl = "http://localhost:8080/api/user/login"
  private data : Object
  constructor(private http: HttpClient) { }

  login(clienteData: Object) {
    this.data = clienteData

    return this.http.post(this.apiUrl, this.data);
  }
}
