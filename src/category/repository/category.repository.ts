import { EntityRepository, Repository } from 'typeorm'
import { Category } from '../entities'

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {}
