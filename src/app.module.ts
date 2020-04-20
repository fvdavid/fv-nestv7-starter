import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { User } from './users/user.entity';
import { Album } from './albums/album.entity';

// for multi database
const defaultOptions = {
  type: 'postgres',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  synchronize: true,
};

@Module({
  imports: [
    // TypeOrmModule.forRoot({
      // type: 'mysql',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: 'root',
      // database: 'test',
      // entities: [User],
      // synchronize: true,
      // autoLoadEntities: true
    // }),

    // TypeOrmModule.forRoot({
    //   ...defaultOptions,
    //   host: 'user_db_host',
    //   entities: [User],
    // }),
    // TypeOrmModule.forRoot({
    //   ...defaultOptions,
    //   name: 'albumsConnection',
    //   host: 'album_db_host',
    //   entities: [Album],
    // }),

    TypeOrmModule.forFeature([ User ]),
    TypeOrmModule.forFeature([ Album ], 'albumConnection'),
    UsersModule,
  ],
})
export class AppModule {
  
  constructor(private connection: Connection) { }
}
