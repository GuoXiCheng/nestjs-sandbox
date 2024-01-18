import { GithubRepository } from "tiny-crud"
import { UserModel } from "./user-model";
import { GithubRequest } from "src/main";

export class UserRepository extends GithubRepository<UserModel> {
    constructor() {
        super(GithubRequest);
    }

    async findByName(name: string): Promise<UserModel[]> {
        const users = await this.find();
        return users.filter(user => user.name === name);
    }
}