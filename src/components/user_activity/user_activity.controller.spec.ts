import { Test, TestingModule } from '@nestjs/testing';
import { UserActivityController } from './user_activity.controller';
import { UserActivityRepository } from './user_activity.repository';

describe('UserActivityController', () => {
  let controller: UserActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserActivityController],
      providers: [UserActivityRepository],
    }).compile();

    controller = module.get<UserActivityController>(UserActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
