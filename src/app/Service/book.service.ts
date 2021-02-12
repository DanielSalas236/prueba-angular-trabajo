import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { ObjectBook } from 'src/app/Model/bookDomain/objectBook';
import { Observable } from 'rxjs';
import {ObjectResponse} from 'src/app/Model/objectResponse';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = environment.servicio;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  crearLibro(libro: ObjectBook): Observable<ObjectResponse> {
    return this.http.post<ObjectResponse>(this.url + '/book/save', libro, this.httpOptions);
  }

  listarLibros(){
    return this.http.get<ObjectResponse>(this.url + '/book/all');
  }

}
