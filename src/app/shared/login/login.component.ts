import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // llamamos al slide prncipal y le damos un nombre aca
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;//esto neceitams para impedir el movimiento manual del slide

  constructor() { }

  ngOnInit() {

    this.slides.lockSwipes(true);//tambien hay que usar esto para impedir el movimeinto del slide principal
  }

  login(fLogin: NgForm){

    console.log(fLogin.valid) //veo si el formulario es valido
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
