import {PaymentMethod} from "./PaymentMethod";
import {User} from "./User";
import {Trip} from "./Trip";
import {BusStop} from "./BusStop";

export interface Reservation {
  id: number;
  user: User;
  trip: Trip;
  paymentMethod: PaymentMethod;
  stop: BusStop;
  passengersAmount: number;
  note?: string; // Optional
}
