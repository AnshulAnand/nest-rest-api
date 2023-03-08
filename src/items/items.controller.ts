import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param() param: { id: number }): string {
    return `Item ${param.id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return createItemDto.name + ' ' + createItemDto.description;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `Delete item ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id: number,
  ): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
