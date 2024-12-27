import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Route} from "../interfaces/models/Route";

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private baseUrl = 'http://localhost:8080/api/v1/routes';

  constructor(private http: HttpClient) {}

  // Получить все маршруты
  getAllRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>(`${this.baseUrl}`);
  }

  // Пример метода для получения маршрута по ID
  getRouteById(routeId: number): Observable<Route> {
    return this.http.get<Route>(`${this.baseUrl}/${routeId}`);
  }
}
