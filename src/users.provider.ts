import { Connection, Repository } from 'typeorm';
import { User } from './entities/user.entity';

export const userProvider = 
{
  provide: 'USERS_REPOSITORY',
  useFactory: (connection: Connection) => connection.getRepository(User),
  inject: ['DATABASE_CONNECTION']
};