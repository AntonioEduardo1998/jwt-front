import { Component, inject } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  public userIsLogged$ = this.userService.userIsLogged();

  public logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
