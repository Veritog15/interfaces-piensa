import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-home',
  templateUrl: '/src/app/pages/intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  constructor(private router: Router) {} 

  onLogin() {
    console.log('Iniciar sesión');
    this.router.navigate(['/login']);
  }
}
