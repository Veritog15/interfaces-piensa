import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: '/src/app/pages/login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {} 

  onLogin() {
    console.log('Iniciar sesión');
  }

  onCreateAccount() {
    console.log('Crear usuario');
    this.router.navigate(['/create-account']); 
  }
}
