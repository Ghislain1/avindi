import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// READ: https://angular.io/start/start-forms
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  items: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  message: string = "";
  // To gather the user's name and password,
  loginForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  constructor(public authService: AuthService,
    private formBuilder: FormBuilder,
    public router: Router) {
    // this.message = this.getMessage();
  }

  ngOnInit(): void {
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }


  onSubmit(): void {

    this.login();

    if (this.authService.isLoggedIn) {
      this.loginForm.reset();
    }
    console.warn('Your order has been submitted', this.loginForm.value);
  }

  private login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        let redirectUrl = '/admin';
        if ((this.name?.value === "admin") && (this.password?.value === "admin")) {
          this.authService.isAdmin = true;
        }
        else {
          redirectUrl = '/home';
          this.authService.isAdmin = false;
        }

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }

  // convenience getter for easy access to form fields
  get name() { return this.loginForm.get('name'); }
  get password() { return this.loginForm.get('password'); }

}
