import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onLogin(form: NgForm) {
    if (form.invalid) { return; }

    console.log('Formulario Enviado');
    console.log(this.usuario);
    console.log(form);
  }

}
