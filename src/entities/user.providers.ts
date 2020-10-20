import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

export const usersProvider = 
{
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
};
