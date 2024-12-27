import {Route} from "./Route";
import {Bus} from "./Bus";

export interface Trip {
  id: number;
  bus: Bus;
  route: Route;
  totalSeats: number;
  freeSeats: number;
  date: string; // ISO string format (e.g., "2024-12-24")
  startTime: string; // ISO string (e.g., "10:00:00")
  endTime?: string; // Optional
  cost: number;
}
