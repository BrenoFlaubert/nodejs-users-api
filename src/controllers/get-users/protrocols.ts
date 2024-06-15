import { User } from "../../models/user"
import { HttpResponse } from "../protrocols"

export interface IGetUsersController {
    handle(): Promise<HttpResponse<User[]>>
}

export interface IGetUsersRepository {
    getUsers(): Promise<User[]>
}