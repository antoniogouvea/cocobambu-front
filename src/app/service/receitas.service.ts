import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'
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
  getById(id){
    const params = new HttpParams()
    .set('id', id)
    return this.http.get(`${this.apiUrl}?${params}`)
  }
}