export interface RegisterRequest {
  email: string;
  password: string;
  phone?: string; // Optional
  firstname: string;
  lastname: string;
  surname?: string; // Optional
}
