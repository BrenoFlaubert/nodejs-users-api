import { IGetUsersRepository } from "../controllers/get-users/protrocols";
import { User } from "../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [{
            firstName: 'Breno',
            lastName: 'flaubert de souza',
            email: 'brenoflaubert@gmail.com',
            password: '1234'
        }]
    }
}