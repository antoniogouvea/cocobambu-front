import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  public apiUrl = "http://localhost:8080/api/receitas"
  private data : Object
  constructor(private http: HttpClient) { }

  getAllReceitas() {
    return this.http.get(this.apiUrl);
  }
}