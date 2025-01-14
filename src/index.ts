import express from 'express'
import {config} from 'dotenv'
import { GetUsersController } from './controllers/get-users/get-users'
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users'
import { MongoClient } from './database/mongo'
import { MongoCreateUserRepository } from './repositories/create-user/mongo-create-user'
import { CreateUserController } from './controllers/create-user/create-user'
import { MongoUpdateUserRepository } from './repositories/update-user/mongo-update-user'
import { UpdateUserController } from './controllers/update-user/update-user'
import { MongoDeleteUserRepository } from './repositories/delete-user/mongo-delete-user'
import { DeleteUserController } from './controllers/delete-user/delete-user'


const main = async () => {
    config();

    await MongoClient.conect()

    const app = express()

    app.use(express.json())

    app.get("/users",async (req, res) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository()
        const getUsersController = new GetUsersController(mongoGetUsersRepository)
        const {body, statusCode} = await getUsersController.handle()
        res.status(statusCode).send(body)
    })

    app.post("/users", async (req, res) => {
        const mongoCreateuserRepository = new MongoCreateUserRepository()
        const createUserController = new CreateUserController(mongoCreateuserRepository)
        const { body, statusCode} = await createUserController.handle({
            body: req.body,
        });
        res.status(statusCode).send(body)
    })

    app.patch("/users/:id", async (req, res) => {
        const mongoUpdateUserRepository = new MongoUpdateUserRepository();
        const updateUserController = new UpdateUserController(mongoUpdateUserRepository)
        const {body, statusCode} = await updateUserController.handle({
            params: req.params.id, 
            body: req.body
        })
        res.status(statusCode).send(body)
    })

    app.delete("/users/:id", async (req, res) => {
        const mongoDeleteUserRepository = new MongoDeleteUserRepository();
        const deleteUserController = new DeleteUserController(mongoDeleteUserRepository)
        const {body, statusCode} = await deleteUserController.handle({
            params: req.params, 
        })
        res.status(statusCode).send(body)
    })
    const port = process.env.PORT || 8000

    app.listen(port, () => console.log(`Listening on port ${port}`))
};

main()