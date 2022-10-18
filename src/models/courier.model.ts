import {Entity, model, property} from '@loopback/repository';

@model()
export class Courier extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  courierName?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'number',
  })
  pincode?: number;

  @property({
    type: 'string',
  })
  nearestLandmark?: string;


  constructor(data?: Partial<Courier>) {
    super(data);
  }
}

export interface CourierRelations {
  // describe navigational properties here
}

export type CourierWithRelations = Courier & CourierRelations;
