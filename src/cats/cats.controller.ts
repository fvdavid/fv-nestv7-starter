import { Controller, Get, Req, Post, Param, Body, Query, Put, Delete, UsePipes, ParseUUIDPipe } from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exception/forbidden.exception';
import { HttpExceptionFilter } from 'src/exception/filter.exception';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { ParseIntPipe } from 'src/pipe/parse-int.pipe';

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
        if (id == 0) {
            throw new ForbiddenException();
        }
        return `this action return a #${id} cat`;
    }

    @Get('id')
    async findOneWithPipe(@Param('id', new ParseIntPipe()) id) {
        return this.catsService.findOne(id);
    }

    // with pipe parseUUID
    @Get('id')
    async findOneWithPipeUUID(@Param('id', new ParseUUIDPipe()) id) {
        return this.catsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    // Param-scoped pipes are useful when the validation logic concerns only one specified parameter.
    @Post()
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    // Alternatively, to set up a pipe at a method level, use the @UsePipes() decorator.
    @Post()
    @UsePipes(new ValidationPipe)
    async createSecond(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
