import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hostip } from "src/app/Modelos/hostip";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  localhost = Hostip;
  readonly URL_API_LOGIN = 'http://'+this.localhost+':3100/api/login';
  readonly URL_API_ADMIN = 'http://'+this.localhost+'/api/administradores_registros';

  constructor(private http: HttpClient) {
  }

  //Registrar login
  postLogin(username:String, password:String) {
    return this.http.post(this.URL_API_LOGIN+'/post/', {
      id_: username,
      password: password,     
    });     
  }

  //Eliminar Login
  deleteLogin(id: String) {
    return this.http.delete(this.URL_API_LOGIN+`/delete/${id}`);     
  }
 
  //obtener login
  getLogin(id: String) {
    return this.http.get(this.URL_API_LOGIN+`/get/${id}`);     
  }

  //obtener cuenta
  getAdmin(id: String, pass: String){
    return this.http.get(this.URL_API_ADMIN+`?filter=%7B%22id_%22%3A%22${id}%22%2C%20%22password%22%3A%22${pass}%22%7D`);     
  }


}
 