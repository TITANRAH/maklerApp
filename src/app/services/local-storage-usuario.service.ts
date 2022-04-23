import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { DbService } from './db.service';
import { Router } from '@angular/router';
import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageUsuarioService {

  usuario: UsuarioI;
  

  constructor(private database: DbService,
              private interactionService:  InteractionService,
              private router: Router
              ) {
    
    this.initUsuario();

  }

  async cargarUsuario( password: string, correo: string){

    const data: UsuarioI[] = await this.database.getData("usuarios")
    const usuario = data.find(usuario=> {

      if(password != usuario.password || correo!= usuario.correo){

        this.interactionService.presentToast('Credenciales no validas', 3000)
      }else{

        //this.router.navigate(['/#'])
        this.interactionService.presentToast(`Bienvenido ${usuario.nombre}`, 3000 )
        return usuario.password == password && usuario.correo == correo;

      }
    })  

    this.setObject(usuario);
    //console.log(paciente); 
    return usuario;

  }


  initUsuario(){

    this.usuario = {

      idUsuario: null,
      nombre: null,
      apellido: null,
      correo : null,
      token : null,
      password: null,
    }
  }
  // const usuario: PacienteI[] = await this.database.getData("pacientes")
  


  async setObject(usuario: UsuarioI){
 
    await Storage.set({
      
      key: 'Usuario',
      value: JSON.stringify(
        usuario
      )
    });
    
  }
}

export interface UsuarioI {


  idUsuario: string,
  nombre: string,
  apellido: string,
  correo: string,
  token: string,
  password: string,

}

