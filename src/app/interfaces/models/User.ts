import {Role} from "./Role";

export interface User {
    id: number;
    email: string;
    phone: string;
    firstname: string;
    lastname: string;
    surname?: string;
    role: Role;
}
