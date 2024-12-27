import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import {RegisterRequest} from "../../interfaces/requests/RegisterRequest";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  selectedLanguage: string;
  private languageSubscription: Subscription | undefined;
inputError: string = '';
  registerForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+(?:[- ][a-zA-Zа-яА-ЯёЁ]+)*$/)]],
    lastname: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+(?:[- ][a-zA-Zа-яА-ЯёЁ]+)*$/)]],
    surname: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+(?:[- ][a-zA-Zа-яА-ЯёЁ]+)*$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+375(25|29|33|44)\d{7}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
private languageService: LanguageService
  ) {
    this.selectedLanguage = this.languageService.getLanguage();
  }
  ngOnInit() {
    this.languageSubscription = this.languageService.selectedLanguageChanged.subscribe(() => {
      this.selectedLanguage = this.languageService.getLanguage();
    });
  }
languageChangedCallback() {
  this.inputError = this.languageService.getTranslation('Input Error');
  console.log('Current language:', this.languageService.getLanguage());
  console.log('Translated input error:', this.inputError);
}
getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
  get firstname() {
    return this.registerForm.controls.firstname;
  }
  get lastname() {
    return this.registerForm.controls.lastname;
  }
  get surname() {
    return this.registerForm.controls.surname;
  }
  get phone() {
    return this.registerForm.controls.phone;
  }

  get email() {
    return this.registerForm.controls.email;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  get confirmPassword() {
    return this.registerForm.controls.confirmPassword;
  }

  submitDetails() {
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;

    this.authService.registerUser(postData as RegisterRequest).subscribe(
      response => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registered successfully' });
        this.router.navigate(['login']);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
      }
    );
  }
}
