import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Courier} from '../models';
import {CourierRepository} from '../repositories';

export class CourierController {
  constructor(
    @repository(CourierRepository)
    public courierRepository : CourierRepository,
  ) {}

  @post('/couriers')
  @response(200, {
    description: 'Courier model instance',
    content: {'application/json': {schema: getModelSchemaRef(Courier)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Courier, {
            title: 'NewCourier',
            exclude: ['id'],
          }),
        },
      },
    })
    courier: Omit<Courier, 'id'>,
  ): Promise<Courier> {
    return this.courierRepository.create(courier);
  }

  @get('/couriers/count')
  @response(200, {
    description: 'Courier model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Courier) where?: Where<Courier>,
  ): Promise<Count> {
    return this.courierRepository.count(where);
  }

  @get('/couriers')
  @response(200, {
    description: 'Array of Courier model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Courier, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Courier) filter?: Filter<Courier>,
  ): Promise<Courier[]> {
    return this.courierRepository.find(filter);
  }

  @patch('/couriers')
  @response(200, {
    description: 'Courier PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Courier, {partial: true}),
        },
      },
    })
    courier: Courier,
    @param.where(Courier) where?: Where<Courier>,
  ): Promise<Count> {
    return this.courierRepository.updateAll(courier, where);
  }

  @get('/couriers/{id}')
  @response(200, {
    description: 'Courier model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Courier, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Courier, {exclude: 'where'}) filter?: FilterExcludingWhere<Courier>
  ): Promise<Courier> {
    return this.courierRepository.findById(id, filter);
  }

  @patch('/couriers/{id}')
  @response(204, {
    description: 'Courier PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Courier, {partial: true}),
        },
      },
    })
    courier: Courier,
  ): Promise<void> {
    await this.courierRepository.updateById(id, courier);
  }

  @put('/couriers/{id}')
  @response(204, {
    description: 'Courier PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() courier: Courier,
  ): Promise<void> {
    await this.courierRepository.replaceById(id, courier);
  }

  @del('/couriers/{id}')
  @response(204, {
    description: 'Courier DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.courierRepository.deleteById(id);
  }
}
