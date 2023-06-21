import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  private readonly userService = inject(UserService);

  private readonly router = inject(Router);

  private readonly snackBar = inject(MatSnackBar);

  private readonly fb = new FormBuilder().nonNullable;

  public form = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
    status: this.fb.control(false),
  });

  public login(): void {
    this.userService
      .signup({
        name: this.form.value.name,
        email: this.form.value.email,
        password: this.form.value.password,
        status: this.form.value.status,
      })
      .pipe(
        tap(() => {
          this.snackBar.open('User created successfully!', 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['/create-product']);
        }),
        take(1)
      )
      .subscribe();
  }
}
