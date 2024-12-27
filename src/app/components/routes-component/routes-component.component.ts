import {Component} from '@angular/core';
import {CalculationService} from "../../services/calc.service";
import {BasicArithmetic, Result} from "../../interfaces/calculation";
import {Router} from "@angular/router";
import {LanguageService} from '../../services/language.service';
import {Output, EventEmitter} from '@angular/core';
import {Route} from "../../interfaces/models/Route";
import {RouteService} from "../../services/route.service";

@Component({
  selector: 'app-routes-component',
  templateUrl: './routes-component.component.html',
  styleUrls: ['./routes-component.component.css']
})
export class RoutesComponent {
  inputValue: string = '';
  isInputFocused: boolean = false;
  calculationResult: string | undefined;
  @Output() resultEvent = new EventEmitter<Result>();

  inputError: string = '';

  constructor(
    private calcService: CalculationService,
    private router: Router,
    private languageService: LanguageService,
    private routeService: RouteService
  ) {
  }

  ngOnInit() {
    this.languageService.languageChanged.subscribe(() => {
      this.languageChangedCallback();
    });
    this.fetchRoutes();
  }

  languageChangedCallback() {
    this.inputError = '';
  }

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    setTimeout(() => {
      this.isInputFocused = false;
    }, 200);
  }

  addCharacter(character: string) {
    this.inputValue += character;
  }

  deleteLastCharacter() {
    this.inputValue = this.inputValue.slice(0, -1);
  }

  clearInput() {
    this.inputValue = '';
  }


  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  calculateBasicArithmetic() {
    const userId = localStorage.getItem('userId');
    const calcData: BasicArithmetic = {
      userId: userId,
      expression: this.inputValue,
      library: localStorage.getItem("Library") as string
    };

    this.calcService.createCalculationBasicArithmetic(calcData as BasicArithmetic).subscribe(
      response => {
        const obj: Result = {
          time: response.data.time,
          result: response.data.result
        }
        this.resultEvent.emit(obj);
      },
      error => {
        this.resultEvent.emit(error.error.error);
      }
    );
  }

  routes: Route[] = []; // Хранение маршрутов

  // Метод для загрузки маршрутов
  fetchRoutes() {
    this.routeService.getAllRoutes().subscribe({
      next: (data) => {
        this.routes = data;
        console.log('Маршруты загружены:', data);
      },
      error: (error) => {
        console.error('Ошибка при загрузке маршрутов:', error);
      },
    });
  }
}
