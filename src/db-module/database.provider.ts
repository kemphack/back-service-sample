import { createConnection } from 'typeorm';

export const postgresProvider =
{
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'fizJjXPrmtBP',
        database: 'test',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
    }),
};