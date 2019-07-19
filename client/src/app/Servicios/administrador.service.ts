import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrador } from '../Modelos/administrador';
import { Hostip } from "src/app/Modelos/hostip";

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  readonly URL_API = 'http://'+Hostip+'/api/administradores_registros';
  admin: Administrador;
  admins: Administrador[];

  constructor(private http: HttpClient) { }

  //Obtener todos los administradores
  getAdministradores(){
    return this.http.get(this.URL_API);
  }

  //Obtener administrador especifico
  getAdministrador(id: String){
    return this.http.get(this.URL_API + `?filter=%7B%22id_%22%3A%22${id}%22%7D`);
  }

  //crear un nuevo administrador
  postAdministrador(admin: Object){
    return this.http.post(this.URL_API, admin);
  }

  //Restablecer password administrador
  putAdministradorPass(admin: Object){
    return this.http.put(this.URL_API + `${admin['_id']}`, {password: admin['password']});
  }

  //Eliminar administrador
  deleteAdministrador(id: String){
    return this.http.delete(this.URL_API + `/delete/${id}`);
  }
}
