import { Injectable, Inject } from '@nestjs/common';
import { User } from './entities/user.entity'
import { DeleteResult, Repository, UpdateResult } from 'typeorm'

@Injectable()
export class AppService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  addUser(u : User): Promise<User> {
    return this.usersRepository.save(u);
  }

  updateUser(id : number, u : User): Promise<UpdateResult>{
    return this.usersRepository.update({id : id}, u);
  }

  removeUser(id : number): Promise<DeleteResult>{
    return this.usersRepository.delete({id : id});
  }

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
