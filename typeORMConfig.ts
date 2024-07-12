import { User, Comment, Topic } from 'src/entities';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// TODO: Check if this is best practice
import * as dotenv from 'dotenv';
dotenv.config();

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [User, Topic, Comment],
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

export default config;
