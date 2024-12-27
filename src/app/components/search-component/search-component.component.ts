import { Component } from '@angular/core';
import { CalculationService } from "../../services/calc.service";
import {  Result, MatrixSum, Matrix, MatrixSub, MatrixMul, MatrixSystem, MatrixReverse, MatrixTranspose, MatrixMulByNum, MatrixDeterminant } from "../../interfaces/calculation";
import { Router } from "@angular/router";
import { LanguageService } from '../../services/language.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponent {
  selectedLanguage: string;
  showLanguageMenu: boolean = false;
  languageChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private calcService: CalculationService,
    private router: Router,
    private languageService: LanguageService
  ) { this.selectedLanguage = this.languageService.getLanguage();}
 ngOnInit() {
    this.languageService.languageChanged.subscribe(() => {
      this.selectedLanguage = this.languageService.getLanguage();
    });
  }





getTranslation(key: string): string {
  return this.languageService.getTranslation(key);
}

toggleLanguageMenu(): void {
  this.showLanguageMenu = !this.showLanguageMenu;
}

changeLanguage(language: string): void {
  this.languageService.setLanguage(language);
  this.languageService.selectedLanguageChanged.next(language);
  this.showLanguageMenu = !this.showLanguageMenu;
}
}
