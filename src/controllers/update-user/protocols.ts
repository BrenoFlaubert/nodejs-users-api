import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protrocols";

export interface IUpdateUserController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>
}

export interface UpdateUserParams {
    firstName?: string,
    lastName?: string,
    password?: string
}

export interface IUpdateUserRepository {
    updateUser(id: string, params: UpdateUserParams): Promise<User>
}