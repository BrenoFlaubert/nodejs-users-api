import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protrocols";

export interface IDeleteUserController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> 
}

export interface IDeleteUserRepository {
    deleteUser(id: string): Promise<User>;
}