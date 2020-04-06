import { Controller, Get, Req, Post, Param, Body, Query, Put, Delete, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exception/forbidden.exception';
import { HttpExceptionFilter } from 'src/exception/filter.exception';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Get()
    // findAll(@Req() request: Request): string {
    //     return 'this action return all cats';
    // }
    findAll(@Query() query: ListAllEntities) {
        // return `This action returns all cats (limit: ${query.limit} items)`;
        return this,this.catsService.findAll();
    }

    @Get(':id')
    // findOne(@Param() params): string {
    //     console.log('param ID -> ', params.id);
    //     return `this action return a #${params.id} cat`;
    // }
    findOne(@Param('id') id): string {
        console.log('param ID -> ', id);

        // e.g
        if (id == 0) {
            // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
            throw new ForbiddenException();
        }

        return `this action return a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Post()
    @UseFilters(new HttpExceptionFilter)
    // create(): string {
    //     return 'This action adds a new cat';
    // }
    async create(@Body() createCatDto: CreateCatDto) {
        // return 'This action adds new cat';

        if (createCatDto.name == "fvsaddam") throw new ForbiddenException();

        this.catsService.create(createCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
