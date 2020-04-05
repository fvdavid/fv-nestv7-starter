import { Controller, Get, Req, Post, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {

    @Get()
    // findAll(@Req() request: Request): string {
    //     return 'this action return all cats';
    // }
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id')
    // findOne(@Param() params): string {
    //     console.log('param ID -> ', params.id);
    //     return `this action return a #${params.id} cat`;
    // }
    findOne(@Param('id') id): string {
        console.log('param ID -> ', id);
        return `this action return a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Post()
    // create(): string {
    //     return 'This action adds a new cat';
    // }
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds new cat';
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
