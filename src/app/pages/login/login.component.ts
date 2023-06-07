import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly userService = inject(UserService);

  private readonly fb = new FormBuilder().nonNullable;

  public form = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
  });

  public login(): void {
    this.userService
      .login({
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe({
        next: ({ access_token }) => {
          localStorage.setItem('@userToken', access_token);
          console.log('Login realizado com sucesso!');
        },
      });
  }
}
