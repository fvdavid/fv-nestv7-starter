export class CreateCatDto {
    name: string;
    age: number;
    breed: string;
}

export class ListAllEntities {
    name: string;
    limit: number;
}

export class UpdateCatDto {
    id: string;
    name: string;
    age: number;
    breed: string;
}