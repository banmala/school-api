import { Injectable } from '@nestjs/common';
import AppDataSource from 'src/configs/datasource';
import { General } from './interfaces/main.interface';
import { EntityManager } from 'typeorm';

@Injectable()
export class MainService {
  filter: General;

  public filterBy(filter: General) {
    this.filter = {
      where: {
        ...filter,
      },
    };

    return this;
  }

  public relationBy(relation:General) {
    this.filter = {
      ...this.filter,
      relations: {
        ...relation
      },
    };

    return this;
  }

  public selectBy(selection:String[]) {
    this.filter = {
      ...this.filter,
      select:selection
    };

    return this;
  }

  public orderBy(order: General) {
    this.filter = {
      ...this.filter,
      order: {
        ...order,
      },
    };

    return this;
  }

  public take(count: number) {
    this.filter = {
      ...this.filter,      
      take: count,
    };
    return this;
  }

  public skip(count: number) {
    this.filter = {
      ...this.filter,      
      skip: count,
    };
    return this;
  }

  public async find(entity: any) {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const response: any = await queryRunner.manager.find(entity, this.filter);
      return response;
    } catch (error) {
      throw error;
    } finally {
      this.filter = {};
      await queryRunner.release();
    }
  }

  public async findOne(entity: any) {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const response: any = await queryRunner.manager.findOne(
        entity,
        this.filter,
      );
      return response;
    } catch (error) {
      throw error;
    } finally {
      this.filter = {};
      await queryRunner.release();
    }
  }

  public async save(entity: any, data: any) {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const response: any = await queryRunner.manager.save(entity, data);
      return response;
    } catch (error) {
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  public async remove(entity: any, id: number) {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    try {
      const response: any = await queryRunner.manager.delete(entity, id);
      return response;
    } catch (error) {
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  public async runTransaction(execute: (manager: EntityManager) => void) {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const response: any = await execute(queryRunner.manager);
      await queryRunner.commitTransaction();
      return response;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  public async runQuery(query: string) {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    try {
      const response: any = await queryRunner.query(query);
      return response;
    } catch (error) {
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
