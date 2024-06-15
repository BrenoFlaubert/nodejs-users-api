import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protrocols";

export interface ICreateUserController {
    handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>>;
}

export interface CreateUserParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ICreateUserRepository {
    createUser(params: CreateUserParams): Promise<User>;
}