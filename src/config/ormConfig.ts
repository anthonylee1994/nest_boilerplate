const isProduction = () => process.env.NODE_ENV === 'production';
const SOURCE_PATH = isProduction() ? 'dist' : 'src';
export const ormConfig = {
    type: 'mysql',
    host: isProduction() ? 'mysql' : 'localhost',
    port: isProduction() ? 3306 : 2318,
    database: 'nest_boilerplate',
    username: 'nest_boilerplate',
    password: 'p@ssw0rd',
    entities: [
        `${SOURCE_PATH}/**/models/**{.ts,.js}`,
    ],
    synchronize: true,
    logging: false,
};