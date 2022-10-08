import { Test, TestingModule } from '@nestjs/testing';
import { BullmqController } from './bullmq.controller';

describe('BullmqController', () => {
  let controller: BullmqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BullmqController],
    }).compile();

    controller = module.get<BullmqController>(BullmqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
