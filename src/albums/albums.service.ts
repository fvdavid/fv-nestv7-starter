import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectEntityManager } from "@nestjs/typeorm";
import { Connection, EntityManager } from "typeorm";

@Injectable()
export class AlbumService {

    constructor(
        @InjectConnection('albumConnection')
        private connection: Connection,
        @InjectEntityManager('albumConnection')
        private entityManager: EntityManager,
    ) { }
}
