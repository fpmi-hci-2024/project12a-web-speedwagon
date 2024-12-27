import {BusStop} from "./BusStop";

export interface Route {
  id: number;
  startPoint: BusStop;
  destinationPoint: BusStop;
  listOfStopsId: string;
}
