import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Tontinard, TontinardInfo } from 'src/app/shared/models/tontinard';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TontinardService } from 'src/app/shared/services/tontinard.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  tontinard: Tontinard = {} as Tontinard; // the model
  registryForm: FormGroup; // to point on Group tag in html
  errors: Object = {};
  isSubmitting = false;

  constructor(private router: Router,
    private tontinardService: TontinardService,// provides logic to manage tontinards
    private fb: FormBuilder) {
    // create form group using the form builder
    this.registryForm = this.fb.group({
      speechword: [''],
      userName: ['', Validators.required],
      password: ['', Validators.required], // Valid like angular
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
      confirmEmail: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    /* console.log(this.speechword?.value);
    console.log(this.userName?.value);
    console.log(this.password?.value);
    console.log(this.confirmPassword?.value);
    console.log(this.email?.value);
    console.log(this.confirmEmail?.value); */
    this.isSubmitting = true;
    this.updateTontinard(this.registryForm.value);


    // talk to server
    this.tontinardService.save(this.tontinard).subscribe(response => {
      this.isSubmitting = false;
      this.log(response);
    });
  }

  /**
   *
   * @param values
   */
  updateTontinard(values: any) {
    // throw new Error('Method not implemented.');
    Object.assign(this.tontinard, values);
  }

  // convenience getter for easy access to form fields
  get speechword() { return this.registryForm.get('speechword'); }
  get userName() { return this.registryForm.get('userName'); }
  get password() { return this.registryForm.get('password'); }
  get confirmPassword() { return this.registryForm.get('confirmPassword'); }
  get email() { return this.registryForm.get('email'); }
  get confirmEmail() { return this.registryForm.get('confirmEmail'); }

  private log(value: any) {
    console.info('Submittion', JSON.stringify(value, null, 4));
  }

}
