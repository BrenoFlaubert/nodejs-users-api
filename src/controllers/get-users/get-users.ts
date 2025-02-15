import { IGetUsersController, IGetUsersRepository } from "./protrocols";

export class GetUsersController implements IGetUsersController {
    constructor(private readonly getUsersRepository: IGetUsersRepository){
        this.getUsersRepository = getUsersRepository;
    }
    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers()
            return {
                statusCode: 200,
                body: users
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong.'
            }
        }

    }
    
}