import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';

import { IonSlides } from '@ionic/angular';
import { LocalStorageUsuarioService, UsuarioI } from '../../services/local-storage-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // llamamos al slide prncipal y le damos un nombre aca
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;//esto neceitams para impedir el movimiento manual del slide

  password;
  correo;

  paciente: UsuarioI;

  constructor(private localStorageUsuarioService: LocalStorageUsuarioService) { }

  ngOnInit() {

    this.slides.lockSwipes(true);//tambien hay que usar esto para impedir el movimeinto del slide principal
  }

  async signIn(){
    this.localStorageUsuarioService.cargarUsuario(this.password, this.correo)

    console.log('hizo click')
  }

  registro(fRegistro){

    console.log(fRegistro.valid)
  }

  



  mostrarRegistro(){

    this.slides.lockSwipes(false);
    this.slides.slideTo(0) //ve al slide 0 osea formulario de registro
    this.slides.lockSwipes(true);
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1)//ve al slide 1 osea formulario de login
    this.slides.lockSwipes(true);
  }

  

}
