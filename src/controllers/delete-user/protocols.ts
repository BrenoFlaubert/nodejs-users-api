import { User } from "../../models/user";

export interface IDeleteUserController {
}

export interface IDeleteUserRepository {
    deleteUser(id: string): Promise<User>;
}