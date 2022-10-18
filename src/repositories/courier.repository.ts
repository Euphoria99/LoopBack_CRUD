import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Courier, CourierRelations} from '../models';

export class CourierRepository extends DefaultCrudRepository<
  Courier,
  typeof Courier.prototype.id,
  CourierRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Courier, dataSource);
  }
}
