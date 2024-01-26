 import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      usuario:['',Validators.required],
      clave:['',Validators.required]
    })
  }

  ngOnInit():void{

  }

  ingresar(){
    
    const usuario = this.form.value.usuario;
    const clave = this.form.value.clave;

    if(usuario==clave){
      this.mensajeAdvertencia();
    }else{
      this.router.navigate(['dashboard']);
    }
  
  }

  mensajeAdvertencia(){
    this._snackBar.open('Datos de acceso incorrectos', '',{
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }

}
