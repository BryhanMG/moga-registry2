import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "src/app/Modelos/usuario";
import { Hostip } from "src/app/Modelos/hostip";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  readonly URL_API = 'http://'+Hostip+'/api/usuarios/';
  usuario: Usuario;

  constructor(private http: HttpClient) { }

  //Crear nuevo registro de usuario
  postUsuario(usuario: Usuario){
    return this.http.post(this.URL_API , {
      id_:usuario.id_,
      nombres:usuario.nombres,
      apellidos:usuario.apellidos,
      correo:usuario.correo
    });
  }

  //Obtener la informacion de un candidato (informacion del usuario)
  getUsuario(id: String){
    return this.http.get(this.URL_API + `?filter=%7B%22id_%22%3A%22${id}%22%7D`);
  }

  //Actualizar registro de usuario
  putUsuario(usuario: Usuario){
    return this.http.put(this.URL_API + `${usuario._id}`, {
      id_:usuario.id_,
      nombres:usuario.nombres,
      apellidos:usuario.apellidos,
      correo:usuario.correo
    });
  }

  //Eliminar registro de usuario
  deleteUsuario(id: String){
    return this.http.delete(this.URL_API + `${id}`);
  }
}
