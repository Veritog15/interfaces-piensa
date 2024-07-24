import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '/src/app/pages/create-account.component.html',
  styleUrls: ['/src/app/components/create-account/create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private router: Router) {}

  onLogin() {
    console.log('Iniciar sesión');
    this.router.navigate(['/login']);
  }
}
