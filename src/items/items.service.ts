import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '6hft9b3765dfw6d1',
      name: 'Item 1',
      qty: 1,
      description: 'description for item 1',
    },
    {
      id: '6hft9b3765dfw6d2',
      name: 'Item 2',
      qty: 2,
      description: 'description for item 2',
    },
    {
      id: '6hft9b3765dfw6d3',
      name: 'Item 3',
      qty: 3,
      description: 'description for item 3',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id == id);
  }
}
