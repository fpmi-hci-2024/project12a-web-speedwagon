import {EPaymentMethod} from "../../models/EPaymentMethod";

export interface CreateReservationRequest {
  userId: number;
  tripId: number;
  paymentMethod: EPaymentMethod;
  busStopId: number;
  passengersAmount: number;
  note?: string; // Optional
}
