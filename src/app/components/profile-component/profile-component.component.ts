import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponent {
  selectedCalculations: string = "BA";
  inputValue: string = '';
  isInputFocused: boolean = false;
  calculationResult: string | undefined;
  calculationTime: number | undefined = 0;
  
inputError: string = '';
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) { }
 ngOnInit() {
    this.languageService.languageChanged.subscribe(() => {
      this.languageChangedCallback();
    });
  }

  languageChangedCallback() {
    this.inputError = '';
  }


getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }





}

