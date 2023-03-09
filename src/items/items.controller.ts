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
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.findOne(id);
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
